import { connect } from 'react-redux';

import Navbar from '../components/Navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    currentBranch: ''
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);