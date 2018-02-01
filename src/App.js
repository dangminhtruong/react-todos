import React, { Component } from 'react';
import './App.css';
import Todo from './Todo/Todo'
import Add from './Add/Add'


class App extends Component {
  state = {
    jobs : [
      {
        name : 'Mua dien thoai',
        status : 1
      }
    ]
  }

  render() {

    let jobs = null;
    jobs = (this.state.jobs.map((item, index) => {
      return <Todo name= { item.name } key={ index }></Todo>
    }))
    return (
      <div>
        <h1 id="title">You have 5 jobs to do</h1>
        { jobs }
        <Add/>
      </div>
    );
  }
}

export default App;
