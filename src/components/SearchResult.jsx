import { useState } from "react"

import AbilityScore from "./SearchResults/AbilityScore"
import Alignment from "./SearchResults/Alignment"
import Background from "./SearchResults/Background"
import Class from "./SearchResults/Class"

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
                setDetails(data)
            })
    }

    function detailElements(){
        console.log(details)
        if (details){
            switch(searchCategory){
                case "ability-scores":
                    return <AbilityScore details={details} />
                case "alignments":
                    return <Alignment details={details } />
                case "backgrounds":
                    return <Background details={details} />
                case "classes":
                    return <Class details={details} />
                default:
                    return (<h4>Loading...</h4>)
            }  
        }
        else {
            return (<h4>Loading...</h4>)
        }

    }


    return (
        <div className="search-result-item" key={index} onClick={toggleExpanded}>
            <h3>{name}</h3>
            {expanded && detailElements()}
        </div>
    )
}