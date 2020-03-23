import React from "react";
import PropTypes from "prop-types";
import BranchColumn from "./BranchColumn";
import {radius, marge} from '../../../git-graph';
import GitGraphDrawer from "../../../git/Graph/GitGraphDrawer";

class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            canvasWidth: 80
        };
    }

    computeWidth(level) {
        return (2 * level * radius) + (level + 1) * marge;
    }

    computeHeight() {
        let height = 2 * radius + 2 * marge;
        return height > 30 ? height : 30;
    }

    componentWillMount() {
        let data = this.props.gitGraphInfo.init(this.props.commit);

        this.setState({
            data: data,
            canvasWidth: this.computeWidth(data.maxLevel)
        });
    }

    componentDidMount() {
        let gitGraphDrawer = new GitGraphDrawer(this.state.data, this.refs["canvas"]);
        gitGraphDrawer.drawCommit();
    }

    render() {
        return (
            <tr className="commit-log" style={{height: this.computeHeight()}}>
                <td className="commit-log-refs">
                    <BranchColumn refs={this.props.commit.refs}/>
                </td>
                <td className="commit-log-graph" style={{width: this.state.canvasWidth, minWidth: this.state.canvasWidth}}>
                    <canvas ref="canvas" width={this.state.canvasWidth} height={this.computeHeight()}/>
                </td>
                <td className="commit-log-message"><span>{this.props.commit.message}</span></td>
                <td className="commit-log-author">{this.props.commit.author_name}</td>
            </tr>
        );
    }
}

Log.propTypes = {
    commit: PropTypes.object.isRequired,
    gitGraphInfo: PropTypes.object.isRequired,
};

Log.defaultProps = {
};

export default Log;