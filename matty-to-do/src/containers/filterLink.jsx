import Link from '../components/Link.jsx';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
      active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch( {
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      })
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

// class FilterLink extends Component {
//   componentDidMount() {
//       this.unsubscribe = store.subscribe( () =>
//         this.forceUpdate()
//     );
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     const props = this.props;
//     const state = store.getState();
//
//     return (
//       <Link
//
//         onClick= { () => store.}>
//       {props.children}
//       </Link>
//     )
//   }
// }

export default FilterLink
