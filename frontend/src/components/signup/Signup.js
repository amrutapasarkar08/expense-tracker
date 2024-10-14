import React, { useState } from 'react'
import axios from 'axios'
import loginbg from '../../public/images/loginbg.jpg';

const Signup = () => {

    const [error, setError] = useState(null)
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = inputValues;

    const handleInput = name => e => {
        setInputValues({ ...inputValues, [name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const response = axios.post(`http://localhost:5000/api/v1/signup`, inputValues)
            .catch((err) => setError(err.response.data.message))
    }



    return (
        <div>
            <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
                <main className={`mx-auto min-h-screen`}>
                    <div className="relative flex">
                        <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%]  lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:min-h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
                            <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                                <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">

                                    <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                                        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                                            Sign Up
                                        </h4>
                                        <p className="mb-9 ml-1 text-base text-gray-600">
                                            Signup Yourself to access the features !
                                        </p>
                                        <form onSubmit={handleSubmit}>
                                            <label className='mt-2 text-sm text-navy-700 dark:text-white ml-1.5 font-medium'>
                                                Name*
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className='mt-2 flex h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
                                                variant="auth"
                                                extra="mb-3"
                                                placeholder="Enter your name"
                                                value={name}
                                                name={'name'}
                                                onChange={handleInput('name')}
                                            />
                                            {/* Email */}

                                            <label className='mt-2 text-sm text-navy-700 dark:text-white ml-1.5 font-medium'>
                                                Email*
                                            </label>
                                            <input
                                                id="email"
                                                type="text"
                                                className='mt-2 flex h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
                                                variant="auth"
                                                extra="mb-3"
                                                placeholder="mail@simmmple.com"
                                                value={email}
                                                name={'email'}
                                                onChange={handleInput('email')}
                                            />

                                            <label className='mt-2 text-sm text-navy-700 dark:text-white ml-1.5 font-medium'>
                                                Password*
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                className='mt-2 flex h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
                                                variant="auth"
                                                extra="mb-3"
                                                placeholder="Min. 8 characters"
                                                value={password}
                                                name={'password'}
                                                onChange={handleInput('password')}
                                            />
                                            <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                                                Signup
                                            </button>
                                        </form>
                                        <div className="mt-4">
                                            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                                                Already registered ?
                                            </span>
                                            <a
                                                href=" "
                                                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                                            >
                                                Login
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                                    <div
                                        className="absolute flex h-full w-full items-center justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
                                        style={{ backgroundImage: `url(${loginbg})` }}
                                    >
                                        <div className="font-poppins text-[40px] font-bold uppercase text-White-900">
                                            Expense <span class="font-medium">Tracker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Signup