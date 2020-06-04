import React,{Component} from 'react'
import classes from './Person.css'


//const person = (props) =>{  
class Person extends Component{

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return({message:'snapshot'});
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Person.js] componentDidUpdate');
        console.log(snapshot);
    }
    render(){
        
        console.log('[Person.js] rendering');
        return (
            <div className={classes.Person}>
        
                <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            
            </div>
            )
    }
    
}
export default Person;