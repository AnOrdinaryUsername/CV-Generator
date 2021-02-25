import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React, { Component } from 'react';
import Form from '../features/form/screens/Form';
import Header from '../features/navbar/screens/Header';
import PDF from '../features/pdf/screens/PDF';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isSubmitted: false,
        };

        this.submitForm = this.submitForm.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    submitForm() {
        this.setState({
            isSubmitted: !this.state.isSubmitted,
        });
    }

    // Callback used in 'handleChange()' in NewInputs.jsx + CustomEditor.jsx
    handleFieldChange(name, value) {
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    render() {
        const { isSubmitted, personalFirstName, personalLastName } = this.state;
        const userName = `${personalFirstName}${personalLastName}CV`;

        let UserPDF = null;
        if (this.state.isSubmitted) {
            UserPDF = <PDF data={this.state} />;
        }

        return (
            <>
                <Header />
                <main>
                    {!isSubmitted && (
                        <Form onSubmit={this.submitForm} onChange={this.handleFieldChange} />
                    )}
                    {isSubmitted && (
                        <>
                            <PDFViewer width={'100%'} height={'100%'}>
                                {UserPDF}
                            </PDFViewer>
                            <PDFDownloadLink document={UserPDF} fileName={`${userName}.pdf`}>
                                {({ blob, url, loading, error }) =>
                                    loading ? 'Loading document...' : 'Download now!'
                                }
                            </PDFDownloadLink>
                        </>
                    )}
                </main>
            </>
        );
    }
}

export default App;
