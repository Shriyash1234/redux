import { useSelector, useDispatch } from 'react-redux';
const ComponentB=() =>{
    const myState = useSelector((state)=>state.changeTheName)
    const dispatch = useDispatch();
    return(
      <div>
        <h1>{myState.name}</h1>
      </div>
    );
  }
  export default ComponentB
  