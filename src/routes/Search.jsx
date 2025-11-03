import React from "react"

export default function Search() {

    // State values
    const [ chosenCategory, setChosenCategory ] = React.useState("ability-scores")

    const categories = [
        {value: "ability-scores", name: "Ability Scores"},
        {value: "alignments", name: "Alignments"},
        {value: "backgrounds", name: "Backgrounds"},
        {value: "classes", name: "Classes"},
        {value: "conditions", name: "Conditions"},
        {value: "damage-types", name: "Damage Types"},
        {value: "equipment", name: "Equipment"},
        {value: "equipment-categories", name: "Equipment Categories"},
        {value: "feats", name: "Feats"},
        {value: "features", name: "Features"},
        {value: "languages", name: "Languages"},
        {value: "magic-items", name: "Magic Items"},
        {value: "magic-schools", name: "Magic Schools"},
        {value: "monsters", name: "Monsters"},
        {value: "proficiencies", name: "Proficiencies"},
        {value: "rule-sections", name: "Rule Sections"},
        {value: "rules", name: "Rules"},
        {value: "skills", name: "Skills"},
        {value: "spells", name: "Spells"},
        {value: "subclasses", name: "Subclasses"},
        {value: "subraces", name: "Subraces"},
        {value: "traits", name: "Traits"},
        {value: "weapon-properties", name: "Weapon Properties"}
    ]

    const categoryElements = categories.map((el) => <option key={el.value} value={el.value}>{el.name}</option>)

    function handleSelectionChange(event){
        setChosenCategory(event.target.value)
    }

    function search(formData){
        console.log(formData)
    }

    return (
        <main className="gradient-border">
            <h2 className="title-glow">World of D&D</h2>
            <form id="search-form" action={search}>
                <label htmlFor="dnd-search">Search D&D Database:</label>
                <input type="search" id="dnd-search" name="search-text" placeholder="What are you looking for?" pattern="[a-zA-Z\s0-9]+" />
                <select name="search-dropdown" id="search-dropdown" onChange={handleSelectionChange}>
                    {categoryElements}
                </select>
                {chosenCategory === "monsters" && <div id="search-filters">
                    <fieldset>
                        <legend>Filter by:</legend>
                        <div>
                            <input type="radio" value="name" id="filter-name" name="filter" defaultChecked />
                            <label htmlFor="filter-name">Name</label>
                        </div>

                        <div>
                            <input type="radio" value="challenge_rating" id="filter-challenge-rating" name="filter" />
                            <label htmlFor="filter-challenge-rating">Challenge Rating</label>
                        </div>
                    </fieldset>
                </div>
                }
                <button type="submit">Go!</button>
            </form>

            <section id="search-results">
                Your results will display here.
            </section>
        
        </main>
    )
}