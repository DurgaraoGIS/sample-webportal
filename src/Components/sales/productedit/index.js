import React from 'react'
import { BsTypeBold } from 'react-icons/bs'
import { FiItalic } from 'react-icons/fi'
import { AiOutlineUnderline } from 'react-icons/ai'
import { FaLink } from 'react-icons/fa'
import { BsListOl } from 'react-icons/bs'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BiText } from 'react-icons/bi'
import { TiArrowUnsorted } from 'react-icons/ti'
import watch1 from '../../../assets/watch1.jpg'
import watch2 from '../../../assets/watch2.jpg'
import watch3 from '../../../assets/watch3.webp'
import watch4 from '../../../assets/watch4.jfif'


export const Productedit = () => {
  return (
    <div className='h-full'>
            <div className='p-10 '>
                <div>
                    <h1 className='text-3xl font-bold'>Edit Product</h1>

                </div>
                <div className='  h-screen grid grid-cols-12 space-x-4'>
                    <div className=' h-full col-span-12 md:col-span-8 py-5'>
                        <h1 className='text-xl font-bold'>Basic Information</h1>
                        <p className='text-slate-500 mt-1'>Section to config basic product information</p>
                        <br />
                        <div className='my-4'>
                            <h1 className='text-slate-500 font-bold'>Product Name</h1>
                            <input type="text" className='w-full border border-slate-400 rounded p-2 my-2' placeholder='Luminaire Giotto Headphones' />
                        </div>
                        <div className='my-4'>
                            <h1 className='text-slate-500 font-bold'>Code   </h1>
                            <input type="text" className='w-full border border-slate-400 rounded p-2 my-2' placeholder='BIS-012' />
                        </div>
                        <div className='my-4'>
                            <h1 className='text-slate-500 font-bold'>Description</h1>
                            <div className='border border-slate-400 rounded p-1 my-3'>
                                <div className='flex space-x-5'>
                                    <div className='flex'>
                                        <select className='appearance-none h-8 p-1' id="selectid">
                                            <option>Normal</option>
                                            <option>Normal</option>
                                            <option>normal</option>


                                        </select>
                                        <label htmlFor='selectid' className='mt-2 ml-5'><TiArrowUnsorted /></label>

                                    </div>
                                    <div className='flex space-x-2  mt-2'>
                                        <BsTypeBold />
                                        <FiItalic />
                                        <AiOutlineUnderline />
                                        <FaLink />

                                    </div>
                                    <div className='flex space-x-2 mt-2'>
                                        <BsListOl />
                                        <AiOutlineUnorderedList />


                                    </div>
                                    <div className='flex space-x-2 mt-2'>
                                        <BiText />
                                    </div>

                                </div>
                                <hr />
                                <div className='p-5'>
                                    <p>   Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little.
                                    </p>

                                    <ul className='list-disc m-4 pl-4'>
                                        <li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li>
                                        <li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li>
                                        <li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li>
                                    </ul>



                                </div>

                            </div>
                        </div>
                        <hr className='my-10' />
                        <h1 className='text-xl font-bold'>Pricing</h1>
                        <p className='text-slate-500 mt-1'>Section to config product sales information</p>
                        <div className='my-5 flex flex-wrap'>
                            <div className="sm:w-full md:w-2/4 pr-3">
                                <label htmlFor="amount" className='text-slate-500 font-bold'>SKU</label>
                                <div className="border rounded p-3 flex space-x-3 my-3">

                                    <input className="w-full" type="number" id="amount" name="amount" placeholder='Stock' />
                                </div>
                            </div>
                            <div className="sm:w-full md:w-2/4 pr-3">
                                <label htmlFor="amount" className='text-slate-500 font-bold'>Price</label>
                                <div className="border rounded p-3 flex space-x-3 my-3">
                                    <span className="dollar-symbol font-bold">$</span>
                                    <input className="w-full" type="number" id="amount" name="amount" placeholder='Price' />
                                </div>
                            </div>
                            <div className="sm:w-full md:w-2/4 pr-3">
                                <label htmlFor="amount" className='text-slate-500 font-bold'>Bulk Discount Price</label>
                                <div className="border rounded p-3 flex space-x-3 my-3">
                                    <span className="dollar-symbol font-bold">$</span>
                                    <input className="w-full" type="number" id="amount" name="amount" placeholder='Bulk Discount Price' />
                                </div>
                            </div>
                            <div className="sm:w-full md:w-2/4 pr-3">
                                <label htmlFor="amount" className='text-slate-500 font-bold'>Tax Rate(%)</label>
                                <div className="border rounded p-3 flex space-x-3 my-3">

                                    <input className="w-full" type="number" id="amount" name="amount" placeholder='6' />
                                </div>
                            </div>

                        </div>
                        <h1 className='text-xl font-bold'>Organizations</h1>
                        <p className='text-slate-500 mt-1'>Section to config the product attribute</p>
                        <div className='my-5 flex flex-wrap'>
                            <div className="sm:w-full md:w-2/4 pr-3">
                                <label htmlFor="amount" className='text-slate-500 font-bold'>Category</label>
                                <div className="border rounded p-3 flex space-x-3 my-3">

                                    <input className="w-full" type="number" id="amount" name="amount" placeholder='Stock' />
                                </div>
                            </div>
                            <div className="sm:w-full md:w-2/4 pr-3">
                                <label htmlFor="amount" className='text-slate-500 font-bold'>Tags</label>
                                <div className="border rounded p-3 flex space-x-3 my-3">
                                    <span className="dollar-symbol font-bold">$</span>
                                    <input className="w-full" type="number" id="amount" name="amount" placeholder='Price' />
                                </div>
                            </div>
                            <div className="sm:w-full md:w-2/4 pr-3">
                                <label htmlFor="amount" className='text-slate-500 font-bold'>Brand</label>
                                <div className="border rounded p-3 flex space-x-3 my-3">
                                    <span className="dollar-symbol font-bold">$</span>
                                    <input className="w-full" type="number" id="amount" name="amount" placeholder='Bulk Discount Price' />
                                </div>
                            </div>
                            <div className="sm:w-full md:w-2/4 pr-3">
                                <label htmlFor="amount" className='text-slate-500 font-bold'>Vendor</label>
                                <div className="border rounded p-3 flex space-x-3 my-3">

                                    <input className="w-full" type="number" id="amount" name="amount" placeholder='6' />
                                </div>
                            </div>

                        </div>





                    </div>
                    <div className=' h-screen col-span-12 md:col-span-4'>
                        <h1 className='text-3xl font-bold'>Product Image</h1>
                        <p className=' text-xl text-slate-500 mt-1'>Add or change image for the product</p>
                        <div className=' my-5 grid grid-cols-3 '>
                            <div className='border p-2 mr-3 mt-3'>
                                <img src={watch1} className='h-32 '/>

                            </div>
                            <div className='border p-2 mr-3 mt-3'>
                                <img src={watch2} className='h-32'/>

                            </div>
                            <div className='border p-2 mr-3 mt-3'>
                                <img src={watch3} className='h-32'/>

                            </div>
                            <div className='border p-2 mr-3 mt-3'>
                                <img src={watch4} className='h-32'/>

                            </div>
                            <div className='border border-dashed p-2 mr-3 mt-3'>
                                <img src={watch4} className='h-32'/>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    
  )
}
