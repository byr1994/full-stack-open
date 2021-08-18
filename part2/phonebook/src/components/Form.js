const Form = ({addPerson, newName, newNumber, handleNameChange, handleNumerChange}) => {
    return(
        <form onSubmit={addPerson}>
            <div>
            name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
            number: <input value={newNumber} onChange={handleNumerChange} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
      </form>
    )
}

export default Form