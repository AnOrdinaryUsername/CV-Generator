import React, { Component } from 'react';
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
        this.updateNewInfoCount = this.updateNewInfoCount.bind(this);
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
        const { sectionName, onChange } = this.props;

        const inputs = {
            inputs: newInputs,
            sectionName: sectionName,
            isPresent: true,
            removeInputs: this.updateNewInfoCount,
            enableAnimation: true,
            includeDelete: true,
            onChange: onChange,
        };

        this.props.updateInputCount(sectionName, this.state.info.length);

        this.setState({
            info: [...this.state.info, inputs],
        });
    }

    updateNewInfoCount(index) {
        const updatedInfo = [...this.state.info];
        updatedInfo[index].isPresent = !updatedInfo[index].isPresent;

        // TODO: Update in App state by filtering and pass a callback to here.
        this.setState({
            info: updatedInfo.filter((component) => component.isPresent),
        });
    }

    render() {
        const { title, description } = this.props.legend;
        // Don't show <NewInfoButton /> on 'Personal Information' fieldset since they're is no
        // reason to add more personal info.
        const isPersonalFieldset = title === 'Personal Information';

        const initialInfo = (
            <NewInputs
                inputs={this.props.inputs}
                // Passed state
                storedInputs={this.props.storedInputs[0]} // array and use index to access storedInputs
                sectionName={this.props.sectionName}
                isPresent={true}
                enableAnimation={false}
                includeDelete={false}
                onChange={this.props.onChange}
            />
        );

        const { info } = this.state;
        let newInfo = null;

        if (info.length !== 0) {
            newInfo = info.map((props, indice) => {
                // index is used as an identifier for newly add inputs
                // storedInputs begin at 1 since initialInfo (name with no identifier) begins at 0
                const NEW_INFO_START = 1;
                const start = indice + NEW_INFO_START;
                return (
                    <NewInputs
                        {...props}
                        // Assign an index to each input's name attribute for differentiation.
                        // Ex. name = 'schoolName0' for a newly added info input
                        index={indice}
                        storedInputs={this.props.storedInputs[start]}
                    />
                );
            });
        }

        return (
            <fieldset>
                <legend className="legend">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </legend>
                <div className="input-container">
                    {initialInfo}
                    {newInfo}
                    {!isPersonalFieldset && <NewInfoButton onClick={this.addNewInfo} />}
                </div>
            </fieldset>
        );
    }
}

export default FormFieldset;
