import React from 'react'

const Filter = ({filter, handleFilter}) => {
    return <div>filter shown with <input value={filter} onChange={handleFilter} /></div>
}

export default Filter
