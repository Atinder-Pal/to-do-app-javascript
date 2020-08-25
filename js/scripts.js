//alert("hello");

//Grab the Form element
const myForm = document.querySelector('form');
console.log( myForm );

//Grab the New-task input section
const newTaskField = document.getElementById('new-task');
console.log( newTaskField );

//Grab the Active To-Do List
const activeList = document.querySelector('#active-to-do-list');
console.log( activeList );

//Grab the Completed Tasks List
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

    //Assign New task value to newly created list element 

    //Prepend the check box to the list element 
    newActiveTask.prepend( newCheckBox );

    // console.log( newActiveTask.textContent );
    // console.log( newActiveTask );

    //Append the newly created list element to the Active To-Do List
    activeList.appendChild( newActiveTask );

    /**
     * Add Event Listener: CheckBox in Active To-Do List
     */
    newCheckBox.addEventListener( 'click', (event) => {
        //Disable the check box for Completed Tasks List element
        newCheckBox.disabled = true;
        
        //Move the checked list element from Active To-Do List to Completed Task list
        completedList.appendChild( newActiveTask );
    } );

});





