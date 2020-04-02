import {resetAction} from "../actions/git/reset";
import {GIT_RESET_HARD, GIT_RESET_MIXED, GIT_RESET_SOFT} from "../constantes/services/GitConstante";
import {revertAction} from "../actions/git/revert";
import {openModalCheckoutLocalBranchAction} from "../actions/git/checkout";
import {cherryPickAction} from "../actions/git/cherry-pick";

export default class LogContextualMenuTemplate {

    constructor(dispatch, currentBranch, commit) {
        this.dispatch = dispatch;
        this.currentBranch = currentBranch;
        this.commit = commit;
    }

    get() {
        return [
            {
                label: 'Create branch here',
                click: () => this.dispatch(openModalCheckoutLocalBranchAction(this.commit))
            },
            {
                label: 'Cherry pick commit',
                click: () => this.dispatch(cherryPickAction(this.commit))
            },
            {
                label: `Reset ${this.currentBranch.name} to this commit`,
                submenu : [
                    {
                        label: 'Soft - keep all change',
                        click: () => this.dispatch(resetAction(GIT_RESET_SOFT, [this.commit.hash]))
                    },
                    {
                        label: 'Mixed - keep working but reset index',
                        click: () => this.dispatch(resetAction(GIT_RESET_MIXED, [this.commit.hash]))
                    },
                    {
                        label: 'Hard - discard all change', 
                        click: () => this.dispatch(resetAction(GIT_RESET_HARD, [this.commit.hash]))
                    }
                ]
            },
            {
                label: 'Revert commit',
                click: () => this.dispatch(revertAction(this.commit))
            },
        ];
    }
}