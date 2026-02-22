'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react"; 
import { useRouter } from 'next/navigation';

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("") 
  const router = useRouter()
  const session=useSession()
  console.log(session?.data?.user)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setError(""); 

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid email or password");
        console.log(result.error);
      } else {
        router.push('/'); 
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-950 px-4'>
      <div className='w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl'>
        
        <div className="mb-8 text-center">
          <h2 className='text-3xl font-bold text-white mb-2'>Welcome Back</h2>
          <p className="text-gray-400 text-sm">Sign in to your account</p>
        </div>

        <form className='space-y-5' onSubmit={handleSignIn}>
          
        
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1.5'>Email Address</label>
            <input 
              type="email" 
              placeholder='mamta@example.com'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
            />
          </div>

        
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1.5'>Password</label>
            <input 
              type="password" 
              placeholder='••••••••'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
            />
          </div>

        
          {error && (
            <div className='text-red-500 text-sm text-center'>{error}</div>
          )}

          <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-blue-500/20'>
            Login
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-700 flex-1"></div>
          <span className="text-gray-500 text-sm font-medium">OR</span>
          <div className="h-px bg-gray-700 flex-1"></div>
        </div>

        <button 
          type="button"

          onClick={() => signIn('google')}
          className='w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg transition duration-200 border border-gray-300'
        >
          {/* {async()=>{
            await signIn('google',{
              callbackUrl:'/'
            })
          }} */}
          <FcGoogle size={22} />
          <span>Sign in with Google</span>
        </button>

       <p className='text-center text-gray-400 text-sm mt-8'>
          Don't have an account?{' '}
          <Link 
            href="/register" 
            className='text-blue-500 hover:text-blue-400 font-medium hover:underline'
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}

export default LoginPage