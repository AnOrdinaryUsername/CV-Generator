import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CustomEditor.css';

class CustomEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: this.props.initialValue, theme: 'snow' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(html) {
        this.setState({ editorHtml: html }, () => console.log(this.state.editorHtml));
    }

    render() {
        return (
            <div className="text-editor">
                <ReactQuill
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={CustomEditor.modules}
                    formats={CustomEditor.formats}
                    bounds={'.app'}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
CustomEditor.modules = {
    toolbar: [['bold', 'italic', 'underline', 'strike'], [{ list: 'bullet' }], ['clean']],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
CustomEditor.formats = ['bold', 'italic', 'underline', 'strike', 'list', 'bullet'];

export default CustomEditor;
