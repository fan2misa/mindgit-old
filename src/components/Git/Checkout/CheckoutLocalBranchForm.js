import React from "react";
import PropTypes from 'prop-types';

class CheckoutLocalBranchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        this.refs['branchName'].focus();
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) {
        this.props.submit(this.state, this.props.commit);
        this.setState({
            name: '',
        });
    }

    buttonIsEnable() {
        return this.state.name;
    }

    render() {
        return (
            <div className="form-inline d-flex">
                <div className="form-group flex-grow-1">
                    <input type="text"
                           className="form-control d-block w-100 mr-3"
                           placeholder="Branch name"
                           ref="branchName"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)} />
                </div>
                <button className="btn btn-success" disabled={!this.buttonIsEnable()} onClick={this.handleSubmit.bind(this)}>
                    Create
                </button>
            </div>
        );
    }
}

CheckoutLocalBranchForm.propTypes = {
    submit: PropTypes.func.isRequired,
    commit: PropTypes.object
};

CheckoutLocalBranchForm.defaultProps = {
    commit: null
};

export default CheckoutLocalBranchForm;
