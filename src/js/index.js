//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application




/*let numbers = [0, 0, 0, 0, 0, 0]


setInterval( ()=>{
    if(numbers[5] > 9){
        numbers[5] = 0
        numbers[4]++
    };
    if(numbers[4] > 9){
        numbers[4] = 0
        numbers[3]++
    };
    if(numbers[3] > 9){
        numbers[3] = 0
        numbers[2]++
    };
    if(numbers[2] > 9){
        numbers[2] = 0
        numbers[1]++
    };
    if(numbers[1] > 9){
        numbers[1] = 0
        numbers[0]++
    };
    
        ReactDOM.createRoot(document.getElementById('app')).render(<Home counter1={numbers[5]} counter2={numbers[4]} counter3={numbers[3]} counter4={numbers[2]} counter5={numbers[1]} counter6={numbers[0]} />);
        numbers[5]++    
    }, 1);



let str = "120";
let number = [];
for(let i of str){
    number.push(i)
};

let digi1 = parseInt(number[number.length -1])
let digi2 = parseInt(number[number.length -2])
let digi3 = parseInt(number[number.length -3])
let digi4 = parseInt(number[number.length -4])
let digi5 = parseInt(number[number.length -5])
let digi6 = parseInt(number[number.length -6])*/

ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);
