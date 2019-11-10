import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import hljs from 'highlight.js';

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    };

    static defaultProps = {
        language: null
    };

    render() {
        const { language, value } = this.props;
        return (
            <pre><code className={language}>{value}</code></pre>
        );
    }
}

export default CodeBlock;