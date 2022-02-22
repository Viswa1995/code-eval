var todoArr  = JSON.parse(localStorage.getItem("studentDataBase"));
var admi = Json.parse(localStorage.getItem("admitted")) || [];
var rej = Json.parse(localStorage.getItem("rejected")) || [];
console.log(todoArr);


todoArr.map(function(elem,index)
{
       var row = document.createElement("tr")

       var col1 = document.createElement("td")
       col1.innerText = elem.name;

       var col2 = document.createElement("td")
       col2.innerText = elem.age;

       var col3 = document.createElement("td")
       col3.innerText = elem.gender;

       var col4 = document.createElement("td")
       col4.innerText = elem.email;

       var col5 = document.createElement("td")
       col5.innerText = elem.phone;

       var col6 = 
       col6.innerText = "Accept";
       col6.addEventListener("click",function ()
       {
           accept(elem)
       });

       var col7 = document.createElement("button");
       col7.innerText = "Reject";
       col7.addEventListener("click",function()
       {
           reject(elem);

       });

       row.append(col1,col2,col3,col4,col5,col6,col7)
       document.querySelector("#body").append(row);
    });

    function accept(){
        console.log(elem);
        admi.push(elem)
        localStorage.setItem("database",Json.stringify(rejected));
    }

}


  

