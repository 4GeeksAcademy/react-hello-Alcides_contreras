import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import Digi from "./Digi";
import swal from "sweetalert";



const Counter = () => {
const [counter, setCounter] = useState(0);
const [isRunnin, setIsRunnin] = useState(false);
const [countdown, setCountdown] = useState(false);
const [alerta, setAlerta] = useState(null)

console.log(alerta)
console.log(counter);
;


useEffect(()=>{
    let interval = null;
    if(isRunnin){
        interval = setInterval(()=>{
            setCounter(cuenta=>{
                if(countdown){
                    if(cuenta > 0){                       
                        if(cuenta === alerta) {
                            swal({
                                title: "CLOCK",
                                text : `Te quedan ${alerta} segundos `,
                                icon : "warning",
                                button : "ok",
                                timer : "2000"
                                }); 
                                
                        }
                            return cuenta - 1
                    }else{
                        clearInterval(interval)
                        return 0
                    };
                }else{
                    if(alerta != false && cuenta + 1 === alerta){
                        swal({
                            title: "CLOCK",
                            text : `Te quedan ${alerta} segundos `,
                            icon : "warning",
                            button : "ok",
                            timer : "2000"
                            }); 
                    }
                    return cuenta + 1}
            })
        }, 1000)
    }else{
        clearInterval(interval)
    }
    return () => clearInterval(interval)
}, [isRunnin, countdown, alerta]);

const cuentaRegresiva = ((valorInicial)=>{    
    if(valorInicial > 0){
        setCounter(valorInicial)
    }else{
        setCounter(counter)
    }    

    console.log(counter);
    
    setCountdown(true)
    setIsRunnin(true)
});

const contadorNormal = ()=>{
    if (counter > 0) {
        setCounter(counter)
    }else{
        setCounter(0)
    }
    setIsRunnin(true)
    setCountdown(false)
};

const stop = ()=>{
    setIsRunnin(false)
};

const resume = () => {
    if(countdown && counter > 0){
        setIsRunnin(true)
    }
    else if(!countdown){
        setIsRunnin(true)
    }
};

const reset = () => {
    setCounter(0)
    setCountdown(false)
    setIsRunnin(false)
};


/*const alertaUser = (numero) =>{  
    if(alerta){        
           
    };
};*/


const digi1 = Math.floor(counter % 10)
const digi2 = Math.floor((counter % 100) / 10)
const digi3 = Math.floor((counter % 1000) / 100)
const digi4 = Math.floor((counter % 10000) / 1000)
const digi5 = Math.floor((counter % 100000) / 10000)
const digi6 = Math.floor((counter % 1000000) / 100000)




    return (
        
        <>
            <div className="fracciones">
                <div className="text"><i className="fa-regular fa-clock"></i></div>
                <Digi digi={digi6}></Digi>
                <Digi digi={digi5}></Digi>
                <Digi digi={digi4}></Digi>
                <Digi digi={digi3}></Digi>
                <Digi digi={digi2}></Digi>
                <Digi digi={digi1}></Digi>
            </div>
            <div className="botones">
                <button type="button" className="boton" onClick={contadorNormal}>Start Counter</button>
                <button type="button" className="boton" onClick={cuentaRegresiva}>Star Countdown</button>
                <button type="button" className="boton" onClick={stop}>Stop Counter</button>
                <button type="button" className="boton" onClick={resume}>Resume Counter</button>
                <button type="button" className="boton" onClick={reset}>Reset Counter</button>
                <input type="number" className="Escribir" placeholder="Value Countdown" onChange={numero => cuentaRegresiva(parseInt(numero.target.value))} />
                <input type="number" className="Escribir" placeholder="Value alert" onChange={numero => setAlerta(parseInt(numero.target.value))}/>
            </div>

        </>



)
}





export default Counter;