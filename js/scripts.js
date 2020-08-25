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
    //console.log( event );

    //Get value of New Task field from Form
    const newTask = newTaskField.value;
    //console.log( newTask );

    //Clear the newTaskField after a new task is submitted
    newTaskField.value="";
    
    //Create a new Task in the Active To-Do List and a CheckBox for that task
    const newActiveTask = document.createElement( 'li' );

    //Create a checkbox
    const newCheckBox = document.createElement( 'input' );
    newCheckBox.type = "checkBox";

    //Create Date Time element
     const start = document.createElement(  'span' );   
     //start.textContent = getCurrentDate().showDate;
     
     //Citation
     //Took hep from 'Adolf Stary' for understanding how to pull date and display it in string
     let startDate = new Date().toLocaleDateString();
     let startTime = new Date().toLocaleTimeString();
     start.textContent =  " Start: " + startDate + " " + startTime+ "  ";
    //End Citation
    
    // console.log( newActiveTask );

    //Assign New task value to newly created list element 
    newActiveTask.textContent= `${newTask}`;

    //Prepend the check box to the list element 
    newActiveTask.prepend( newCheckBox );

    newActiveTask.append(start.textContent);

    //Create Delete button
    //Citation
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pushbutton_create    
    let deleteButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode("Delete");
    deleteButton.appendChild(buttonText);
    //End Citation
    
    //Append Delete Button
    newActiveTask.append(deleteButton);     

    //Create Edit Task Button
    // let editButton = document.createElement("BUTTON");
    // let editButtonText = document.createTextNode("Edit Task");
    // editButton.appendChild(editButtonText);

    // let divElement = document.createElement( 'div' );
    // divElement.append(editButton);

    // newActiveTask.append(divElement);

    //Append the newly created list element to the Active To-Do List
    activeList.appendChild( newActiveTask );

    /**
     * Add Event Listener: Delete Button 
     */
    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();        
        newActiveTask.remove();        

    });

    // /**
    //  * Add Event Listener: Edit Button 
    //  */
    // const myEditButton =document.querySelector(  'div > button');
    // myEditButton.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     const updateTask = document.createElement()

    // });
    


    /**
     * Add Event Listener: CheckBox in Active To-Do List
     */
    newCheckBox.addEventListener( 'click', (event) => {
        //Disable the check box for Completed Tasks List element
        newCheckBox.disabled = true;
        let endDate= new Date().toLocaleDateString();
        let endTime = new Date().toLocaleTimeString();
        const end = document.createElement(  'span' );        
        end.textContent = " End: "+ endDate+ " "+ endTime;
        newActiveTask.append(end.textContent);
        
        //Move the checked list element from Active To-Do List to Completed Task list
        completedList.appendChild( newActiveTask );        
    } );

});

// function createDeleteButton(){
//     let x = document.createElement("BUTTON");
//     let t = document.createTextNode("Delete");
//     x.appendChild(t);
//     return x;
// }










