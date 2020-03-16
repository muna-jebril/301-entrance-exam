
var d = new Date("march 16 2020");
document.getElementById("theDate").innerHTML = d;


var Tasks=[];
function Task ()
{
    this.task=task;
    this.date= date;
Tasks.push(this);
setItem();
}

  function Display ()
  {
      var list = document.getElementById("list2");
     for (var i = 0 ; i <Tasks.length ; i++){
      var li1=document.createElement("li");
      list.appendChild(li1);
      li1.textContent= Tasks[i].task;
     }

  }
  Display();

  var button =  document.getElementById("submit");
  button.addEventListener("submit", function(event){
      event.preventDefault();
      {
          var firstrow=event.target.Task.value;
          var second= event.target.date.value;
var t1= new Task (firstrow,second);


      }
  } )
  function setItem (){
      var x= JSON.stringify(Tasks);
      localStorage.setItem("Tasks",x);
  }
  function getItem (){
      var whatToDo =localStorage.getItem("x");
      var y=JSON.parse(x);
  }