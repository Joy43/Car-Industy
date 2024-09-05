'use client'
import Link from 'next/link'
import React from 'react'

export default function Signup() {
    const handleSignup = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };
        const resp=await fetch("http://localhost:3000/signup/api",{
            method:"post",
            body:JSON.stringify(newUser),
            headers:{
                "content-type":"appliction/json"
            }

        })
        console.log(resp);
        if(resp){
            event.target.reset()
        }
    }

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                {/* Signup animation */}
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{
                        backgroundImage: "url('https://i.ibb.co/23jRQYJ/Signup.gif')",
                    }}
                ></div>

                {/* Form */}
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Car Industry</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>

                    {/* Google signup */}
                    <button
                        href="#"
                        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                    >
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                {/* SVG paths for Google icon */}
                                <path d="..." fill="#FFC107" />
                                <path d="..." fill="#FF3D00" />
                                <path d="..." fill="#4CAF50" />
                                <path d="..." fill="#1976D2" />
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign Up with Google</h1>
                    </button>

                    {/* Divider */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">
                            or Sign up with email
                        </a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>

                    {/* Signup form */}
                    <form onSubmit={handleSignup}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Your name</label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text"
                                name="email"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <a href="#" className="text-xs text-gray-500">
                                    Forget Password?
                                </a>
                            </div>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="password"
                                name="password"
                            />
                        </div>
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    {/* Link to login */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link href="/login" className="text-xs text-gray-500 uppercase">
                            or Login
                        </Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
