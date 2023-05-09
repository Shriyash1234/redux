import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions/index';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
const App=() =>{
  const myState = useSelector((state)=>state.changeTheName)
  const dispatch = useDispatch();
  return(
    <div className="App">
      <h1>Redux</h1>
      <ComponentA/>
      <ComponentB/>
    </div>
  );
}

export default App;
