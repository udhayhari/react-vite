import { connect } from 'react-redux';
import './App.css';
import {
  incrementCounter
} from "./redux/actions/counter.action";

function App(props) {

  return (
    <>
      <h1>Vite + React + Redux</h1>
      <div className="card">
        <button onClick={() => props.increaseCounter()}>
          count is {props.count}
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
    increaseCounter: () => dispatch(incrementCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
