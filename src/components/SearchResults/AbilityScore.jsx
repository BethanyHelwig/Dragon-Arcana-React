export default function AbilityScore({details}){

    const { full_name, desc, skills } = details

    const skillElements = skills.map(skill => skill.name).join(", ")

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Full Name: <span>{full_name}</span></h4></li>
                <li><h4>Description: <span>{desc}</span></h4></li>
                <li><h4>Skills: <span>{skills.length > 0 ? skillElements : "n/a"}</span></h4></li>
            </ul>
        </div> 
    )
}