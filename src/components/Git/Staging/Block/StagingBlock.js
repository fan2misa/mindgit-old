import React from "react";
import PropTypes from 'prop-types';

class StagingBlock extends React.Component {
    getButtonClasseName() {
        const classeNames = ["btn btn-sm", this.props.buttonType];
        return classeNames.join(' ');
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
    files: PropTypes.array.isRequired
};

StagingBlock.defaultProps = {
    files: []
};

export default StagingBlock;
