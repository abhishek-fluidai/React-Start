 import React from 'react';

 import './person.css';

 const person = (props) => {
 	
 	return (

		 <div className="section"  >
	 <p onClick={props.click}>I am a {props.name} And i am {props.age} Years old. </p>
		<p className="cre">{props.children}</p>
    <input type="text" onChange={props.changed} value = {props.name}/>
 	
	 </div>	
	
	  )
 }
 export default person;
