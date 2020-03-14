import React from "react";
import PropTypes from 'prop-types';

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

export default CommitSidebar;
