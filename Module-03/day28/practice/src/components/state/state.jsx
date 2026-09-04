import { useState } from "react";
import "./state.css";

function State() {
  // count starts from 0
  const [count, setCount] = useState(0);
  const[form,setform] =useState({
    fullname:"",
    phone:"",
    email:"",
  });

  // increase count by 1
  function increase() {
    setCount(count + 1);
  }

  // decrease count by 1
  function decrease() {
    setCount(count - 1);
  }
  function handleChange(e){
    const {name,value}=e.target;
    setform({...form,[name]:value});
    console.log(form);
  }

  function handleSubmmit(e){
    event.preventDefault();
    console.log("the final submit is ");
    console.log(form)
  }
  return (
    <div className="state">
      <h2>Count: {count}</h2>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <form onSubmit={handleSubmmit}>
      <label>Full Name:</label>
      <input name="name" value={form.name} onChange={handleChange}></input><br></br>
      <label>Phone Number</label>
      <input name="phone" value={form.phone} onChange={handleChange}></input><br></br>
      <label>Email</label>
      <input name="email" value={form.email} onChange={handleChange}></input><br></br>
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default State;