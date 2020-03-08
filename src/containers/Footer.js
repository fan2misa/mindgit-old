import React from "react";

import connect from "react-redux/es/connect/connect";

import Badge from '@material-ui/core/Badge';
import {withStyles} from '@material-ui/core/styles';

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
            <div className={this.props.classes.container}>
                <Badge className={this.props.classes.version}>0.0.1</Badge>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Footer));
