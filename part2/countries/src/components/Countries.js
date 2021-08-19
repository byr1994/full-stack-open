const Country = ({country, handleSelectClick}) => {
    return <p>{country.name} <button onClick={handleSelectClick} value={country.name}>show</button></p> 
}

const Countries = ({countriesToShow, handleSelectClick}) => {
    return(
        <div>
            {countriesToShow.map((country) => 
                <Country key={country.name} country={country} handleSelectClick={handleSelectClick}/>
            )}
        </div>
    )
}

export default Countries