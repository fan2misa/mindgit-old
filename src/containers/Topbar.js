import { connect } from 'react-redux';

import Navbar from '../components/Navbar';

import { openRepositoryAction } from './../actions/git/openRepository';
import { stageAction } from './../actions/git/stage';

const mapStateToProps = (state, ownProps) => {
  return {
    currentBranch: 'MindGit / master'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      openRepository: () => dispatch(openRepositoryAction(null)),
      stageAll: () => dispatch(stageAction('*')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);