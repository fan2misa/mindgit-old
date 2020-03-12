
import React from "react";

import connect from "react-redux/es/connect/connect";

const styles = theme => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        borderTop: '1px solid ' + theme.palette.primary.border.main,
        padding: 5,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    version : {
        backgroundColor: theme.palette.primary.light,
        padding: 2
    }
});

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
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
