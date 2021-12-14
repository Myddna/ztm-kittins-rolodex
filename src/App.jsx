import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box';


class App extends Component {

  constructor(){
    // calls Component's constructor, gives access to this.state
    super();

    // Defining initial state
    this.state = {
      monsters: [],
      searchField: ''
    };

    // [EX.A] This is neccesary to "this" to be available inside handleChange function.
    // JS DOES NOT set automatically "this" in methods context.
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({monsters: users}))
      .catch(err => console.log(`Error retrieving data: ${err.message}`));
  }

  componentDidUpdate(){
    console.log('ComponentDidUpdate:', this.state);
  }

  // [EX. A]
  // handleChange(e){
  //   this.setState({ searchField: e.target.value });
  // }

  // If we declare the handler this way, the arrow function GETS the context:
  // Automatically binds "this" to the place where the arrow function is defined (the App Component)
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Kittins Rolodex</h1>
        <SearchBox 
          placeholder='Search monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
 