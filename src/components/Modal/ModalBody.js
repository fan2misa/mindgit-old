import React from "react";
import PropTypes from 'prop-types';

class ModalBody extends React.Component {
    render() {
        return <div className="modal-body">
            {this.props.children}
        </div>;
    }
}

ModalBody.propTypes = {

};

export default ModalBody;
