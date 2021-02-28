import React, { Component } from 'react';
import '../../../shared/Buttons/Buttons.css';
import { Input } from '../components/Inputs';
import './FormFieldset.css';

class NewInputs extends Component {
    constructor(props) {
        super(props);

        this.confirmDeletion = this.confirmDeletion.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    confirmDeletion(event) {
        event.preventDefault();

        if (window.confirm('Are you sure you want to delete this item?')) {
            const { index } = this.props;
            this.props.removeInputs(index);
        }
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.props.onChange(this.props.sectionName, name, value);
    }

    render() {
        const { inputs, enableAnimation, includeDelete, onChange, isPresent } = this.props;

        return (
            <>
                {isPresent && (
                    <div className="new-inputs">
                        {inputs.map((element, index) => {
                            // Show animation only when adding new inputs.
                            const rowStyle = enableAnimation ? `row text-anim-${index + 1}` : 'row';
                            const singleStyle = enableAnimation ? `text-anim-${index + 1}` : null;
                            const isEditor = element.type === 'editor';

                            if (element.row) {
                                return (
                                    <div className={rowStyle}>
                                        {element.row.map((props) => {
                                            return (
                                                <Input
                                                    {...props}
                                                    value={this.props.storedInputs}
                                                    index={this.props.index}
                                                    onChange={
                                                        isEditor ? onChange : this.handleInputChange
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            }

                            return (
                                <Input
                                    animation={singleStyle}
                                    value={this.props.storedInputs}
                                    index={this.props.index}
                                    // For CustomEditor
                                    sectionName={this.props.sectionName}
                                    {...element}
                                    onChange={isEditor ? onChange : this.handleInputChange}
                                />
                            );
                        })}
                        {includeDelete && (
                            <button
                                className="button button--sm delete text-anim-4"
                                onClick={this.confirmDeletion}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                )}
            </>
        );
    }
}

export default NewInputs;
