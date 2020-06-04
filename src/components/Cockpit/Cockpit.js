import React ,{useEffect} from 'react'
import classes from './Cockpit.css'
const cockpit = (props) =>{

  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    setTimeout(()=>{
      alert('saved data to cloud');
    },1000);

    return ()=>{
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  },[]);

  useEffect(()=>{
    console.log('[Cockpit.js] 2nd useEffect');

    return ()=>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

    console.log('[Cockpit.js] rendering');
    let btnClass = '';   
    if(props.showPersons){        
        btnClass = classes.Red;
        console.log(btnClass)
    }

    const assignedClasses = [];
    if(props.personsLength <=2){
      assignedClasses.push(classes.red);
      console.log(assignedClasses);
    }
    if(props.personsLength <=1){
      assignedClasses.push(classes.bold);
      console.log(assignedClasses);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This really works!!</p>
            <button className={btnClass}
            onClick={props.clicked}>
            Switch Name</button>
        </div>
    );
};

export default React.memo(cockpit);