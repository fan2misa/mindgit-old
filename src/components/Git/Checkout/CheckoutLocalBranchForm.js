import React from "react";
import PropTypes from 'prop-types';
import GitStatusUtil from "../../../utils/GitStatusUtil";

class CheckoutLocalBranchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) {
        this.props.submit(this.state);
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
                    <input type="text" className="form-control d-block w-100 mr-3" placeholder="Summary" data-key="summary" value={this.state.name} onChange={this.handleChange.bind(this)} />
                </div>
                <button className="btn btn-success" disabled={!this.buttonIsEnable()} onClick={this.handleSubmit.bind(this)}>
                    Create
                </button>
            </div>
        );
    }
}

CheckoutLocalBranchForm.propTypes = {
    submit: PropTypes.func.isRequired
};

CheckoutLocalBranchForm.defaultProps = {
};

export default CheckoutLocalBranchForm;
