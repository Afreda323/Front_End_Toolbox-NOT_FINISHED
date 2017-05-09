import list from '../DevTools/checklistlist.js';

//THE TASKS START OUT AS AN EMPTY ARRAY
let tasks = [];
//  WE THEN LOOP THROUGH THE CATEGORIES
list.forEach((cat) => {
  //WHILE INSIDE THE CATEGORIES WE LOOP THROUGH THE TASKS
  //AND PUSH THE CHECKED BOOLEAN VALUE TO THE TASKS ARRAY WE CREATED
    cat.tasks.forEach((task) => {
      tasks.push(task.checked);
    })
});
// THIS IS WHERE WE DETERMINE WHAT ARE INITIAL STATE WILL BE ON LOAD
function getInitialState() {
  // IF THERE IS NO LOCAL STORAGE BEING USED
  // OUR STATE WILL BE THE TASKS ARRAY
  if (!localStorage.getItem('tasks')) {
    return tasks;
  }else {
    //IF THERE IS LOCAL STORAGE, WE WILL USE THATS
    //ITS PLAIN TEXT, SO WE MAKE IT AN ARRAY
    //AND CONVERT THE VALUES TO BOOLEANS
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
            //  THE CHECKBOX INDEX IS RETURNED
            let i = action.payload.i;
            //  UPDATE THE ARRAY, IMMUTABLE STYLE
            //  MAP THOUGH THE OLD STATE LOOKING FOR THE INDEX OF OUR NEWLY CHECKED TASK
            const newState = state.map((item, index)=>{
                //IF THE INDEX DOESNT MATCH, RETURN AS IS
                if(index !== i) { return item; }
                //IF IT DOES, FLIP THE BOOLEAN AND RETURN IT
                return !item;
            });
            //SET THE NEW STATE TO LOCAL STORAGE
            localStorage.setItem('tasks', newState)
            //RETURN NEW STATE
            return newState;
        default:
            return state;
    }
}
