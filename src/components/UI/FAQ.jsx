import { useState } from "react";

export const FAQ = ({curData, onToggle, isActive}) => {
    const {question, answer, id} = curData;
   
return(
    <li key={id}>
        <div className="accordion-grid">
            <p>{question}</p>
            <button onClick={onToggle} className={isActive ? "active-btn" : ""}>{isActive ? "Close" : "Show"}</button>
        </div>
        <p>{ isActive && answer}</p>
    </li>
)
}