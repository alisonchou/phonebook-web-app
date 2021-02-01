import React from 'react'

const Person = ({ name, number }) => {
    return `${name} ${number} `
}

const Persons = ({ persons, handleDelete }) => {
    return (<p>{persons.map(
        person => <span key={person.name}><Person name={person.name} number={person.number} />
        <button type='button' onClick={() => handleDelete(person.id)}>delete</button>
        <br/></span>
    )}</p>)
}

export default Persons
