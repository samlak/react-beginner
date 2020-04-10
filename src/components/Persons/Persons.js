import React, {PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  };
  
  // useEffect(() => {
  //   return () => {
  //       console.log('[Persons.js] cleanup work in useEffect');
  //   };
  // }, []);
  
  // useEffect(() => {
  //   console.log('[Persons.js] 2nd useEffect');
  //   return () => {
  //     console.log('[Persons.js] 2nd cleanup work in useEffect');
  //   };
  // });

  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons){
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return <Person 
        click={() => this.props.clicked(index)}
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
        // isAuth={this.props.isAuthenticated}
      />
    });
  }
};

export default Persons;