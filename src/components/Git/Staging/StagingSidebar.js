import React from "react";
import PropTypes from 'prop-types';

class StagingSidebar extends React.Component {
    render() {
        return (
            <div className="staging-sidebar">
                {this.props.children}
            </div>
        );
    }
}

StagingSidebar.propTypes = {
};

StagingSidebar.defaultProps = {
};

export default StagingSidebar;
