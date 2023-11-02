import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiMenuAltLeft } from 'react-icons/bi'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { TbInbox } from 'react-icons/tb'
import { AiOutlineSend } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RiAttachmentLine } from 'react-icons/ri'

import person from '../../../assets/WhatsApp Image 2023-11-02 at 11.17.35_3d24a509.jpg'

export const Mail = () => {
    const [menu, setmenu] = useState(false)
    const [mailData, setmailData] = useState()
    const setdata = () => {
        setmenu(!menu)
    }
    useEffect(() => {
        // Define the URL of the API you want to fetch data from
        const apiUrl = 'http://localhost:8153/mails';

        // Make the GET request
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setmailData(data);

            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(mailData)

    return (
        <div className='grid grid-cols-12 h-screen'>
            <div className={`${menu ? "block" : "hidden"} col-span-2  font-bold mx-10 `} >
                <h1 className='text-3xl my-10'>Mailbox</h1>
                <div className='text-slate-600'>
                    <ul className='my-10'>
                        <li className='flex  my-2'>
                            <TbInbox className='text-3xl -ml-2' />

                            <p className='mx-5 text-lg  mt-0'>Inbox</p>

                        </li>
                        <li className='flex   my-4'>
                            <AiOutlineSend className='text-3xl -ml-2' />

                            <p className='mx-5 text-lg   -mt-0'>Sent Item</p>

                        </li>
                        <li className='flex  static my-4'>
                            <FiEdit2 className='text-3xl -ml-2' />

                            <p className='mx-5 text-lg   -mt-0'>Draft</p>

                        </li>
                        <li className='flex  static my-4'>
                            <AiOutlineStar className='text-3xl -ml-2' />

                            <p className='mx-5 text-lg   -mt-0'>Starred</p>

                        </li>
                        <li className='flex    my-4'>
                            <RiDeleteBin6Line className='text-3xl -ml-2' />

                            <p className='mx-5 text-lg  -mt-0'>Deleted</p>

                        </li>
                        
                    </ul>
                    <h1 className='text-xl mt-3 text-slate-600'>LABELS</h1>
                    <ul className='my-5 list-disc ml-5 text-xl text-slate-500'>
                        <li className='text-blue-300 my-2'><span className='text-slate-500 mx-5'>Work</span></li>
                        <li className='text-purple-300 my-2'><span className='text-slate-500 mx-5'>Private</span></li>
                        <li className='text-red-300 my-2'><span className='text-slate-500 mx-5'>Important</span></li>
                    </ul>
                </div>
            </div>
            <div className='col-span-4 border'>
                <div className='flex m-10'>
                    <button className='cursor-pointer' onClick={setdata}>
                        {menu ? <AiOutlineMenu className='text-4xl' /> : <BiMenuAltLeft className='text-4xl' />}
                    </button>
                    <h1 className='text-2xl font-bold mx-3'>Inbox</h1>
                </div>
                <div>
                    {mailData !== undefined &&
                    <ul>
                        {mailData.map(eachitem=>(
                            <li className='border p-6 '  >
                                <div className='flex '>
                                    <img src={person} alt="no image" className='h-6 rounded-full '/>
                                    <div className='flex justify-between w-full'>
                                    <p className='text-lg font-bold mx-2'>{eachitem.name}</p>
                                    <RiAttachmentLine/>
                                    </div>  

                                </div>
                                <div className=' flex justify-between space-x-1 pl-8'>
                                    <p className='text-slate-500'>{eachitem.content}</p>
                                    <p className='text-slate-500'>{eachitem.time}</p>

                                </div>
                            </li>
                        ))}

                    </ul>
                    
                    }
                
            


                </div>



            </div>
            <div className={`${menu ? "col-span-6" : "col-span-8"} flex flex-col justify-center items-center h-full bg-slate-100`}>
                <HiOutlineMailOpen className='text-9xl text-slate-800' />
                <p className='text-slate-600 font-bold text-3xl' >Select Mail To Open</p>

            </div>

        </div>
    )
}
