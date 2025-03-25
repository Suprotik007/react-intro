import Counter from './counter'
import Batsman from './batsman'
import './App.css'

function App() {
function handleClick(){
  alert("ouch!1")
}
const handleClick3=()=>{
  alert('Stop Clicking')
}
const handleClick5=(num)=>{
  const newNum=num+5
alert(newNum)}
  return (
    <>
      
      <h1>Vite + React</h1>
    <Batsman></Batsman>
      <Counter></Counter>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert ("oh no!2")
      }}>Click Me 2</button>      
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={()=>alert("this is 4th")}>Click Me 4</button>
      <button onClick={()=>handleClick5(8)}>Click Me 5</button>
    </>
  )
}


export default App
