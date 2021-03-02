import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CustomEditor.css';

class CustomEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'snow',
        };

        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    handleEditorChange(html) {
        const { onChange, name, sectionName } = this.props;

        onChange(sectionName, name, html);
    }

    render() {
        return (
            <div className="text-editor">
                <ReactQuill
                    theme={this.state.theme}
                    onChange={this.handleEditorChange}
                    value={this.props.value}
                    modules={CustomEditor.modules}
                    formats={CustomEditor.formats}
                    bounds={'.text-editor'}
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
