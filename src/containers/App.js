import React, { PureComponent } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends PureComponent {
  constructor(props){
      super(props);
      console.log('[App.js] constructor');
  }
  state ={
    persons:[
      {id:'adaas',name:"Max", age:23},
      {id:'gfgdf',name:"Manu", age:30},
      {id:'234ef',name:"Stephanie", age:20}
    ],
    showPersons: false,
    showCockpit: true
  }

//  static getDerivedStateFromProps(state, props){
//     console.log('[App.js] getDerivedStateFromProps', props);
//     return state;
//   }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[App.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons ||
  //       nextProps.checked !== this.props.checked ||
  //       nextProps.clicked !== this.props.clicked)
  //     return true;
  //   else
  //     return false;
  // }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  
  switchNameHandler = (switchName) =>{
    this.setState({
      persons:[
        {name:switchName, age:23},
        {name:"Manu", age:30},
        {name:"Stephanie", age:25}
      ]
    })  
  }
  nameChangeHandler = (event, id) =>{
    const PersonIndex = this.state.persons.findIndex((p) =>{
        return p.id === id
    });

    const person = {...this.state.persons[PersonIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[PersonIndex] = person;

    this.setState({persons: persons});
  }

  toggleHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (index) =>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
         <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}></Persons>
         
        </div>
      );
      
    }

   
    return (
        <div className={classes.App}>
          <button onClick={() =>{this.setState({showCockpit :false})}}>Remove Cockpit</button>
           {this.state.showCockpit? 
           <Cockpit
            title = {this.props.appTitle}
            showPersons ={this.state.showPersons}
            personsLength = {this.state.persons.length}
           clicked={this.toggleHandler}></Cockpit>
           :null}
            {persons}          
        </div>
    );
  }
}

export default App;
//#region commented functional component
  
// export default Radium(App);

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const app = () => {
//  const [personState, setPersonState] = useState({
//     persons:[
//       {name:"Max", age:23},
//       {name:"Manu", age:30},
//       {name:"Stephanie", age:20}
//     ]
//   });
//   const [otherState, setOtherState] = useState('other state value')
//   console.log(personState, otherState);
  
//   const switchNameHandler = () =>{
//     setPersonState({
//       persons:[
//         {name:"Maximilian", age:23},
//         {name:"Manu", age:30},
//         {name:"Stephanie", age:25}
//       ]
//     });
      
    
//   }
 
//     return (
//       <div className="App">
//         <h1>Hi, I am React app</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}>Hobby: Racing</Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
//       </div>
//     );
  
// }

// export default app;
//#endregion