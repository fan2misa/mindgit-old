import React from "react";
import {connect} from "react-redux";

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: '100%'
    },
    left: {
        height: 'auto',
        minWidth: 325,
        maxWidth: 450,
        backgroundColor: theme.palette.primary.dark,
        borderRight: '1px solid ' + theme.palette.primary.border.dark
    },
    center: {
        flex: 1,
        height: 'auto',
        backgroundColor: theme.palette.primary.main
    },
    right: {
        height: 'auto',
        minWidth: 325,
        maxWidth: 450,
        backgroundColor: theme.palette.primary.dark,
        borderLeft: '1px solid ' + theme.palette.primary.border.dark
    },
});

class HomeController extends React.Component {
    componentDidMount() {
        this.props.load(this.props.app.user);
    }

    render() {
        return (
            <main className={this.props.classes.root}>
                <div className={this.props.classes.left}>

                </div>
                <div className={this.props.classes.center}>

                </div>
                <div className={this.props.classes.right}>

                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (user) => dispatch(function (user) {

        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(HomeController));
