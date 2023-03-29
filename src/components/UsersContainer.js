import React from 'react'
import UsersCard from './UsersCard'

function UsersContainer({search, usersArray}) {

    const filterUsers = usersArray.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))

    const mappedUsers = filterUsers.map(user => <UsersCard key ={user.id} user={user}/>)


  return (
    <div>
        {mappedUsers}
    </div>
  )
}

export default UsersContainer