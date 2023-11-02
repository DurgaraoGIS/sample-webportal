import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import person from '../../../assets/WhatsApp Image 2023-11-02 at 11.17.35_3d24a509.jpg'

export const Forgotpassword = () => {
  return (
    <div className='grid grid-cols-12 h-screen '>
            <div className='col-span-4  md:block hidden bg-gradient-to-r from-blue-700 to-blue-900 p-10'>
                <div className=' text-white flex flex-col justify-between h-full'>
                    <div className=''>
                        <div className='flex'>
                            <AiOutlineStar className='text-5xl rounded-full border-white border-solid' />
                            <h1 className='text-4xl'>elstar</h1>

                        </div>

                    </div>
                    <div className=''>
                        <div className='flex'>
                            <img src={person} className='h-12 border-solid border-white border-2 rounded-full' />
                            <div className='ml-3'>
                                <h1 className='font-bold'>Brittany Hale</h1>
                                <p className='font-normal'>CTO, Onward</p>
                            </div>

                        </div>
                        <p className='mt-4 font-normal'>Elstar comes with a complete set of UI components crafted with Tailwind CSS, it fulfilled most of the use case to create modern and beautiful UI and application</p>

                    </div>
                    <div className=''>
                        <div>
                            <p>Copyright © 2023 Elstar</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className='col-span-12 md:col-span-8  '>

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">

                        <h2 className="mt-10  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Forgot Password
                        </h2>
                        <p>Please enter your email address to receive a verification code</p>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                        <form className="space-y-6" action="#" method="POST">
                            <div>

                                <div className="">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder='   admin@mail.com'
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md h-10 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>



                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send Email
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Back to {' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>


            </div>

        </div>
  )
}
