import React from "react";
import PropTypes from 'prop-types';

class BranchColumn extends React.Component {
    getRefs() {
        return this.props.refs.filter(ref => ref !== 'HEAD');
    }

    render() {
        return (
            <div>
                {this.getRefs().length ? this.getRefs()[0] : ''}
            </div>
        );
    }
}

BranchColumn.propTypes = {
    refs: PropTypes.array.isRequired
};

BranchColumn.defaultProps = {
};

export default BranchColumn;
