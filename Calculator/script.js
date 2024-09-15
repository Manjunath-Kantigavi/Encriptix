let memory = 0;
let darkMode = false;


function clearDisplay(){
    document.getElementById('display').value='';
}
function appendNumber(number){
    document.getElementById('display').value +=number;

}
function backspace(){
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0,-1);
}
function calculate(){
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value =result;
}

function memoryClear(){
    memory = 0;
    alert("Memory Cleared");

}
function memoryRecall(){
    document.getElementById('display').value=memory;
}
function memoryAdd(){
    memory+= Number(document.getElementById('display').value);
    alert("Added to Memory")
}
function memorySubtract(){
    memory-= Number(document.getElementById('display').value);
    alert("Subtracted from Memory")
}

// function toggleMode() {
//     document.body.classList.toggle("dark-mode");
//     if (document.body.classList.contains("dark-mode")) {
//       document.documentElement.style.setProperty("--background", "#333");
//     } else {
//       document.documentElement.style.setProperty("--background", "#f4f4f4");
//     }
//   }
  
// Set the body to light mode
// function setLightMode() {
//     document.body.classList.add('light-mode-active');
//     document.body.classList.remove('dark-mode-active');
//   }
  
//   // Set the body to dark mode
//   function setDarkMode() {
//     document.body.classList.add('dark-mode-active');
//     document.body.classList.remove('light-mode-active');
//   }
  
function toggleMode(){
    darkMode = !darkMode;
    if (darkMode){
        document.body.classList.add("dark-mode");
    }
    else{
        document.body.classList.remove("dark-mode");
    }
}
//keyboard support

document.addEventListener('keydown',function(event){
    const key = event.key;
    if(!isNaN(key)){
        appendNumber(key);
    }else if(['+','-','*','/'].includes(key)){
        appendNumber(key);
    }else if(key ==='Enter'){
        calculate();
    }else if(key ==='Backspace'){
        backspace();
    }else if(key ==='Escape'){
        clearDisplay();
    }
});


  // Switch to light mode
// function setLightMode() {
//     document.body.classList.add('light-mode-active');
//     document.body.classList.remove('dark-mode-active');
//   }
  
  // Switch to dark mode
//   function setDarkMode() {
//     document.body.classList.add('dark-mode-active');
//     document.body.classList.remove('light-mode-active');
//   }
  