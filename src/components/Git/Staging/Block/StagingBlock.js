import React from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faMinus, faPenSquare } from '@fortawesome/free-solid-svg-icons';


class StagingBlock extends React.Component {
    getButtonClasseName() {
        const classeNames = ["btn btn-sm", this.props.buttonType];
        return classeNames.join(' ');
    }

    getIcon(file) {
        switch (file[this.props.fileIconProperty]) {
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
    }

    render() {
        return (
            <div className="staging-block">
                <div className="staging-block-header">
                    <button className={this.getButtonClasseName()} onClick={() => this.props.buttonOnClick()}>{this.props.buttonText}</button>
                </div>
                <div className="staging-block-body">
                    <ul className="list-unstyled">
                        {this.props.files.map((file, index) => {
                            return <li className="staging-block-file" key={index}>
                                <div className="media">
                                    <FontAwesomeIcon className="align-self-center mr-1" icon={this.getIcon(file)} />
                                    <div className="media-body">
                                        {file.path}
                                    </div>
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
