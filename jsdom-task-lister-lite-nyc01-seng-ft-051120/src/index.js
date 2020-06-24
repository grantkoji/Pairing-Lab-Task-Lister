document.addEventListener("DOMContentLoaded", () => {
  const formID = document.getElementById('create-task-form')
  formID.addEventListener('submit', function(event) {
    event.preventDefault()
    // 
    let result = document.getElementById('new-task-description')
    let username = document.getElementById('username')
    // console.log(result)
    const value = result.value
    const user = username.value
    // console.log(value)
    let liNew = document.createElement('li')
    liNew.className = 'listed'
  
    // liNew.innerText = value
    // liNew.innerHTML = `${value}<button class='btn'>X</button><button class='edit'>Edit</button>` 
    liNew.textContent = `Message: ${value} User: ${user}`
    button_delete = document.createElement('button')
    button_delete.className = 'btn'
    button_delete.textContent = 'X'
    liNew.appendChild(button_delete)
    edit_button = document.createElement('button')
    edit_button.className = 'edit'
    edit_button.textContent = 'Edit'
    liNew.appendChild(edit_button)
    
    
   
    
    //<input type="checkbox" class="delete-box" name="checkbox></input>
    
    // let checkbox = document.createElement('input') 
    // console.log(checkbox)
    // console.log(liNew)
    let ulParent = document.getElementById('tasks')
    ulParent.append(liNew)
    event.target.reset()

    

    let button_array = document.querySelectorAll('.btn')
    for (i=0; i < button_array.length; i++) {
      button_array[i].addEventListener('click', function(e) {
      console.log(e.target)
      let clicked = e.target
      clicked.parentNode.remove();
      })
    }

  let edit_array = document.querySelectorAll('.edit')

    for (i=0; i < edit_array.length; i++) {
      edit_array[i].addEventListener('click', function(e) {
       let clicked = e.target
      
        clicked.parentNode.contentEditable = 'true'
      })
    }

       
   


    // let liArray = document.querySelectorAll('.listed')
    // console.log(liArray)
    // for (i=0; i < liArray.length; i++) {
    //   liArray[i].addEventListener('mouseenter', function(e) {
    //     console.log(liArray[i])
    //     liArray[i].contentEditable = 'true'
    //   })
    // }
    // for (i=0; i < liArray.length; i++) {
    //   liArray[i].addEventListener('mouseleave', function(e) {
    //     liArray[i].contentEditable = 'false'
    //   })
    // }

  })
})
    //we used mouseover
// welcomeImage.addEventListener('mouseenter', function(e) {
//   const mouse = e.target
//   mouse.src = "https://upload.wikimedia.org/wikipedia/commons/b/be/Bicho-pregui%C3%A7a_3.jpg"


  //can also do 
      //welcomeImage.src = "new link"
      //He prefers event.target b/c it's contained within this one

// })
    

    // let edit_array = document.querySelectorAll('edit')

    // for (i=0; i < edit_array.length; i++) {
    //   edit_array[i].addEventListener('click', function(e) {
    //   clicked.parentNode.contentEditable = 'true'
    //   })
    // }
    // liNew.contentEditable = 'true'

    // for (i=0; i < edit_array.length; i++) {
    //   edit_array[i].addEventListener('click', function(e) {
    //   clicked.parentNode.contentEditable = 'true'
    //   })
    // }

  // let edit_array = document.querySelectorAll('edit')
  // for (i=0; i < edit_array.length; i++) {
  //   edit_array[i].addEventListener('click', function(e) {
  //   let clicked = e.target
  //   clicked.parentNode.remove();
  // })



//   add.addEventListener('click', function(){
//     var newElement = document.createElement('LI');
//     list.appendChild(newElement);
//     newElement.innerHTML= "I am a new element<button class='btn'>X</button>";
//     newElement.addEventListener('click', function () {
//         this.parentNode.removeChild(this);
//     });
// });

  

  // your code here

  //type a task into the field
  //click some form of a busmit button
  //the 
  //string added to dom








/* <div id="main-content">
<h1>Task Lister Lite™️</h1>

<form id="create-task-form" action="#" method="post">
  <label for="new-task-description">Task description:</label>
  <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
  <input type="submit" value="Create New Task">
</form>

<div id="list">
  <h2>My Todos</h2>
  <ul id="tasks">
  </ul>
</div> */


//The ability to edit tasks
//Click edit button. Turns it into text area that I can text into 
//js re

// Node.replaceChild()
// allows you to swap out two nodees.

// Call it on parent nodees

// let li = created li
// let text = document.createElement('textarea')

// going to access .value of text variable

// text.textContent = li.textContent

// text that is in li
// PUt a textarea node inside to the same thing

// li.innerHTML = text
//   -> <textarea=


// li.innerHTML = <textarea> Input in here </textarea>

// When I hit pseudo code 
// Change innerHTML to be a textarea with that text

// I would take li.querySelector["textarea"].value
//   I can then access any textarea inside of it 

// What kind of 
// idea would I work on?

// What kind of textArea




