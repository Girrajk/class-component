import React from 'react'
import MyClassComponent3 from './Components/MyClassComponent3'
// import MyClassComponent2 from './Components/MyClassComponent2'
// import MyClassComponent1 from './Components/MyClassComponent1'
// import {MyComponent1, MyComponent2 } from './Components/MyComponent1'



function App() {
  return (
    <div>
    {/* <MyComponent1/>
    <MyComponent2/> */}
    {/* <MyClassComponent1/> */}
    {/* <MyClassComponent2 name="chrag" age={21}  country="nigeria" />
    <MyClassComponent2  name="aman" age={21}  country="nigeria" /> */}
    <MyClassComponent3 name="chrag" age={21}  country="nigeria" />
    <MyClassComponent3 name="pankaj" age={24}  country="america" />
    <MyClassComponent3 name="aman" age={22}  country="indea" />
    </div>
  )
}

export default App