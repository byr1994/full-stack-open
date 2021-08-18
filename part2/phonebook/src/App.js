import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Title from './components/Title'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'
// import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ colorMessage, setColorMessage ] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      // console.log(initialPersons)
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber
    }

    if(persons.map(person => person.name).indexOf(newName) >= 0){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const id = persons.find(person => person.name === personObject.name).id

        personService
        .update(id, personObject)
        .then(returnedPerson => {
          // console.log(returnedPerson)
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setColorMessage('green')
            setMessage(`edited ${returnedPerson.name}`)
          }, 500)
          setTimeout(() => {
            setColorMessage('')
            setMessage('')
          }, 2500)
        })
        .catch(error => {
          // console.log('fail')
          setNewName('')
          setNewNumber('')
          setColorMessage('red')
          setTimeout(() => {
            setMessage(`information of ${personObject.name} has already been removed from server`)
          }, 500)
          setTimeout(() => {
            setColorMessage('')
            setMessage('')
          }, 2500)
          setPersons(persons.filter(n => n.id !== id))
        })
      }
    }else{
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setColorMessage('green')
        setTimeout(() => {
          setMessage(`add ${returnedPerson.name}`)
        }, 500)
        setTimeout(() => {
          setColorMessage('')
          setMessage('')
        }, 2500)
      })
    }
  }
  
  const handleDeleteClick = (e) => {
    e.preventDefault();
    if(window.confirm(`Delete ${e.target.name} ?`)){
      personService
      .deletePerson(e.target.value)
      .then(returnedPerson => {
        console.log(returnedPerson)
        const per = persons.find(p => p.id === parseInt(e.target.value))
        setPersons(persons.filter(person => person !== per))
      })
    }else{
      console.log('cancelar')
    }
  }

  const handleNameChange = (e) => {
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumerChange = (e) => {
    // console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handlefilterChange = (e) => {
    // console.log(e.target.value)
    setFilter(e.target.value)
  }


  const personsToShow =  persons.filter(p => p.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0) 

  return (
    <div>
      <Title title='Phonebook'/>
      {message.length === 0 ? <></> : <Notification message={message} color={colorMessage} />}
      <Filter 
        filter={filter} 
        change={handlefilterChange} 
      />
      <Title title='add a new'/>
      <Form 
        addPerson = {addPerson} 
        handleNameChange = {handleNameChange} 
        handleNumerChange = {handleNumerChange} 
        newName = {newName} 
        newNumber = {newNumber} 
      />
      <Title title='Numbers'/>
      <Persons 
        personsToShow={personsToShow} 
        handleDeleteClick = {handleDeleteClick} 
      />
    </div>
  )
}

export default App
