import Counter from './counter'
import Batsman from './batsman'
import Users from './users'
import Friends from './friends'
import './App.css'
import { Suspense } from 'react'

const fetchUsers= fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const fetchFriends=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  return( res.json())
}

function App() {
  const friendsPromise=fetchFriends()
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
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
  <Suspense fallback={ <h3>Friends are coming...</h3>}>
    <Friends friendsPromise={friendsPromise} ></Friends>
  </Suspense>
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
