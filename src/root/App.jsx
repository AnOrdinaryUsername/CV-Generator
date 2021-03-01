import { PDFViewer } from '@react-pdf/renderer';
import React, { Component } from 'react';
import Form from '../features/form/screens/Form';
import Header from '../features/navbar/screens/Header';
import PDF from '../features/pdf/screens/PDF';

// object => object literal
// prop => string (the property inside the object literal)
// return => boolean
const objectHasProperty = (object, prop) => ({}.propertyIsEnumerable.call(object, prop));

class App extends Component {
    constructor() {
        super();

        this.state = {
            isSubmitted: false,
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

        this.submitForm = this.submitForm.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.addNewInput = this.addNewInput.bind(this);
        this.removeNewInput = this.removeNewInput.bind(this);
    }

    componentDidMount() {
        let storage = null;
        if (localStorage) {
            storage = { ...localStorage };
            // No need to store color theme in App state.
            delete storage['theme'];
        }
    }

    addNewInput(sectionName, index) {
        switch (sectionName) {
            case 'education': {
                const schoolName = `schoolName${index}`;
                const fieldOfStudy = `fieldOfStudy${index}`;
                const location = `location${index}`;
                const date = `date${index}`;
                const editor = `editor${index}`;

                this.setState((prevState) => ({
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
                }));
                break;
            }
            case 'work': {
                const companyName = `companyName${index}`;
                const jobTitle = `jobTitle${index}`;
                const location = `location${index}`;
                const date = `date${index}`;
                const editor = `editor${index}`;

                this.setState((prevState) => ({
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
                }));
                break;
            }
            default:
                throw new Error(
                    `Unexpected section name '${sectionName}' was passed.` +
                        "Only valid names are 'work' and 'education'."
                );
        }
    }

    removeNewInput(sectionName) {
        switch (sectionName) {
            case 'education':
                const newEducation = [...this.state.education];
                /*  It's a pop operation since the order stays the same and
                 *   we only need to remove the newest input.
                 *
                 *   This is due to the fact that the map() on the line 133 in FormFieldset.jsx
                 *   passes an index to access App state.
                 */
                newEducation.pop();

                this.setState((prevState) => ({
                    ...prevState,
                    education: newEducation,
                }));
                break;

            case 'work':
                const newWork = [...this.state.work];
                newWork.pop();

                this.setState((prevState) => ({
                    ...prevState,
                    work: newWork,
                }));
                break;

            default:
                throw new Error(
                    `Unexpected section name '${sectionName}' was passed.` +
                        "Only valid names are 'work' and 'education'."
                );
        }
    }

    submitForm() {
        this.setState({
            isSubmitted: !this.state.isSubmitted,
        });
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
                        localStorage.setItem(name, value);
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
                        localStorage.setItem(name, value);
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
                        localStorage.setItem(name, value);
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

    render() {
        const { isSubmitted, personal } = this.state;
        const userName = `${personal[0].firstName}${personal[0].lastName}CV`;

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
                            storedInputs={this.state}
                        />
                    )}
                    {isSubmitted && (
                        <>
                            <PDFViewer width={'80%'} height={'100%'}>
                                {UserPDF}
                            </PDFViewer>

                            <button onClick={this.submitForm}>{'< Go back'}</button>
                        </>
                    )}
                </main>
            </>
        );
    }
}

export default App;
