import React from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faAdd } from '@fortawesome/free-solid-svg-icons';


class StagingBlock extends React.Component {
    getButtonClasseName() {
        const classeNames = ["btn btn-sm", this.props.buttonType];
        return classeNames.join(' ');
    }

    getIcon(file) {
        return file[this.props.fileIconProperty] === 'M' ? faPen : faAdd;
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <button className={this.getButtonClasseName()} onClick={() => this.props.buttonOnClick()}>{this.props.buttonText}</button>
                </div>
                <div>
                    <ul className="list-unstyled">
                        {this.props.files.map((file, index) => {
                            return <li key={index}>
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
