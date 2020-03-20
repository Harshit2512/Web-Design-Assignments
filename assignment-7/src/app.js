
//This add rxjs dependencies requires for rxjs events and suscriber
let rxjs = require("rxjs");

let button = document.querySelector(".submit");

//Perform rxjs event on clicking search button
const event$ = rxjs.fromEvent(button,"click");

// rxjs suscriber which takes input values and call function to fetch data from API use Fetch
event$.subscribe(function(){
    
    event.preventDefault();
    let symbols = document.getElementById("input").value;
    populateTbl(symbols);
})

function populateTbl(symbols){

    // Remove additional space after comma if there is any
    symbols = symbols.replace(/\s*,\s*/g, ",");
    // Dynamically create table based on data from server
    let table = document.querySelector(".table");
    let rowCnt =table.rows.length
    if(rowCnt-1 >=1){
        for(let k=1; k<=rowCnt-1;k++){
            table.deleteRow(1);
        }
    }  
  
    // Token created for Stock API
    let token ="8k1ua39K1pe6BqEK0KrqvUAIJ7CEN1RF2o9z2IOW3ZeJ9fOHpo91nvgUxuFV";

    // Dynamic URL based on input value by user
    let url = "https://api.worldtradingdata.com/api/v1/stock?symbol="+symbols+"&api_token="+token;
    
    // Fetch API to call server resource with response handled with promise
    const fetchPromise= fetch(url);
    fetchPromise.then(response => {
        return response.json();
    }).then(res =>{

        if(res.data.length>0){
        let tblData = res.data;
        var col = [];
        for(var i in tblData){
            let row = table.insertRow(); 
            for(var j in tblData[i]){
                if (col.indexOf(j) === -1) {
                    col.push(j);
                }              
            }
            for(var value in col){
                var tabCell =row.insertCell(-1);
                tabCell.innerHTML = tblData[i][col[value]];
            }

        }
        }
    }).catch((err) =>{
        alert("Error Occurred in Response. Please Check if given input is correct!!");
    });

}

