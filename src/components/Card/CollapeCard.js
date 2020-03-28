import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CollapeCard extends React.Component {
    getDataTarget() {
        return '#' + this.props.id;
    }

    getIcon() {
        if (null !== this.props.icon) {
            return <div style={{width: 25}}>
                <FontAwesomeIcon icon={this.props.icon} />
            </div>
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" data-toggle="collapse" data-target={this.getDataTarget()} aria-controls="branch-local">
                    <div className="media">
                        {this.getIcon()}
                        <div className="media-body">
                            {this.props.title.toUpperCase()}
                        </div>
                    </div>
                </div>
                <div id={this.props.id} className="collapse show">
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

CollapeCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.object,
};

CollapeCard.defaultProps = {
    icon: null
};

export default CollapeCard;
