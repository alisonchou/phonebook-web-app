import React from 'react'

const Filter = ({ filter, handleFilter }) => {
    return <div className='filter'>filter by name <input value={filter} onChange={handleFilter} /></div>
}

export default Filter
