import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import CachedIcon from '@material-ui/icons/Cached';
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';

const styles = theme => ({});

class Navbar extends React.Component {
    render() {
        console.log('Navbar', this.props);
        return (
            <AppBar position="sticky">
                <Toolbar>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    <Button component={Link} to="/about" color="inherit">About</Button>
                    <Button color="inherit" onClick={() => this.props.openRepository()}>Open Repository</Button>
                    <Button color="inherit" onClick={() => this.props.stageAll()}>Stage </Button>

                    <Tooltip title="Fetch">
                        <IconButton color="inherit">
                            <CachedIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Pull">
                        <IconButton color="inherit">
                            <GetAppIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Push">
                        <IconButton color="inherit">
                            <PublishIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        );
    }
}

Navbar.propTypes = {
    currentBranch: PropTypes.string.isRequired,
    openRepository: PropTypes.func.isRequired,
    stageAll: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navbar);
