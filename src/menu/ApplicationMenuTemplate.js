
import {openRepositoryModalAction} from "../actions/git/openRepository";
import history from './../history';

export default class ApplicationMenuTemplate {

    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    get() {
        return [
            {
                label: 'File',
                submenu : [
                    {
                        label: 'Open Repository',
                        click: () => this.dispatch(openRepositoryModalAction())
                    }
                ]
            },
            {
                label: 'Help',
                submenu : [
                    {
                        label: 'About MindGit',
                        click: () => history.push('/about')
                    }
                ]
            }
        ];
    }
}