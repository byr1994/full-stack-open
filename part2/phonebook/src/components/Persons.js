const Person = ({person, handleDeleteClick}) => {
    return <p>{person.name} {person.number} <button value={person.id} name={person.name} onClick={handleDeleteClick}>delete</button></p> 
}

const Persons = ({personsToShow, handleDeleteClick}) => {
    return(
        <div>
            {personsToShow.map((person) => 
                <Person key={person.id} person={person} handleDeleteClick={handleDeleteClick}/>
            )}
        </div>
    )
}

export default Persons

