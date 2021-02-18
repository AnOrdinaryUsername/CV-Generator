import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../../../shared/Button/PrintButton.css';
import { Input } from '../components/Inputs';
import './FormFieldset.css';

class Inputs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPresent: true,
        };

        this.deleteNewInfo = this.deleteNewInfo.bind(this);
    }

    deleteNewInfo() {
        this.setState({
            isPresent: !this.state.isPresent,
        });
    }

    render() {
        const { inputs, enableAnimation } = this.props;
        const { isPresent } = this.state;

        return (
            <>
                {isPresent && (
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
                        <button className="button button--sm delete" onClick={this.deleteNewInfo}>
                            Delete
                        </button>
                    </div>
                )}
            </>
        );
    }
}

export default Inputs;
