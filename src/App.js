import React, { Component } from 'react';
import './App.css';
import Todo from './Todo/Todo'
import Fill from './Fill/Fill'
import _ from 'lodash'


class App extends Component {
  state = {
    jobs : [
      {
        name : 'Mua dien thoai',
        status : 1
      },
      {
        name : 'Mua tivi',
        status : 1
      },
      {
        name : 'Mua tủ lạnh',
        status : 2
      },
      {
        name : 'Mua may tinh',
        status : 2
      }
    ],
    job_done : [],
    job_action : [],
    showlAll : true,
    showDone : false,
    showAction : false,
    alert : null
  }
/*---------------------------------------------------*/ 
  countNewJobs = () => {
    return _.filter(this.state.jobs, { status : 1 }).length
  }
/*---------------------------------------------------*/ 
  changeStatusHandlder = (currentIndex) => {
    let update = this.state.jobs;

      for (var i in update) {
        if(i == currentIndex){
          if (update[i].status === 1) {
            update[i].status = 2;
             break; //Stop this loop, we found it!
          }else{
            update[i].status = 1;
            break;
          }
        }
      }

   this.setState({
     jobs : update
   });
  }
/*---------------------------------------------------*/ 
  setChecked = (status) => {
    return ( status === 1 ? false : true);
  }
/*---------------------------------------------------*/ 
  removeItem = (index) => {
    let update = this.state.jobs; 
    this.state.jobs.splice(index, 1);
    this.setState({
      jobs : update
    });
  }
/*---------------------------------------------------*/ 
  checkEmptyInput = (data) => {
    return (data == '') ? true : false;
  }
/*---------------------------------------------------*/ 
  addNewItem = () => {
    
    let data = this.refs.newJob.value;
    if(!this.checkEmptyInput(data)){
        let update = this.state.jobs;
        update.push({
          name : data,
          status : 1
        })
        this.setState({
          jobs : update,
          alert : null
        });
        this.refs.newJob.value = null;
    }else{
      this.setState({
        alert : "Please fill out this field"
      });
    }
  }
/*---------------------------------------------------*/ 
fillByDone = () => {
  this.setState({
    job_done : _.filter(this.state.jobs, { status : 2 }),
    showDone : true,
    showlAll : false,
    showAction : false
  });
}
fillByAction = () => {
  this.setState({
    job_action : _.filter(this.state.jobs, { status : 1 }),
    showDone : false,
    showlAll : false,
    showAction : true
  });
}

fillByAll = () => {
  this.setState({
    showDone : false,
    showlAll : true,
    showAction : false
  });
}
/*---------------------------------------------------*/ 
  render() {
    let jobs = null;
    let jobDone = null;
    let jobAction = null;
    if(this.state.showlAll == true && this.state.showAction == false && this.state.showDone == false){
        jobs = (
          <div>
          { 
            this.state.jobs.map((item, index) => {
            return(
                    <Todo 
                    name= { item.name } 
                    key={index}
                    setChecked = { this.setChecked(item.status) }
                    remove = { this.removeItem.bind(this, index) }
                    click = { this.changeStatusHandlder.bind(this, index) } />
                )
              })
          }
          </div>
      )
    }else if(this.state.showlAll == false && this.state.showAction == false && this.state.showDone == true){
      jobs = (
        <div>
        { 
          this.state.job_done.map((item, index) => {
          return(
                  <Todo 
                  name= { item.name } 
                  key={index}
                  setChecked = { this.setChecked(item.status) }
                  remove = { this.removeItem.bind(this, index) }
                  click = { this.changeStatusHandlder.bind(this, index) } />
              )
            })
        }
        </div>
    )
    }else{
      jobs = (
        <div>
        { 
          this.state.job_action.map((item, index) => {
          return(
                  <Todo 
                  name= { item.name } 
                  key={index}
                  setChecked = { this.setChecked(item.status) }
                  remove = { this.removeItem.bind(this, index) }
                  click = { this.changeStatusHandlder.bind(this, index) } />
              )
            })
        }
        </div>
      )
    }


    return (
        <div className="container-fluid">
            <div className="col-md-12 col-lg-12">
              <h1 id="title">You have { this.countNewJobs() } jobs to do
              </h1>
            </div>
            <div id="add_new_item" className="col-md-12 col-lg-12">
              <Fill
                fillByAll = { this.fillByAll }
                fillByDone = { this.fillByDone }
                fillByAction = { this.fillByAction }
              />
              <div className="col-md-12 col-lg-12">
                  { jobs }  
              </div>
              <div className="group col-md-12 col-lg-12">      
                <div className="col-md-6 col-lg-6 col-md-push-3 col-lg-push-3">
                <form>
                  <div className="form-group">
                  <label>{ this.state.alert }</label>
                    <input type="text" className="form-control" ref="newJob"/>
                  </div>
                  <button type="button" className="btn btn-default" onClick={ this.addNewItem }>Go</button>
                </form>
                </div>
              </div>

          </div>
        </div>
    );
  }
}

export default App;
