
import React from "react";
import connect from "react-redux/es/connect/connect";

class AboutController extends React.Component {
    render() {
        return <div className="root">
            <main className="container-fluid">
                AboutController
            </main>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutController);
