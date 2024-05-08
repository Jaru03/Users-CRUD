import { useEffect, useState} from 'react'
import './App.css'
import useCRUD from './assets/hooks/useCRUD'
import FormUser from './assets/components/FormUser'
import UserCard from './assets/components/UserCard'

function App() {
  const [userEdit, setUserEdit] = useState()
  const [formIsClose, setFormIsClose] = useState(true)

  const BASEURL = `https://backend-users-crud-bvf4.onrender.com`
  const [users, getUsers, createUser, deleteUser, updateUser] = useCRUD(BASEURL)


  console.log(users)

  useEffect(() => {
    getUsers('/users/')
  }, [])
  
  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div className=''>
      <header className='w-full flex items-center justify-between px-6 py-4 mb-5'>
        <h1 className='text-5xl font-bold py-1'>Users</h1>
        <button onClick={handleOpenForm} className='mt-4 text-lg font-semibold py-2 px-4 w-56 text-white bg-buttonColor rounded-md shadow-md hover:brightness-125 hover:transition-all'>Create new user</button>
      </header>
      <FormUser 
      createUser={createUser}
      formIsClose={formIsClose}
      userEdit={userEdit}
      updateUser={updateUser}
      setUserEdit={setUserEdit}
      setFormIsClose={setFormIsClose}
      />

      <div className='w-full flex flex-wrap justify-center gap-4 my-4'>
        {
          users?.map(user => (
            <UserCard
            deleteUser={deleteUser}
            setUserEdit={setUserEdit}
            key={user.id}
            user={user}
            handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
