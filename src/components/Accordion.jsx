import { useState } from "react"
import faq from "../API/faq.json"
import { useEffect } from "react"
import { FAQ } from "./UI/FAQ"

export const Accordion = () => {
    const [data, setData] = useState([])
    const [activeId, setactiveId] = useState(false)
    useEffect(() => {
    setData(faq)
    },[])
    const handleButton = (id) => {
        setactiveId((previd) => (previd === id ? false : id))
    }
    return( <>
        <h1>The Accordion</h1>
        <ul className="section-accordion">
            {
                data.map((curElem) => {
                    return <FAQ key={curElem.id} curData={curElem} isActive = {activeId === curElem.id} onToggle={() => handleButton(curElem.id)}/>

                })
            }
        </ul>
    </>
    )
}