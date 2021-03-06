import { PDFViewer } from '@react-pdf/renderer';
import React, { Component } from 'react';
import Form from '../features/form/screens/Form';
import Header from '../features/navbar/screens/Header';
import { PageOptions, PDF } from '../features/pdf/screens';
import { objectHasProperty, repeat } from '../utils/utility';

class App extends Component {
    constructor() {
        super();

        this.template = {
            isSubmitted: false,
            isReset: false,
            personal: [
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    residence: '',
                },
            ],
            education: [
                {
                    schoolName: '',
                    fieldOfStudy: '',
                    location: '',
                    date: '',
                    editor:
                        '<ul><li><strong>Current GPA</strong>: 4.0</li><li><strong>Projects</strong>: Facebook clone, Battleship</li></ul>',
                },
            ],
            work: [
                {
                    companyName: '',
                    jobTitle: '',
                    location: '',
                    date: '',
                    editor:
                        '<ul><li>Coordinated movement of air wings at the Battle of Midway.</li></ul>',
                },
            ],
        };

        let [personal, education, work] = repeat(null);

        const checkStorage = (storageItem) => {
            const item = localStorage.getItem(storageItem);

            if (item) {
                return JSON.parse(item);
            }

            return this.template[storageItem];
        };

        personal = checkStorage('personal');
        education = checkStorage('education');
        work = checkStorage('work');

        const { isSubmitted, isReset } = this.template;

        this.state = {
            isSubmitted: isSubmitted,
            isReset: isReset,
            personal: [...personal],
            education: [...education],
            work: [...work],
        };

        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.updateResetFlag = this.updateResetFlag.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.addNewInput = this.addNewInput.bind(this);
        this.removeNewInput = this.removeNewInput.bind(this);
    }

    addNewInput(sectionName, index) {
        switch (sectionName) {
            case 'education': {
                const schoolName = `schoolName${index}`;
                const fieldOfStudy = `fieldOfStudy${index}`;
                const location = `location${index}`;
                const date = `date${index}`;
                const editor = `editor${index}`;

                this.setState(
                    (prevState) => ({
                        ...prevState,
                        education: [
                            ...prevState.education,
                            {
                                [schoolName]: '',
                                [fieldOfStudy]: '',
                                [location]: '',
                                [date]: '',
                                [editor]:
                                    '<ul><li><strong>Current GPA</strong>: 4.0</li><li><strong>Projects</strong>: Facebook clone, Battleship</li></ul>',
                            },
                        ],
                    }),
                    () => {
                        localStorage.setItem(sectionName, JSON.stringify(this.state.education));
                    }
                );
                break;
            }
            case 'work': {
                const companyName = `companyName${index}`;
                const jobTitle = `jobTitle${index}`;
                const location = `location${index}`;
                const date = `date${index}`;
                const editor = `editor${index}`;

                this.setState(
                    (prevState) => ({
                        ...prevState,
                        work: [
                            ...prevState.work,
                            {
                                [companyName]: '',
                                [jobTitle]: '',
                                [location]: '',
                                [date]: '',
                                [editor]:
                                    '<ul><li>Coordinated movement of air wings at the Battle of Midway.</li></ul>',
                            },
                        ],
                    }),
                    () => {
                        localStorage.setItem(sectionName, JSON.stringify(this.state.work));
                    }
                );
                break;
            }
            default:
                throw new Error(
                    `Unexpected section name '${sectionName}' was passed.` +
                        "Only valid names are 'work' and 'education'."
                );
        }
    }

    removeNewInput(sectionName, index) {
        // original => The object to copy the values to
        // valueObject => The object passing the values
        // Note: Both objects have to be the same length.
        const copyValues = (original, valueObject) => {
            const objectToCopyValueTo = Object.entries(original);
            const objectToCopyFrom = Object.values(valueObject);

            objectToCopyValueTo.forEach((element, index) => {
                const value = 1;
                element[value] = objectToCopyFrom[index];
            });

            const copiedObject = objectToCopyValueTo.reduce((accum, [k, v]) => {
                accum[k] = v;
                return accum;
            }, {});

            return copiedObject;
        };

        switch (sectionName) {
            case 'education':
                const newEducation = [...this.state.education];

                for (let i = index; i < newEducation.length; ++i) {
                    const start = i + 1;

                    if (start >= newEducation.length) {
                        break;
                    }

                    const copiedObject = copyValues(newEducation[i], newEducation[start]);
                    newEducation[i] = copiedObject;
                }

                /*  It's a pop operation since the order stays the same and
                 *   we only need to remove the newest input.
                 *
                 *   This is due to the fact that the map() on the line 133 in FormFieldset.jsx
                 *   passes an index to access App state.
                 */
                newEducation.pop();

                this.setState(
                    (prevState) => ({
                        ...prevState,
                        education: newEducation,
                    }),
                    () => {
                        localStorage.setItem(sectionName, JSON.stringify(this.state.education));
                    }
                );
                break;

            case 'work':
                const newWork = [...this.state.work];

                for (let i = index; i < newWork.length; ++i) {
                    const start = i + 1;

                    if (start >= newWork.length) {
                        break;
                    }

                    const copiedObject = copyValues(newWork[i], newWork[start]);
                    newWork[i] = copiedObject;
                }

                newWork.pop();

                this.setState(
                    (prevState) => ({
                        ...prevState,
                        work: newWork,
                    }),
                    () => {
                        localStorage.setItem(sectionName, JSON.stringify(this.state.work));
                    }
                );
                break;

            default:
                throw new Error(
                    `Unexpected section name '${sectionName}' was passed.` +
                        "Only valid names are 'work' and 'education'."
                );
        }
    }

    // Callback used in 'handleChange()' in NewInputs.jsx + CustomEditor.jsx
    handleFieldChange(sectionName, name, value) {
        switch (sectionName) {
            case 'personal':
                this.setState(
                    (prevState) => ({
                        ...prevState,
                        personal: [
                            {
                                ...prevState.personal[0],
                                [name]: value,
                            },
                        ],
                    }),
                    () => {
                        localStorage.setItem(sectionName, JSON.stringify(this.state.personal));
                    }
                );
                break;

            case 'education':
                this.setState(
                    (prevState) => ({
                        ...prevState,
                        education: prevState.education.map((state) => {
                            const matchingName = objectHasProperty(state, name);
                            return matchingName ? { ...state, [name]: value } : state;
                        }),
                    }),
                    () => {
                        localStorage.setItem(sectionName, JSON.stringify(this.state.education));
                    }
                );
                break;

            case 'work':
                this.setState(
                    (prevState) => ({
                        ...prevState,
                        work: prevState.work.map((state) => {
                            const matchingName = objectHasProperty(state, name);
                            return matchingName ? { ...state, [name]: value } : state;
                        }),
                    }),
                    () => {
                        localStorage.setItem(sectionName, JSON.stringify(this.state.work));
                    }
                );
                break;

            default:
                throw new Error(
                    `Unexpected section name '${sectionName}' was passed.` +
                        "Only valid names are 'personal', 'work' and 'education'."
                );
        }
    }

    resetForm(event) {
        event.preventDefault();

        if (window.confirm('Are you sure you want to reset the form?')) {
            localStorage.clear();

            const { isSubmitted, personal, education, work } = this.template;

            this.setState({
                isSubmitted: isSubmitted,
                isReset: true,
                personal: [...personal],
                education: [...education],
                work: [...work],
            });
        }
    }

    updateResetFlag() {
        this.setState({
            isReset: false,
        });
    }

    submitForm() {
        this.setState({
            isSubmitted: !this.state.isSubmitted,
        });
    }

    render() {
        const { isSubmitted, personal } = this.state;
        const userName = `${personal[0].firstName}${personal[0].lastName}CV.pdf`;

        let UserPDF = null;
        if (this.state.isSubmitted) {
            UserPDF = <PDF data={this.state} />;
        }

        return (
            <>
                <Header />
                <main>
                    {!isSubmitted && (
                        <Form
                            onSubmit={this.submitForm}
                            onChange={this.handleFieldChange}
                            addNewInput={this.addNewInput}
                            removeNewInput={this.removeNewInput}
                            resetForm={this.resetForm}
                            isReset={this.state.isReset}
                            updateResetFlag={this.updateResetFlag}
                            storedInputs={this.state}
                        />
                    )}
                    {isSubmitted && (
                        <>
                            <PDFViewer width={'80%'} height={'800'}>
                                {UserPDF}
                            </PDFViewer>
                            <PageOptions
                                document={UserPDF}
                                fileName={userName}
                                onClick={this.submitForm}
                            />
                        </>
                    )}
                </main>
            </>
        );
    }
}

export default App;
