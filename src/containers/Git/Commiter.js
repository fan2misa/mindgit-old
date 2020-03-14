
import React from "react";

import connect from "react-redux/es/connect/connect";

import GitStatusUtil from './../../utils/GitStatusUtil';

class Commiter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: '',
            description: ''
        };
    }

    commitButtonIsEnable() {
        return GitStatusUtil.hasStagedFiles(this.props.status) && this.state.summary;
    }

    handleChange() {
        this.setState({[event.target.getAttribute("data-key")]: event.target.value});
    }

    render() {
        return (
            <div className="commiter">
                <div className="commiter-title">Commit message</div>
                <div className="commit-form">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Summary" data-key="summary" value={this.state.summary} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder="Description" data-key="description" value={this.state.description} onChange={this.handleChange.bind(this)}></textarea>
                    </div>
                    <button className="btn btn-block btn-success" disabled={!this.commitButtonIsEnable()} onClick={() => this.props.commit(this.state)}>
                        Commit
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.git.status
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        commit: (state) => console.log(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Commiter);
