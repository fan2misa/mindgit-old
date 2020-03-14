import React from "react";
import PropTypes from 'prop-types';

class ModalFooter extends React.Component {
    render() {
        return <div className="modal-footer">
            {this.props.children}
        </div>
    }
}

ModalFooter.propTypes = {

};

export default ModalFooter;
