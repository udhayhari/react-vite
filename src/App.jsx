import { connect } from 'react-redux';
import './App.css';
import {
  decrementCounter,
  incrementCounter
} from "./redux/actions/counter.action";

function App(props) {

  return (
    <>
      <h1>Vite + React + Redux</h1>
      <h3>count is: {props.count}</h3>
      <div className="card">
        <button onClick={() => props.increaseCounter()}>
          Increment
        </button>
        <button onClick={() => props.decreaseCounter()}>
          Decrement
        </button>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(incrementCounter()),
    decreaseCounter: () => dispatch(decrementCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
