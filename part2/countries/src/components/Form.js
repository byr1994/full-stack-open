
const Form = ({country, handleCountryChange}) => {
    return(
        <form>
            <div>find countries <input value={country} onChange={handleCountryChange} /></div>
        </form>
    )
}

export default Form