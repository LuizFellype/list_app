import React, { PureComponent } from 'react';
import './App.css';
import AddInput from './components/AddInput'
// import Item from './components/Item'
import Item from './components/Item'
import { upper } from './sistem/Upper'

const initialState = {
  history: [],
  counter: 0
}

class App extends PureComponent {
  state = { ...initialState }

  onAddInput = (val) => {
    if(this.state.value === '') { 
      return
    }
    const history = [...this.state.history]
    const value = upper(val)
    history.push({id: this.state.counter, value})
    const counter = this.state.counter + 1
    this.setState({history, counter})
  }

  deletItem = (id) => {
    const history = this.state.history.filter((el) => el.id !== id)
    this.setState({ history });
  }

  render() {
    console.log('F -> App Render')
    return (
      <div className='leaf'>
      <h2>Make Your List</h2>
      <div className='cent'>
        <AddInput picking={this.onAddInput}/> 
      </div>
      {/* <List history={this.state.history} func={this.deletItem} /> */}
        <ul>{
          this.state.history.map((el, i) => 
          <Item key={i} func={this.deletItem} id={el.id} newInput={el.value}/>
          )}
        </ul>
      
      </div>
    );
  }
}

export default App;
