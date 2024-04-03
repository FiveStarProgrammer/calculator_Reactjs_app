import {useState} from 'react'
import './App.css';
import Keypad from './keypad'

function App() {


  let [input,setinput] = useState('')


  function handleclick(value) {
    setinput(input+value);
  }



  function handleoperator(operator){
    setinput(input+operator);
  }


  function handleequal(){
    let output = eval(input)
    setinput(output)
  }



  function handleclear(){
    setinput('')
  }




  return(
    <div className = 'container'>
      <h1>react calculator app</h1>
      <div className = 'calculator'>
          <input type = 'text' className = 'output' value = {input}/>
          <Keypad handleclick = {handleclick} handleoperator = {handleoperator} handleequal = {handleequal} handleclear = {handleclear}/>

      </div>
    </div>
  )


}


export default App;
