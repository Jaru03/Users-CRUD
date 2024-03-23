import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const UserCard = ({user, deleteUser, setUserEdit, handleOpenForm}) => {
  
  const handleEdit = () => {
    setUserEdit(user)
    handleOpenForm()
  }


  return (
    <article className='w-1/2 h-56 sm:w-1/2 md:w-1/3 xl:w-1/4 shadow-lg rounded-xl'>
      <header className="bg-buttonColor h-12 text-white w-full flex items-center justify-center rounded-t-xl">
        <h2 className="text-xl font-medium">{`${user.first_name} ${user.last_name}`}</h2>
      </header>
        <ul className='px-6 py-4'>
            <li className="flex flex-col"><span className='text-gray-400'>Email</span><span>{user.email}</span></li>
            <li className="flex flex-col"><span className='text-gray-400'>BirthDay</span><span>{user.birthday}</span></li>
        </ul>
        <div className="flex gap-2 mx-6 justify-end">
          <button className="bg-red-400 hover:bg-red-500 rounded-md text-white p-2 text-lg hover:transition-all" onClick={() => deleteUser('/users/', user.id)}><MdOutlineDeleteOutline /></button>
          <button className='bg-slate-300 hover:bg-buttonColor hover:text-white rounded-md p-2 text-lg hover:transition-all' onClick={handleEdit}><CiEdit /></button>
        </div>
    </article>
  )
}

export default UserCard