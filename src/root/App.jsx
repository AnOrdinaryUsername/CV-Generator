import React, { Component } from 'react';
import Form from '../features/form/screens/Form';
import Header from '../features/navbar/screens/Header';

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
        const { isSubmitted } = this.state;

        return (
            <>
                <Header />
                <main>
                    {!isSubmitted && (
                        <Form onSubmit={this.submitForm} onChange={this.handleFieldChange} />
                    )}
                    {isSubmitted && <p>test</p>}
                </main>
            </>
        );
    }
}

export default App;
