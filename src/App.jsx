
import './App.css'
import ToDo from './todo';

function App() {
  const time = 50;
  return (
    <>
      <h1>React Core Concepts</h1>
      <ToDo 
        task='Programming Hero Module Watch' 
        isDone={false} 
        time={time}>
      </ToDo>
      <ToDo 
        task='Learn React' 
        isDone={true}>
      </ToDo>
      <ToDo 
        task='Revise JS' 
        isDone={false} 
        time="100">
      </ToDo>

      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Sports></Sports>
      <Developer name="Liya" tech="JS Stack"></Developer>
      <Developer name="
      Ahad" tech="MERN Stack"></Developer>
    </>
  )
}

function Developer(props){
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '10px'
    }}>
      <h3>Developer Name: {props.name} </h3>
      <p>Technology : {props.tech}</p>
    </div>
  )
}
function Student(){
  return(
    <div className='student'>
      <p>Name: </p>
      <p>Department: </p>
    </div>
  )
}

function Person(){
  const age = 17;
  const name = "Liya";
  const personStyle = {
    color: 'red',
    border: '2px dotted salmon',
    borderRadius: '10px',
    fontSize:'1.5rem'
  }
  return (
    <p style={personStyle}> Hey, It's {name}, I am {age}. Nice to meet you</p>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <p>Playing and losing</p>
    </div>
  )
}
export default App
