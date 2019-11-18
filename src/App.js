import React from 'react';
import './App.css';
import Person from './Person/person'

class App extends React.Component {
   state = {
     persons: [
       {id:"1", name:"Abhi", age: 17},
       {id:"2", name:"Abhay", age: 15},
       {id:"3", name:"Saurabh", age: 19},
     ],
     showPersons: false ,
   }
   deletePersonHandler = (personindex) => {
     const persons = [...this.state.persons];
     persons.splice(personindex,1);
     this.setState({persons: persons})
   }
//Ends here

   nameChangedHandler = (event, id) => {
    const personindex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personindex]
    }
    person.name = event.target.value;
    //Ref to Persons Arrey 
      const persons = [...this.state.persons];
      persons[personindex] = person;
      // Here it is changeing the value of target 

       this.setState({persons : persons });
   }// handler ends


  togglePersonsHandler =() => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
  const style = {
       border: '2px solid  #ccc',
      borderRadius: '16px',
      padding: '16px 22px',
      maxWidth: '200px',
      margin: '0 auto',
    color: 'white',
    cursor: 'pointer',
background: 'linear-gradient(to right, #fc6767, #ec008c)',/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 
  }

  let persons = null;
    if (this.state.showPersons)   {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={()=> this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}        
                />
          })}
        </div>
    );
  

  } //If condition ends.

  const classes = [];
  if (this.state.persons.length <= 2 ) {
    classes.push('red'); // classes :red
  }
  if (this.state.persons.length <= 1) {
    classes.push('bold'); //classes :bold 
  }

  return (
  <StyleRoot>
    <div className="App">    
      <h1> React.js (working with state)</h1>
      <p className={classes.join(' ')} style={style} > This id Really working! </p>
      <button onClick={this.togglePersonsHandler } className="btn"> Switch </button>
      {persons}

    </div>
    </StyleRoot>
  );
}
}

export default App ;
