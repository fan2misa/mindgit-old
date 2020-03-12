
import React from "react";
import connect from "react-redux/es/connect/connect";

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
        return <div className="root">
            <main className="content">
                AboutController
            </main>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: (user) => dispatch(function (user) {

        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutController);
