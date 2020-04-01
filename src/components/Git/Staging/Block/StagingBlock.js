import React from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faPen, faPlus, faMinus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import StringUtil from "../../../../utils/StringUtil";

class StagingBlock extends React.Component {
    getButtonClasseName() {
        const classeNames = ["btn btn-sm", this.props.buttonType];
        return classeNames.join(' ');
    }

    getIcon(file) {
        if (file.hasOwnProperty('value')) {
            switch (file.value[this.props.fileIconProperty]) {
                case "A":
                case "?":
                    return faPlus;
                case "M":
                    return faPen;
                case "D":
                    return faMinus;
                case "R":
                    return faPenSquare;
            }
        } else {
            return faFolder;
        }
    }

    getSub(parent, current) {
        if (current.children.length) {
            return <ul id={"local" + current.name} className="list-unstyled">
                {current.children.map(branch => {
                    return <li key={branch.name}>
                        <div className="media staging-block-file">
                            <div style={{width: 20}}>
                                <FontAwesomeIcon className="align-self-center" icon={this.getIcon(branch)} />
                            </div>
                            <div className="media-body">
                                <div data-toggle="collapse" data-target={"#stage-" + parent + '-' + StringUtil.toSnakeCase(branch.name)}>
                                    {branch.name}
                                </div>
                            </div>
                        </div>
                        <div id={"stage-" + parent + '-' + StringUtil.toSnakeCase(branch.name)} className="collapse">
                            {this.getSub(parent + StringUtil.toSnakeCase(branch.name), branch)}
                        </div>
                    </li>
                })}
            </ul>
        }
    }

    render() {
        return (
            <div className="staging-block">
                <div className="staging-block-header">
                    <button className={this.getButtonClasseName()} onClick={() => this.props.buttonOnClick()}>
                        {this.props.buttonText}
                    </button>
                </div>
                <div className="staging-block-body">
                    <ul className="list-unstyled">
                        {this.props.files.map(branch => {
                            return <li key={branch.name}>
                                <div className="media staging-block-file">
                                    <div style={{width: 20}}>
                                        <FontAwesomeIcon icon={this.getIcon(branch)} />
                                    </div>
                                    <div className="media-body">
                                        <div data-toggle="collapse" data-target={"#stage-" + StringUtil.toSnakeCase(branch.name)}>
                                            {branch.name}
                                        </div>
                                    </div>
                                </div>
                                <div id={"stage-" + StringUtil.toSnakeCase(branch.name)} className="collapse">
                                    {this.getSub(StringUtil.toSnakeCase(branch.name), branch)}
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

StagingBlock.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonType: PropTypes.string.isRequired,
    buttonOnClick: PropTypes.func.isRequired,
    fileIconProperty: PropTypes.string.isRequired,
    files: PropTypes.array.isRequired
};

StagingBlock.defaultProps = {
    files: []
};

export default StagingBlock;
