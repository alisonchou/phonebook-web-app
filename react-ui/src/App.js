import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import pService from './services/persons'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    if (message.success) {
        return (
            <div className='success'>
                {message.text}
            </div>
        )
    } else {
        return (
            <div className='error'>
                {message.text}
            </div>
        )
    }
}

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter ] = useState('')
    const [ message, setMessage ] = useState(null)

    useEffect(() => {
        pService.getAll().then(initialPersons => {
            setPersons(initialPersons)
        })
    }, [])

    const handleNewName = event => {
        setNewName(event.target.value)
    }
    const handleNewNumber = event => {
        setNewNumber(event.target.value)
    }
    const handleFilter = event => {
        setFilter(event.target.value)
    }

    const personsToShow = persons.filter(
        person => person.name.toLowerCase().includes(filter.toLowerCase())
    )

    const addPerson = event => {
        event.preventDefault()
        const personObj = {
            name: newName,
            number: newNumber
        }
        if (persons.some(person => person.name === newName)) {
            if (window.confirm(`${newName} is already added to phonebook. Replace the old number?`)) {
                persons.forEach(person => {
                    if (person.name === newName) {
                        pService.update(person.id, personObj).then(updated => {
                            setPersons(persons.map(p => p.id !== person.id ? p : updated))
                        }).catch(error => {
                            setMessage({text: error.response.data.error, success: false})
                            setTimeout(() => setMessage(null), 5000)
                        })
                    }
                })
            }
        } else {
            pService.create(personObj).then(newPerson => {
                setPersons(persons.concat(newPerson))
                setMessage({text: `Added ${newName}`, success: true})
            }).catch(error => {
                setMessage({text: error.response.data.error, success: false})
            })
            setTimeout(() => setMessage(null), 5000)
        }
        setNewName('')
        setNewNumber('')
    }

    const handleDelete = id => {
        if (window.confirm('Delete?'))
            pService.remove(id).then(() => setPersons(persons.filter(person => person.id !== id)))
                .catch(() => {
                    setMessage({text: 'Could not delete. Try again', success: false})
                    setTimeout(() => setMessage(null), 5000)
                })
    }

    return (
        <div className='container'>
            <Notification message={message} />
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilter={handleFilter} />
            <h3>add a contact</h3>
            <PersonForm newName={newName} handleNewName={handleNewName} newNumber={newNumber}
                        handleNewNumber={handleNewNumber} addPerson={addPerson} />
            <h3>contacts</h3>
            <Persons persons={personsToShow} handleDelete={handleDelete} />
        </div>
    )
}

export default App
