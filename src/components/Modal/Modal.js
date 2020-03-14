import React from "react";
import PropTypes from 'prop-types';

class Modal extends React.Component {
    getClasses() {
        const classeNames = ["modal-dialog", this.props.type];
        return classeNames.filter((className) => className !== null).join(' ');
    }

    render() {

        return (
            <div id="test" className="modal" tabIndex="-1" role="dialog">
                <div className={this.getClasses()} role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {this.props.children[0]}
                        {this.props.children[1]}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string
};

Modal.defaultProps = {
    type: null
};

export default Modal;
