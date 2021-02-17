import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Input, NewInfoButton } from '../components/Inputs';
import './FormFieldset.css';

const Inputs = ({ inputs, enableAnimation }) => {
    return (
        <div className="new-inputs">
            {inputs.map((element, index) => {
                // Show animation only when adding new inputs.
                const animation = enableAnimation ? `text-anim-${index + 1}` : ``;

                if (element.row) {
                    return (
                        <div className={`row ${animation}`} key={uniqid()}>
                            {element.row.map((element) => {
                                return <Input {...element} key={uniqid()} />;
                            })}
                        </div>
                    );
                }

                return <Input animation={animation} {...element} key={uniqid()} />;
            })}
        </div>
    );
};

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

        const inputs = <Inputs inputs={this.props.inputs} enableAnimation={true} />;
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

        const inputs = <Inputs inputs={this.props.inputs} enableAnimation={false} />;
        const { info } = this.state;

        return (
            <fieldset>
                <legend className="legend">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </legend>
                <div className="input-container">
                    {inputs}
                    {info.length !== 0 && info.map((element) => element)}
                    {!isPersonalFieldset && <NewInfoButton onClick={this.addNewInfo} />}
                </div>
            </fieldset>
        );
    }
}

export default FormFieldset;
