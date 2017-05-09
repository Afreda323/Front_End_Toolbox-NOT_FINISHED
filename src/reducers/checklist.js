import list from '../DevTools/checklistlist.js';


let tasks = [];
list.forEach((cat) => {
    cat.tasks.forEach((task) => {
      tasks.push(task.checked);
    })
});

function getInitialState() {
  if (!localStorage.getItem('tasks')) {
    return tasks;
  }else {
    return localStorage.getItem('tasks').split(',').map((val) => {
      if (val.toLowerCase() === 'true') {
        return true;
      }else {
        return false;
      }
    });
  }
}


export default function(state = getInitialState(), action) {
    switch (action.type) {
        case 'CHECKED':
            // returns the index
            let i = action.payload.i;
            const newState = state.map((item, index)=>{
                if(index !== i) { return item; }
                return !item;
            });
            localStorage.setItem('tasks', newState)
            return newState;
        default:
            return state;
    }
}
