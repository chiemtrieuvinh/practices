import React, { useRef, useState, useEffect } from "react";

const re = '/^[0-9]/g'
const twoDigit = (number) => {
const twoDigit = number < 9 ? `0${number}` : number
 return twoDigit
}
const timeConvertion = (number) => {
let tmp = number
let memorizedNumber = 0
let minuteCounter = 0
while(tmp > 59 ) {
    tmp = tmp - 60
    memorizedNumber = number - tmp
    minuteCounter++;
}
if(tmp < 0){
    return `${twoDigit(0)}:${twoDigit(number)}`
}else{
    return `${twoDigit(minuteCounter)}:${twoDigit(tmp)}`
}
}

export default function Stopwatch() {
  const inputRef = useRef()
  const timeRef = useRef();
  const interval = useRef();
  const date = useRef()
  const handleChange = e => {
    e.preventDefault();
    if(!isNaN(Number(e.target.value))){
      console.log(e.target.value)
        inputRef.current.value = Math.abs(Number(e.target.value))
        date.current = Math.abs(Number(e.target.value))
        timeRef.current.textContent = timeConvertion(date.current)
    }
  }

  const startHandler = () => {
    if(timeRef.current) {
            interval.current = setInterval(() => {
                // if(date.current < Number(inputRef.current.value)){

                // }else{
                //     date.current = 0
                //     clearInterval(interval.current)
                // }
                date.current+= 1
                timeRef.current.textContent = timeConvertion(date.current)
            },1000)
        }
  };

  const stopHandler = () => {
    clearInterval(interval.current)
    timeRef.current.textContent = timeConvertion(date.current)
  };
  const resetHandler = () => {
    inputRef.current.value = 0
    date.current =  Number(inputRef.current.value)
    timeRef.current.textContent = timeConvertion(0)
    clearInterval(interval.current)
  };
  useEffect(() => {
    if(inputRef){
        inputRef.current.focus()
    }
    if(timeRef.current) {
        date.current = 0
        timeRef.current.textContent =timeConvertion(date.current)
    }
    return () => clearInterval(interval.current)
  },[]);

  return (
    <div>
      <label>
        <span>Enter seconds:</span> <input type="number" defaultValue={0} ref={inputRef} onChange={handleChange}/>
      </label>
      <div className="timer" ref={timeRef} data-testid="timeDisplay"></div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}
