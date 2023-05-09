import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../actions/index';
function ComponentA() {
  const myState = useSelector((state)=>state.changeTheName)
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" onClick={()=>dispatch(changeName(document.getElementsByName("name")[0].value))} />
      </form>
    </div>
  );
}
export default ComponentA
