// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
  
  //Create a request object 
  var request = new XMLHttpRequest();
  //Capture the response and store it in a variable
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if (request.status === 200) {

          }
      }
      //Not done yet
  };
  
  //Make the request
  request.open('GET', 'http://ajkumar199022.imad.hasura-app.io/counter', true);
  request.send(null);
};

//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Make the request to the server and send the name
    
  //Create a request object 
  var request = new XMLHttpRequest();
  //Capture the response and store it in a variable
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if (request.status === 200) {
              var names = reqquest.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var i=0; i< names.length; i++) {
                list += '<li>' + name[i] + '</li>';          
              }
              var ul = document.getElementById('namelist');
              ul.innerHTML = list;
          }
      }
      //Not done yet
  };
  
  //Make the request
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET', 'http://ajkumar199022.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
};




