import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BiMenuAltRight } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';
import { BiBell } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { VscStarHalf } from 'react-icons/vsc';
import { AiOutlineProject } from 'react-icons/ai';
import { MdAccountBalance } from 'react-icons/md';
import { SiAuth0 } from 'react-icons/si';
import { BsGraphUpArrow } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, Route, Routes } from 'react-router-dom';
import { Dashboard } from './projects/dashboard';
import {Customer} from './projects/customer';
import {CustomerDetails} from './projects/customerDetails'
import {Mail} from './projects/mail';
import {Invoice} from './account/invoice';
import {Settings} from './account/settings';
import {Kycform } from './account/kycform';
import {Signin} from './authentication/signin'
import {Signup} from './authentication/signup'
import {Forgotpassword} from './authentication/forgotpassword'
import {Resetpassword} from './authentication/resetpassword';
import {Productlist} from './sales/productlist';
import {Productedit} from './sales/productedit';
import {Newproduct} from './sales/newproduct';

 


export default function Sidebar({item}) {
    const[open,setOpen] = useState(false)
    const[submenuopen,setSubmenuopen] = useState(false)
    const setData = () =>{
        setOpen(!open)
    }
    const menus = [
        {
            title:'Projects',
            // path:'/projects',
            icon:<AiOutlineProject/>,
            submenu:true,
            submenuItems:[

                {
                    title:'Dashboard',
                    path:'/',

                },
                {
                    title:'Customer',
                    path:'/projects/customer',

                },
                {
                    title:'Customer Details',
                    path:'/projects/customerdetails',

                },
                { 
                    title:'Mail',
                    path:'/projects/mail',
                },
            ]

        },
        {
            title:'Account',
            // path:'/account',
            submenu:true,
            icon:<MdAccountBalance/>,
            submenuItems:[
                {
                    title:'Settings',
                    path:'account/settings'

                },
                {
                    title:'Invoice',
                    path:'account/invoice'
                },
                {
                    title:'KYC Form',
                    path:'account/kyc'
                },
                
            ]

        },
        {
            title:'Sales',
            icon:<BsGraphUpArrow/>,
            submenu:true,
            submenuItems:[
                {
                    title:'Product List',
                    path:'sales/productlist'
                },
                {
                    title:'Product Edit',
                    path:'sales/productedit'
                },
                {
                    title:'New Product',
                    path:'sales/newproduct'
                }
            ]

        },

        {
            title:'Authentication',
            icon:<SiAuth0/>,
            submenu:true,
            submenuItems:[
                {
                    title:'Signin',
                    path:'authentication/signin'
                },
                {
                    title:'Signup',
                    path:'authentication/signup'
                },
                {
                    title:'Forgot Password',
                    path:'authentication/forgotpassword'
                },
                {
                    title:'Reset Password',
                    path:'authentication/resetpassword'
                },
            ]
        }
    ]

  return (
    <div className='flex h-screen'>
        <div className={`bg-gray-100 text-2xl h-screen border p-2 pt-4  ${open ?'w-65': "w-14"}  `}>
            <div className='inline-flex '>
                <VscStarHalf className='  text-4xl'/>
                <p className={`ml-3 mt-1 ${!open && "scale-0"}`}>elstar</p>
            </div>
           <div className='flex'>
            <ul className='pt-4'>
               {
                menus.map((menu,index)=>(
                    <>
                    <li key={index} className={`flex items-center gap-x-5 text-lg p-2   ${open&& "hover:bg-gray-300"}`} >
                        <span>
                            {menu.icon}
                        </span>
                        <span className={`${!open && "scale-0"}`}>{menu.title}</span>
                        {
                            menu.submenu && (
                                <IoIosArrowDown className={`${!open && "scale-0"}`} onClick={()=>setSubmenuopen(!submenuopen)}/>
                            )
                        }
                    </li>
                    {
                        menu.submenu && submenuopen &&(
                            <ul>
                                {menu.submenuItems.map((submenuItem,index)=>(
                                    <li key={index} className={`${open && "hover:bg-gray-200"} flex items-center gap-x-4 px-12 text-sm p-2  `}>
                                        <p className={`${!open && "scale-0"}`}><Link to={submenuItem.path} >{submenuItem.title}</Link></p>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                    </>
                ))
               }
            </ul>
           </div>
        </div>
        <div className='   w-full '>
            <div className='border bg-gray-100 w-full fixed  -mt-6  '>
            <div className='flex  pt-4 m-6'>
            <button onClick={setData}>
            {  
               open ? <BiMenu className='text-4xl mt-1' /> : <BiMenuAltRight className='text-3xl mt-2 '/>
            }
            </button>
                <div className=' flex justify-between w-full'>
                    <div>
                        <GoSearch className='text-2xl ml-4 mt-3'/>
                    </div>
                    <div className='flex space-x-5 mt-2 mr-16'>
                        <BiBell className='text-2xl'/>
                        <FiSettings  className='text-2xl'/>
                        <FaUserCircle  className='text-2xl'/>
                        <p className={`hidden md:block ${open && "scale-0"}`}>Admin Carolin Perkins</p>
                    </div>
                </div><hr/>
            </div>
            </div>
            <div className=' pt-20 '>
            <Routes>
            {/* <Route path="/" exact element={<Projects />} /> */}
                <Route path="/" exact element={<Dashboard />} />
                    <Route path='/projects/customer' exact  element={<Customer/>}/>
                    <Route path='/projects/customerdetails' exact  element={<CustomerDetails/>}/>
                    <Route path='/projects/mail' exact  element={<Mail/>}/>
                    <Route path='/account/settings' exact element={<Settings/>}/>
                    <Route path='/account/invoice' exact element={<Invoice/>}/>
                    <Route path='/account/kyc' exact element={<Kycform/>}/>
                    <Route path='/authentication/signin' element={<Signin/>}/>
                    <Route path='authentication/signup' element={<Signup/>}/>
                    <Route path='authentication/forgotpassword'  element={<Forgotpassword/>}/>
                    <Route path='authentication/resetpassword' element={<Resetpassword/>}/>
                    <Route path='/sales/productedit' element={<Productedit/>}/>
                    <Route path='/sales/productlist' element={<Productlist/>}/>
                    <Route path='/sales/newproduct' element={<Newproduct/>}/>
                </Routes>
                <>
                    <footer>
                        <p className='p-4'>Copyright @ 2023 <b>Elstar</b> All rights reserved</p>
                    </footer>
                </>
             </div>
        </div>
    </div>
  )
}
