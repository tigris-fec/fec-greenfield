import { connect } from 'react-redux';
import dummyfunc from '../actions/dummyfunc';
import DummyComponent from '../components/DummyComponent.jsx';
//import the componenet that you want to put inside the container!
//import the actions/data that you want to give to the component as props


const mapStateToProps = (store) => ({ dummyaction: store.dummystate });//handles data props from store

const mapDispatchToProps = (dispatch) => {//handles function props
  return {
    handleFunc: (q) => dispatch(dummyfunc(q))
  }
}

const DummyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyComponent)//the component is connected here

export default DummyContainer;//these components will be the ones rendered by the parent app in react