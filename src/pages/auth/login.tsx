import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginSchema, LoginSchema as FormValues } from '../../common/auth';
import { AuthLayout } from '../../layouts/AuthLayout';

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm<FormValues>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
    shouldFocusError: true
  });

  const handleLogin: SubmitHandler<FormValues> = (data) => {
    console.log({ data });
  }

  return (
    <AuthLayout title='Login'>
      <div className='flex justify-center items-center h-screen'>
          <form className='flex flex-col rounded-md bg-white p-8 text-stone-700'>
            <h1 className='text-center pb-8 font-bold'>Login</h1>
            <div className='pb-2 flex justify-between items-center'>
              <label className='p-2 font-bold'>
                Email
              </label>
              <input className='outline-none bg-gray-900 text-white rounded-md focus:border-gray-400 border-2 box-border h-10' type='email' />          
            </div>
            <div className='pb-2 flex justify-between items-center'>
              <label className='p-2 font-bold'>
                Password
              </label>
              <input className='outline-none text-white rounded-md bg-gray-900 focus:border-gray-400 border-2 box-border h-10' type='password' />
            </div>

            <button className='bg-gray-900 w-24 text-white self-center h-11 rounded-lg m-2 hover:bg-inherit hover:text-stone-800 hover:border-gray-900 border-2 hover:font-bold  font-bold  border-inherit hover:transition hover:duration-700 ease-in-out' type='submit'>Login</button>
            <p className='font-bold text-stone-700'>
              Do not have an account ?
              <Link className='text-blue-700' href='/auth/register'> Click here</Link>
            </p>
          </form>
        </div>
    </AuthLayout>
  )
}

export default Login