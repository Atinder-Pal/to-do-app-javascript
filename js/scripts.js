//alert("hello");
const myForm = document.querySelector('form');
console.log( myForm );

const newTaskField = document.getElementById('new-task');
console.log( newTaskField );

const activeList = document.querySelector('#active-to-do-list');
console.log( activeList );

const completedList = document.querySelector('#completed-tasks-list');

/**
 * Event Listener: Form Submit
 */
myForm.addEventListener( 'submit', (event) => {
// Stop the form from submitting! 
event.preventDefault();
console.log( event );

//Get value of New Task field from Form
const newTask = newTaskField.value;
console.log( newTask );

//Create a new Task in the Active To-Do List and a CheckBox for that task
const newActiveTask = document.createElement( 'li' );
const newCheckBox = document.createElement( 'input' );
newCheckBox.type = "checkBox";
newCheckBox.className = "activeTaskCheckBox";
newCheckBox.value = `${newTask}`;


// console.log( newActiveTask );

newActiveTask.textContent = `${newTask}`;
newActiveTask.prepend( newCheckBox );

// console.log( newActiveTask.textContent );
// console.log( newActiveTask );

activeList.appendChild( newActiveTask );

/**
 * Add Event Listener: CheckBox in Active To-Do List
 */
newCheckBox.addEventListener( 'click', (event) => {
    newCheckBox.disabled = true;
    completedList.appendChild( newActiveTask );




} );


});





