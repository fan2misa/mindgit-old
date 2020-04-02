import React from "react";
import PropTypes from "prop-types";
import { remote } from 'electron';

import BranchColumn from "./BranchColumn";
import {radius, marge, getColorByLevel} from '../../../git-graph';
import GitGraphDrawer from "../../../git/Graph/GitGraphDrawer";

class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            canvasWidth: 80,
            show: false
        };
    }

    componentDidMount() {
        let data = this.props.gitGraphInfo.init(this.props.commit);

        if (null !== data) {
            this.setState({
                data: data,
                canvasWidth: this.computeWidth(data.maxLevel),
                show: true
            });
        }
    }

    componentDidUpdate() {
        if (this.state.show) {
            let gitGraphDrawer = new GitGraphDrawer(this.state.data, this.refs["canvas"]);
            gitGraphDrawer.drawCommit();
        }
    }

    computeWidth(level) {
        return (2 * level * radius) + (level + 1) * marge;
    }

    computeHeight() {
        let height = 2 * radius + 2 * marge;
        return height > 30 ? height : 30;
    }

    handleContextMenu() {
        this.props.menu.popup({
            window: remote.getCurrentWindow()
        });
    }

    getBackgroundGraphStyle() {
        return {
            backgroundColor: getColorByLevel(this.state.data.level) + '17',
            borderRightColor: getColorByLevel(this.state.data.level)
        };
    }

    render() {
        if (this.state.show) {
            return (
                <tr className="commit-log" style={{height: this.computeHeight()}} onContextMenu={this.handleContextMenu.bind(this)}>
                    <td className="commit-log-refs">
                        <BranchColumn refs={this.props.commit.refs}/>
                    </td>
                    <td className="commit-log-graph" style={{width: this.state.canvasWidth, minWidth: this.state.canvasWidth}}>
                        <span className="commit-log-graph-bg" style={this.getBackgroundGraphStyle()}></span>
                        <canvas ref="canvas" width={this.state.canvasWidth} height={this.computeHeight()}/>
                    </td>
                    <td className="commit-log-message"><span>{this.props.commit.message}</span></td>
                    <td className="commit-log-author">{this.props.commit.author_name}</td>
                </tr>
            );
        }

        return '';
    }
}

Log.propTypes = {
    commit: PropTypes.object.isRequired,
    gitGraphInfo: PropTypes.object.isRequired,
    menu: PropTypes.object.isRequired
};

Log.defaultProps = {
};

export default Log;