import React, { Component } from 'react';
import '../../../shared/Buttons/Buttons.css';
import { Input } from '../components/Inputs';
import './FormFieldset.css';

class NewInputs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPresent: true,
        };

        this.deleteNewInfo = this.deleteNewInfo.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    deleteNewInfo() {
        if (window.confirm('Are you sure you want to delete this item?')) {
            this.setState({
                isPresent: !this.state.isPresent,
            });
        }
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.props.onChange(name, value);
    }

    render() {
        const { inputs, enableAnimation, includeDelete, onChange } = this.props;
        const { isPresent } = this.state;

        return (
            <>
                {isPresent && (
                    <div className="new-inputs">
                        {inputs.map((element, index) => {
                            // Show animation only when adding new inputs.
                            const animation = enableAnimation ? `text-anim-${index + 1}` : ``;
                            const isEditor = element.type === 'editor';

                            if (element.row) {
                                return (
                                    <div className={`row ${animation}`}>
                                        {element.row.map((element) => {
                                            return (
                                                <Input
                                                    {...element}
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
                                    animation={animation}
                                    {...element}
                                    onChange={isEditor ? onChange : this.handleInputChange}
                                />
                            );
                        })}
                        {includeDelete && (
                            <button
                                className="button button--sm delete text-anim-4"
                                onClick={this.deleteNewInfo}
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
