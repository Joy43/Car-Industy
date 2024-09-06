'use client'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Login() {
    const router = useRouter();
    const session=useSession()
// -----------social login--------
const handleSocialLogin=(provider)=>{
   
    const session = signIn(provider,{redirect:false})
    

}
if(session.status=='authenticated'){
    router.push('/')  
  }

    const [error, setError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        try {
            const resp = await signIn('credentials', {
                email, password, redirect: false
            });
            if (resp?.status === 200) {
                router.push('/');
            } else {
                setError('Login failed, please check your credentials');
            }
        } catch (err) {
            setError('An error occurred, please try again later');
        }
    }

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{
                        backgroundImage: "url('https://i.ibb.co/23jRQYJ/Login.gif')",
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Car Industry</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <button
                onClick={handleSocialLogin}
                        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                    >
                        <div className="px-4 py-3">
                            
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                              
                                <path d="..." fill="#FFC107" />
                                <path d="..." fill="#FF3D00" />
                                <path d="..." fill="#4CAF50" />
                                <path d="..." fill="#1976D2" />
                            </svg>
                           
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                    </button>
                    {/* -------end------- */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">
                            or Login with email
                        </a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>

                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text"
                                name="email"
                                id="email"
                                aria-label="Email Address"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                            </div>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="password"
                                name="password"
                                id="password"
                                aria-label="Password"
                            />
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link href="/signup" className="text-xs text-gray-500 uppercase">
                            or sign up
                        </Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
