import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props)
  }
  
  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount')
  }
  
  componentWillReceiveProps (nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps)
  }

  //This is already built into PureComponents by default
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextProps.persons != this.props.persons ||
  //     nextProps.changed != this.props.changed ||
  //     nextProps.clicked != this.props.clicked; //Check the pointer of the objects to see if they are the same, does not do a deep comparison
  //   // return true;
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate')
  }

  render() {
    return this.props.persons.map((person, index) => {
      return <Person 
        click={() => this.props.clicked(index)}
        name={person.name} 
        position={index}
        age={person.age} 
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

export default Persons;