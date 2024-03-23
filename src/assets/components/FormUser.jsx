import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({createUser, userEdit, updateUser, setUserEdit, formIsClose, setFormIsClose}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(userEdit)
  }, [userEdit])
  

  const submit = data => {

    if (userEdit) {
      updateUser('/users/', userEdit.id, data)
      setUserEdit()
      
    } else {
      createUser('/users/', data)
    }
    
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''

    })

    setFormIsClose(true)
  }

  const handleCloseForm = () => {
    setFormIsClose(true)

    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''

    })
    setUserEdit()
  }

  return (
    <div className={`fixed top-0 left-0 w-full min-h-screen grid place-content-center bg-transparentBlack backdrop-blur-sm ${formIsClose && 'scale-0'}`}>
      <form onSubmit={handleSubmit(submit)} className="relative bg-white w-80 rounded-xl pt-8 px-6 pb-10 ">
        <header>
          <h2 className="text-xl text-center mb-3 font-medium mt-2">User Form</h2>
          <div onClick={handleCloseForm} className="text-xl rounded-full font-bold cursor-pointer right-6 top-4 text-red-600 absolute">x</div>
        </header>
        <label className='flex flex-col gap-1 pt-1'>
          <span className="text-m font-normal pl-4">Email: </span>
          <input className='font-semibold border py-1 px-3 rounded-md block border-stone-400 border-solid' {...register('email')} type="email" placeholder="your@email.com" />
        </label>
        <label className='flex flex-col gap-1 pt-1'>
          <span className="text-m font-normal pl-4">Password: </span>
          <input className='font-semibold border py-1 px-3 rounded-md block border-stone-400 border-solid' {...register('password')} type="password" placeholder="*********" />
        </label>
        <label className='flex flex-col gap-1 pt-1'>
          <span className="text-m font-normal pl-4">First Name: </span>
          <input className='font-semibold border py-1 px-3 rounded-md block border-stone-400 border-solid' {...register('first_name')} type="text" placeholder="Jose" />
        </label>
        <label className='flex flex-col gap-1 pt-1'>
          <span className="text-m font-normal pl-4">Last Name: </span>
          <input className='font-semibold border py-1 px-3 rounded-md block border-stone-400 border-solid' {...register('last_name')} type="text" placeholder="Rico"/>
        </label>
        <label className='flex flex-col gap-1 pt-1'>
          <span className="text-m font-normal pl-4">BirthDay: </span>
          <input className='font-semibold border py-1 px-3 rounded-md block border-stone-400 border-solid' {...register('birthday')} type="date"/>
        </label>
        <button className="mt-4 text-base py-1 px-4 w-full text-white bg-buttonColor rounded-md hover:brightness-125">Submit</button>
      </form>
    </div>
  );
};

export default FormUser;
