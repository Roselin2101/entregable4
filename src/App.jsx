import { useState, useEffect } from 'react'
import FormUser from './components/FormUser'
import './App.css'
// import axios from 'axios'
import UserCard from './components/UserCard'
import useCrud from './hoocks/useCrud'

function App() {

  const [closeForm, setCloseForm] = useState(true)
  
  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById } = useCrud()

  const [updateInfo, setUpdateInfo] = useState()
 
  useEffect(() => {
    getAllUsers()
  }, [])
  
  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App__btn'>Open Form</button>
      <div className={`form-container 
      ${closeForm &&'close__form'}`}>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
      /></div>
      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              
            />
          ))
      }
      </div>
    </div>
  )
}

export default App
