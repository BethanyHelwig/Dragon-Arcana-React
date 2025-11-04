import { useState } from "react"

export default function SearchResult(props) {

    const { index, url, name, searchCategory } = props

    // State values
    const [ expanded, setExpanded ] = useState(false)
    const [ details, setDetails ] = useState(null)

    // Derived value
    // let expandedDetails = "";

    function toggleExpanded(){
        setExpanded(prev => !prev)
        if (!details) {
            getDetails()
        }
    }

    async function getDetails(){
        fetch(`https://www.dnd5eapi.co${url}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
    }

    const detailsElements = details && Object.entries(details).map(([key, value]) => {
            return <p><strong>{key.toUpperCase()}: </strong> {arrayConversion(value)}</p>
        })

    function arrayConversion(value){
        console.log(typeof value)
        if (Array.isArray(value)){
            console.log("array detected")
            for(let i = 0; i < value.length; i++) {
                if (Array.isArray(value[i])) {
                    arrayConversion(value[i])
                } else {
                    return value.join(", ")
                }
            }
        }
        else if (typeof value === 'object' && value != null){
            console.log("object detected")
            return Object.entries(value).map(([key, value]) => {
                return <p><strong>{key.toUpperCase()}: </strong> {value} </p>
            })
        }
        else {
            return value
        }
    }

    return (
        <div className="search-result-item" key={index} onClick={toggleExpanded}>
            <h3>{name}</h3>
            {expanded && detailsElements}
        </div>
    )
}