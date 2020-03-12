import React from "react";
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({});

class CommitSidebar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        Le message du commit
                    </li>
                    <li>
                        L'auteur
                    </li>
                    <li>
                        Les fichiers committé
                    </li>
                </ul>
            </div>
        );
    }
}

CommitSidebar.propTypes = {

};

export default withStyles(styles, { withTheme: true })(CommitSidebar);
