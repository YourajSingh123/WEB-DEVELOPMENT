let button = document.getElementById("btn"); 

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("click", ()=>{
//     // alert("mai click ho gya re..");
//     console.log(document.querySelector(".box").innerHTML = "<b>wahh bhai wahh..</b>");  
// });

button.addEventListener("dblclick", ()=>{
    console.log(document.querySelector(".box").innerHTML = "<b>jiya raja chha gaila..</b>");  
});

button.addEventListener("contextmenu", ()=>{
    alert("mai to chla apne ghar..");
});

//Keyboard event
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode);  
});