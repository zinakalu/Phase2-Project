import React from 'react'
import {useNavigate} from "react-router-dom"

function UsersCard({user}) {

    const navigate = useNavigate()

    function handleClick(){
        navigate(`/profile-page/${user.id}`)
    }



  return (
    <div>
        <h3 onClick ={handleClick} className="usernamess">{user.username}</h3>

    </div>
  )
}

export default UsersCard