
import React from "react";

import connect from "react-redux/es/connect/connect";

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="Badge version">0.0.1</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentBranch: ''
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
