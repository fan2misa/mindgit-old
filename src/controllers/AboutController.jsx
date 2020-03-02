import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import connect from "react-redux/es/connect/connect";
import {withStyles} from "@material-ui/core";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        padding: theme.spacing.unit,
    },
});

class AboutController extends React.Component {
    render() {
        return <div className={this.props.classes.root}>
            <main className={this.props.classes.content}>
                <Typography component="h2" variant="h1" gutterBottom>AboutController</Typography>
            </main>
        </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(AboutController));
