 import React from 'react';
 import style from './person.module.css';

 const person = (props) => {
 	
 	return (

		 <div className={style["section"]} >
	 <p onClick={props.click}>I am a {props.name} And i am {props.age} Years old. </p>
		<p className={style["cre"]}>{props.children}</p>
    <input className={style["input-text"]} type="text" onChange={props.changed} value = {props.name}/>
 	
	 </div>	
	
	  )
 }
 export default person;
