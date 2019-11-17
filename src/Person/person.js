 import React from 'react';
 import Radium, { StyleRoot } from 'radium';
 import './person.css';

 const person = (props) => {
 	const style = {
 		'@media (max-width : 500px)' : {
 			width: '450px',
 			background: 'red',
 		}
 	}
 	return (

		 <div className="section" style={style} >
	 <p onClick={props.click}>I am a {props.name} And i am {props.age} Years old. </p>
		<p className="cre">{props.children}</p>
    <input type="text" onChange={props.changed} value = {props.name}/>
 	
	 </div>	
	
	  )
 }
 export default Radium(person);
