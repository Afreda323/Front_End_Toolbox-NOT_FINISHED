import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import list from './checklistlist'

class CheckList extends React.Component {
  componentDidMount() {
    document.title = 'Launch Checklist'
  }

  getCompleted(){
    return this.props.list.filter((bool) => bool === true).length;
  }

  handleCheck(e){
    this.props.checked(e.target.value - 1);
  }

  renderPercent(completed, total){
    console.log();
    if (completed !== 0) {
      return (((completed / total) * 100).toFixed(0));
    }else {
      return 0
    }
  }

  render() {
    let index = 0;
    const mapped = list.map((item) => {
      const tasks = item.tasks.map((task) => {
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
function mapStateToProps(state){
  return {
    list: state.checklist
  }
}
export default connect(mapStateToProps, actions)(CheckList);
