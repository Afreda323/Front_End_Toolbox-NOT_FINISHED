import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import list from './checklistlist'

class CheckList extends React.Component {
  //  CHANGE PAGE TITLE
  componentDidMount() {
    document.title = 'Launch Checklist'
  }
  //  RETURNS THE AMOUNT OF COMPLETED TASKS
  getCompleted(){
    return this.props.list.filter((bool) => bool === true).length;
  }
  //  ON CHECK, ACTION IS CALLED WITH THE INDEX OF THE BOX
  handleCheck(e){
    this.props.checked(e.target.value - 1);
  }
  //  GENERATE THE PERCENT OF COMPLETED TASKS / THE TOTAL AMOUNT OF TASKS
  renderPercent(completed, total){
    if (completed !== 0) {
      return (((completed / total) * 100).toFixed(0));
    }else {
      return 0
    }
  }

  render() {
    //  WE HAVE TO MAKE OUR OWN INDEX,
    //  DUE TO HOW ARRAYS ARE NESTED WITHIN DIFF OBJECTS
    let index = 0;

    //  MAP THROUGH THE VARIOUS CATEGORIES
    //  AND RETURN AN UNORDERED LIST WITH THE THE TITLES
    const mapped = list.map((item) => {
      //  GO INTO THE TASKS FOR EACH CATEGORY AND MAP THEM
      //  AND RETURN A LIST OF CHECKBOXED FOR EACH TASK
      const tasks = item.tasks.map((task) => {
        //  ADD TO INDEX FOR EVERY MAPPED TASK
        index++;
        return(
          <div key={index} className="form-check cl-task lead">
            <label className="label form-check-label">
              <input type="checkbox" value={index} className="checkbox-hide form-check-input" onChange={this.handleCheck.bind(this)} checked={this.props.list[index - 1]}  />
              <div className="checkbox"></div>
              <a className='cl-link' target='_blank' href={task.link}>?</a> {task.task}
            </label>
          </div>
        )
      })
      //THIS IS RETURNED FROM CATEGORY MAP
      return (
        <li key={item.key}>
          <h2 className='cl-category'>{item.title}</h2>
          {tasks}
        </li>)
    })
    return (
      <div className='container'>
        <h1 style={{marginBottom: 0}} className='with-percent'>Site Launch Checklist <span className='percent'>{this.renderPercent(this.getCompleted(), this.props.list.length)}%</span></h1>
        <p className='lead'>Status will be saved to the browser.</p>
        <ul className='checklist'>
          {mapped}
        </ul>
      </div>
    );
  }
}

//================================
//      --    CONNECT    --
//================================
function mapStateToProps(state){
  return {
    list: state.checklist
  }
}
export default connect(mapStateToProps, actions)(CheckList);
