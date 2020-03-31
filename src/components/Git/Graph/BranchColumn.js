import React from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCrosshairs } from '@fortawesome/free-solid-svg-icons';

class BranchColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            head: null,
            refs: {}
        };
    }

    componentDidMount() {
        const me = this;
        const headRegex = /^HEAD -> (.*)$/;
        const localRegex = /^refs\/heads\/(.*)$/;
        const remoteRegex = /^refs\/remotes\/([^\/]*)\/(.*)$/;

        let head = null;
        let refs = {};
        this.props.refs.forEach(ref => {
            const headRegexMatch = headRegex.exec(ref);

            if (null !== headRegexMatch) {
                let headRef = localRegex.exec(headRegexMatch[1])[1];
                if (!refs.hasOwnProperty(headRef)) {
                    refs[headRef] = me.createRef();
                }
                refs[headRef].local = true;
                head = headRef;
            } else {
                const localRegexMatch = localRegex.exec(ref);
                const remoteRegexMatch = remoteRegex.exec(ref);

                if (null !== localRegexMatch) {
                    if (!refs.hasOwnProperty(localRegexMatch[1])) {
                        refs[localRegexMatch[1]] = me.createRef();
                    }
                    refs[localRegexMatch[1]].local = true;
                }

                if (null !== remoteRegexMatch && remoteRegexMatch[2] !== 'HEAD') {
                    if (!refs.hasOwnProperty(remoteRegexMatch[2])) {
                        refs[remoteRegexMatch[2]] = me.createRef();
                    }
                    refs[remoteRegexMatch[2]].remotes.push(remoteRegexMatch[1]);
                }
            }
        });

        this.setState({
            head: head,
            refs: refs
        });
    }

    createRef() {
        return {
            local: false,
            remotes: []
        };
    }

    showLocalIcon(title) {
        let localIcon = null;
        if (this.state.refs[title].local) {
            localIcon = <FontAwesomeIcon icon={faDesktop} />;
        }
        return localIcon;
    }

    showRemoteIcon(title) {
        let remoteIcon = null;
        if (this.state.refs[title].remotes.length) {
            remoteIcon = <FontAwesomeIcon icon={faCrosshairs} />;
        }
        return remoteIcon;
    }

    getTitleButton() {
        let title = this.state.head || Object.keys(this.state.refs)[0];
        return <span>{title} {this.showRemoteIcon(title)} {this.showLocalIcon(title)}</span>;
    }

    renderButton() {
        let className = ['btn btn-secondary btn-sm'];

        if (null !== this.state.head) {
            className.push('active');
        }

        if (Object.keys(this.state.refs).length === 1) {
            return <button type="button" className={className.join(' ')}>
                {this.getTitleButton()}
            </button>
        } else if (Object.keys(this.state.refs).length) {
            className.push('dropdown-toggle');
            
            return <div className="btn-group">
                <button type="button" className={className.join(' ')} data-toggle="dropdown">
                    {this.getTitleButton()}
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    {Object.keys(this.state.refs).map(key => {
                        return <button key={key} className="dropdown-item" type="button">
                            {key} {this.showRemoteIcon(key)} {this.showLocalIcon(key)}
                        </button>
                    })}
                </div>
            </div>;
        }
    }

    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        );
    }
}

BranchColumn.propTypes = {
    refs: PropTypes.array.isRequired
};

BranchColumn.defaultProps = {
};

export default BranchColumn;
