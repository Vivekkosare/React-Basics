import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person'
import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium'

class App extends Component {
  state ={
    persons:[
      {id:'adaas',name:"Max", age:23},
      {id:'gfgdf',name:"Manu", age:30},
      {id:'234ef',name:"Stephanie", age:20}
    ],
    showPersons: false
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

    // this.setState({
    //   persons:[
    //     {name:"Max", age:23},
    //     {name: event.target.value, age:30},
    //     {name:"Stephanie", age:25}
    //   ]
    // })
  }

  toggleHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (index) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  render() {

    //  const style ={
    // //   backgroundColor:'darkgrey',
    // //   font:'inherit',
    // //   border: '1px solid grey',
    // //   padding: '8px',
    // //   color:'white',
    // //   borderRadius:'5px',
    // //   boxShadow: '1px 2px 3px orange',
    // //   ':hover':{
    // //     backgroundColor:'turquoise',
    // //     color:'red'
    // //   }
    //  };

    let btnClass = '';

    const StyledButton = styled.button`
      // background-color: ${props => props.alt?'darkgrey':'maroon'};
      // font:inherit;
      // border: 1px solid grey;
      // padding: 8px;
      // color:white;
      // border-radius:5px;
      // box-shadow: 1px 2px 3px orange;
      // &:hover{
      //   background-color:${props => props.alt?'turquoise':'lightgreen'};
      //   color:${props => props.alt?'red':'navy'};
      // }
    `

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return(
              <Person 
              name={person.name} click={() =>{this.deletePersonHandler(index)}} 
              age={person.age}
              key={person.id}
              changed={(event) =>{this.nameChangeHandler(event, person.id)}}></Person>
            )
          })}
                {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
                <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click ={this.switchNameHandler.bind(this,'Max!!')}
                changed={this.nameChangeHandler}>Hobby: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person> */}
        </div>
      );
      // style.backgroundColor = 'maroon';
      // style[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   color:'navy'
      // }
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
      console.log(assignedClasses);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
      console.log(assignedClasses);
    }

    return (
      // <StyleRoot>
     
        <div className={classes.App}>
          <h1>Hi, I am React app</h1>
          <p className={assignedClasses.join(' ')}>This really works!!</p>
          {/* <button style={style}
          onClick={() => this.switchNameHandler('Maxmillian!!')}>
            Switch Name</button> */}
            
            {/* <StyledButton alt={this.state.showPersons}
          onClick={this.toggleHandler}>
            Switch Name</StyledButton> */}
             <button className={btnClass}
          onClick={this.toggleHandler}>
            Switch Name</button>
            {persons}
          
        </div>
      // </StyleRoot>
    );
   //return React.createElement('div', null, React.createElement('h1', {class:'App'}, 'Does this work now?'));
  }
}

export default App;
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