import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { Component } from 'react';
import { DownloadButton, GoBackButton } from '../../../shared/Buttons/Buttons';
import './PageOptions.css';

/*  For some odd reason, having a <PDFDownloadLink /> and a <PDFViewer /> on
 *   the same page causes a 'Cannot read property 'hasGlyphForCodePoint' of null' error'.
 *   Delaying the rendering of the <PDFDownloadLink /> seems to fix it.
 *
 *   From here: https://stackoverflow.com/a/51771466
 */
class Delayed extends Component {
    constructor(props) {
        super(props);
        this.state = { hidden: true };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ hidden: false });
        }, this.props.waitBeforeShow);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

const PageOptions = ({ document, fileName, onClick }) => {
    return (
        <div className="page-options">
            <GoBackButton onClick={onClick} />
            {/* Scuffed fix for 'Cannot read property 'hasGlyphForCodePoint' of null' error. */}
            <Delayed waitBeforeShow={1000}>
                <PDFDownloadLink document={document} fileName={fileName}>
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : <DownloadButton />
                    }
                </PDFDownloadLink>
            </Delayed>
        </div>
    );
};

export default PageOptions;
