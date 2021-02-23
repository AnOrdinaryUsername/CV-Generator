import React, { Component } from 'react';
import uniqid from 'uniqid';
import { NewInfoButton } from '../components/Inputs';
import './FormFieldset.css';
import NewInputs from './NewInputs';

class FormFieldset extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
        };

        this.addNewInfo = this.addNewInfo.bind(this);
    }

    addNewInfo(event) {
        event.preventDefault();

        /*
         * Deep clone an array so that newInputs doesn't refer to the same props.inputs from Form.jsx.
         * The inputs data only contains strings so it's okay in this case.
         * https://stackoverflow.com/a/122704
         * https://stackoverflow.com/a/23481096
         */
        const newInputs = JSON.parse(JSON.stringify(this.props.inputs));

        // Assign an index to each input's name attribute for differentiation.
        // Ex. name = 'schoolName0' for a newly added info input
        newInputs.forEach((element) => {
            const index = this.state.info.length;

            if (element.row) {
                element.row.forEach((element) => {
                    return (element.name = `${element.name}${index.toString()}`);
                });
            }

            return (element.name = `${element.name}${index.toString()}`);
        });

        const inputs = (
            <NewInputs
                inputs={newInputs}
                enableAnimation={true}
                includeDelete={true}
                onChange={this.props.onChange}
                key={uniqid()}
            />
        );
        const newInfo = [...this.state.info, inputs];
        this.setState({
            info: newInfo,
        });
    }

    render() {
        const { title, description } = this.props.legend;
        // Don't show <NewInfoButton /> on 'Personal Information' fieldset since they're is no
        // reason to add more personal info.
        const isPersonalFieldset = title === 'Personal Information';

        const initialInputs = (
            <NewInputs
                inputs={this.props.inputs}
                enableAnimation={false}
                includeDelete={false}
                onChange={this.props.onChange}
            />
        );
        const { info } = this.state;

        return (
            <fieldset>
                <legend className="legend">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </legend>
                <div className="input-container">
                    {initialInputs}
                    {info.length !== 0 && info.map((element) => element)}
                    {!isPersonalFieldset && <NewInfoButton onClick={this.addNewInfo} />}
                </div>
            </fieldset>
        );
    }
}

export default FormFieldset;
