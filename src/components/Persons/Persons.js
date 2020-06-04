import React,{Component} from 'react'
import Person from './Person/Person'
// const persons = (props) =>{

class Persons extends Component{
  render(){
    return this.props.persons.map((person, index) =>{
      console.log('[Persons.js] rendering');
          return(
            <Person 
            name={person.name} click={() =>{this.props.clicked(index)}} 
            age={person.age}
            key={person.id}
            changed={(event) =>{this.props.changed(event, person.id)}}>                
            </Person>
          )
        });
  }
 
    }
// };

export default Persons;