import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import reviews from "./data";
function App() {


  const[count, setCount] = useState(0);
  const[obj, setObj] = useState(reviews[count]);



  return(<div className="bg-[#e5e7eb] min-h-screen flex flex-col justify-center">
    <Navbar></Navbar>
    <Card count={count} obj={obj} setCount={setCount} setObj={setObj} reviews={reviews}></Card>
  </div>);
}
export default App;