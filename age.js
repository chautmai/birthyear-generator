function calculate(){
    var age = document.getElementById('age').value

    if (age == '' || age == 0 ){
       document.getElementById('year').style.display = 'block';
       document.getElementById('year').innerHTML = 'Warning: Please enter a valid age'
       document.getElementById('year').style.color = 'red';      
    }
    else{       
       var date = new Date().getFullYear();
       var birthyear = date - age; 
       document.getElementById('year').style.display = 'block'
       document.getElementById('year').innerHTML = 'Your birth-year: ' + '<b>' + birthyear + '</b>';        
    }
}
// document.getElementById('prompt').style.display = 'none';
// document.getElementById('year').style.display = 'none';
document.getElementById('button').onclick = function(){ calculate(); }
