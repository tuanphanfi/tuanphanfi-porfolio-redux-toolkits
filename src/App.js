// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store/index'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(actions.increment())
    console.log(actions.increment)
  }

  const decrement = () => {
    dispatch(actions.decrement(10))
    console.log(actions.decrement)
  }

  const addBy = () => {
    dispatch(actions.addBy(10))
    console.log(actions.addBy())
  }

  return (
    <div className="">
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add</button>



    </div>
  );
}

export default App;
