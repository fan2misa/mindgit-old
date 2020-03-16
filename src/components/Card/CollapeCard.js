import React from "react";
import PropTypes from 'prop-types';

class CollapeCard extends React.Component {
    getDataTarget() {
        return '#' + this.props.id;
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" data-toggle="collapse" data-target={this.getDataTarget()} aria-controls="branch-local">
                    {this.props.title}
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
};

CollapeCard.defaultProps = {
};

export default CollapeCard;
