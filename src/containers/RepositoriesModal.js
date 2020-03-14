
import React from "react";

import connect from "react-redux/es/connect/connect";

import Modal from '../components/Modal/Modal';
import ModalBody from '../components/Modal/ModalBody';
import {openRepositoryAction} from "../actions/git/openRepository";

class RepositoriesModal extends React.Component {
    render() {
        return (
            <Modal type="modal-full" title={this.props.title}>
                <ModalBody>
                    <button className="btn btn-primary" onClick={() => this.props.openRepository()}>
                        Open Repository
                    </button>
                </ModalBody>
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
    return {
        openRepository: () => dispatch(openRepositoryAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesModal);
