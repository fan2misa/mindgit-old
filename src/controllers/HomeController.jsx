import React from "react";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";

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

class HomeController extends React.Component {
    componentDidMount() {
        this.props.load(this.props.app.user);
    }

    render() {
        return <div className={this.props.classes.root}>
            <main className={this.props.classes.content}>
                <Typography component="h2" variant="h1" gutterBottom>HomeController</Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(HomeController));
