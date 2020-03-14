
import React from "react";

import connect from "react-redux/es/connect/connect";

import Modal from '../components/Modal/Modal';
import ModalBody from '../components/Modal/ModalBody';
import ModalFooter from '../components/Modal/ModalFooter';

class RepositoriesModal extends React.Component {
    render() {
        return (
            <Modal type="modal-full" title={this.props.title}>
                <ModalBody>
                    <p>test</p>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: 'Repository Management'
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesModal);
