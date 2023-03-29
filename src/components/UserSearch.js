import React from 'react'

function UserSearch({search, setSearch}) {

    function handleChange(e){
        setSearch(e.target.value)
    }

  return (
    <div>
        <input type ="text" onChange ={handleChange} className="search__input" value ={search} placeholder="Search Username Here"/>
    </div>
  )
}

export default UserSearch