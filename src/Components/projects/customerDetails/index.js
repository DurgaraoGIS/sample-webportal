import React from 'react'

export const CustomerDetails = () => {
  return (
    <div> <div class="p-5 mx-auto ">
    <h1 className='mb-3 text-2xl font-bold'>Customer Details</h1>
    <div class="grid grid-cols-1 md:grid-cols-12  ">
        <div className='md:col-span-3 border border-gray-300 rounded-md  '>
            <img class="mx-auto h-10 w-auto rounded-full w-16 h-16 object-cover mt-10" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1698733038~exp=1698733638~hmac=9b5291f1e3d2dd8b743a03eaf20898d0023fbff5234457872d6dd37771d9c4ad" alt="Your Company" />
            <h1 class="text-center font-bold mb-5"> Fredrick Adems</h1>
            <div class="p-5 ">
                <div class="mb-5  ">
                    <h2>Email</h2>
                    <h3 className="font-bold md:grid-cols-2">iamfred@imaze.infotech.io</h3>
                </div>

                <div class="mb-5">
                    <h2>Phone</h2>
                    <h3 class="font-bold">+12-123-1234</h3>
                </div>

                <div class="mb-5">
                    <h2>Location</h2>
                    <h3 class="font-bold">London,UK</h3>
                </div>

                <div class="mb-5">
                    <h2>Date of birth</h2>
                    <h3 class="font-bold">17/11/1993</h3>
                </div>

                <div class="mb-5">
                    <h2>Title</h2>
                    <h3 class="font-bold">Compliance Manager</h3>
                </div>

                <div class="mb-5">
                    <h2>Social</h2>
                    <i class="fa-brands   fa-facebook border border-2 rounded-full p-2 m-2" style={{ color: "#2d71e6" }}></i>
                    <i class="fa-brands   fa-twitter border border-2 rounded-full p-2 m-2 " style={{ color: "#33dae6" }}></i>
                    <i class="fa-brands fa-linkedin-in border border-2 rounded-full p-2 m-2" style={{ color: "#6595e6" }}></i>
                    <i class="fa-brands fa-pinterest-p border border-2 rounded-full p-2 m-2" style={{ color: "#d14747" }}></i>
                </div>

                <div class="flex space-x-4">
                    <button class="flex items-center border-2  rounded  p-2"><svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20 2H16.42L15.7 .59C15.6 .39 15.36 .26 15.13 .26H8.87c-.23 0-.46.13-.58.34L7.58 2H4C2.9 2 2 2.9 2 4v1c0 .55.45 1 1 1h1v15c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h1c.55 0 1-.45 1-1V4c0-1.1-.9-2-2-2zM9 19H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zM4 6v10h16V6H4z" />
                    </svg>
                        <span class="ml-2">  Delete</span>
                    </button>
                    <button class="flex items-center rounded p-2 bg-blue-500"> <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM7 11h10v2H7z" />
                    </svg>
                        <span class="ml-2">  Edit</span></button>
                </div>

            </div>


        </div>
        <div className='md:col-span-9 p-4 md:ml-4'>

            <h1 class="font-bold mb-3">Subscription</h1>

            <div class="grid grid-cols-12 mb-3 border border-gray-300 rounded-md border-2 ">
                <div className='col-span-1 '>
                    <img class="mx-auto h-10 w-auto bg-green-200 rounded-full w-8 h-8 object-cover mt-10 mb-10" src="https://www.shutterstock.com/image-vector/vector-isolated-fire-emoji-260nw-1173468361.jpg" alt="Your Company" />
                </div>
                <div className='col-span-7 pt-3 pb-3'>
                    <span class="font-bold">Business board pro</span><button class="ml-2 bg-green-200 p-1 rounded-md">Active</button>
                    <h2>Billing monthly | Next payment on</h2>
                    <h2>12/10/2021  for <span class="font-bold"> $59.90</span></h2>
                </div>
                <div className='col-span-2'>
                    <button class="ml-2  p-1 rounded-md font-bold hover:bg-slate-600 mt-10 sm:grid-cols-2">Cancel plan</button>
                </div>
                <div className='col-span-2'>
                    <button class="ml-2  p-1 rounded-md  border-2 font-bold hover:bg-slate-600 mt-10 m">Update plan</button>
                </div>
            </div>

            <h1 class="font-bold mb-3">Payment History</h1>

        
            <div class="grid grid-cols-12  p-3  text-center rounded-md   ">
                <div class="col-span-2 border-b-2 font-bold bg-customBlue p-2" >REFERENCE <i class="fa-solid fa-sort"></i></div>
                <div class="col-span-4 border-b-2 font-bold bg-customBlue p-2">PRODUCT <i class="fa-solid fa-sort"></i></div>
                <div class="col-span-2 border-b-2 font-bold bg-customBlue p-2">STATUS <i class="fa-solid fa-sort"></i></div>
                <div class="col-span-2 border-b-2 font-bold bg-customBlue p-2">DATE <i class="fa-solid fa-sort"></i></div>
                <div class="col-span-2 border-b-2 font-bold bg-customBlue p-2">AMOUNT <i class="fa-solid fa-sort"></i></div>

                <div class="col-span-2 border-b-2 p-2 ">#36223 </div>
                <div class="col-span-4 border-b-2 p-2 ">Mock premium pack </div>
                <div class="col-span-2 border-b-2 p-2 ">pending </div>
                <div class="col-span-2 border-b-2 p-2 ">12/10/2021 </div>
                <div class="col-span-2 border-b-2 p-2 ">$39.90</div>

                <div class="col-span-2 border-b-2 p-2 ">#36223 </div>
                <div class="col-span-4 border-b-2 p-2 ">Business board pro subscription </div>
                <div class="col-span-2 border-b-2 p-2 ">paid </div>
                <div class="col-span-2 border-b-2 p-2 ">11/13/2021 </div>
                <div class="col-span-2 border-b-2 p-2 ">$59.90</div>

                <div class="col-span-2 border-b-2 p-2 ">#36223 </div>
                <div class="col-span-4 border-b-2 p-2 ">Business board pro subscription </div>
                <div class="col-span-2 border-b-2 p-2 ">paid </div>
                <div class="col-span-2 border-b-2 p-2 ">11/13/2021 </div>
                <div class="col-span-2 border-b-2 p-2 ">$59.90</div>

                <div class="col-span-2 border-b-2 p-2 ">#36223 </div>
                <div class="col-span-4 border-b-2 p-2 ">Business board pro subscription </div>
                <div class="col-span-2 border-b-2 p-2 ">paid </div>
                <div class="col-span-2 border-b-2 p-2 ">11/13/2021 </div>
                <div class="col-span-2 border-b-2 p-2 ">$59.90</div>


            </div>


            <h1 class="font-bold mb-3 mt-3">Payment Methods</h1>


            <div class="grid grid-cols-12    border border-gray-300 rounded-md border-2 ">
                <div className='col-span-1 '>
                    <img class="mx-auto h-10 w-auto bg-green-200 rounded-full w-8 h-8 object-cover mt-10 mb-10" src="https://cdn-icons-png.flaticon.com/512/217/217425.png" alt="Your Company" />
                </div>
                <div className='col-span-7 pt-3 pb-3 '>
                    <span class="font-bold">Frederick Adam  1234 5678</span><button class="ml-2 bg-green-200 p-1 rounded-md">Primary</button>
                    <h2>Expried Dec 2025</h2>

                </div>
                <div className='col-span-2'>
                    <button class="ml-2  p-1 rounded-md font-bold hover:bg-slate-600 mt-10 m">Delete</button>
                </div>
                <div className='col-span-2'>
                    <button class="ml-2  p-2 rounded-md  border-2 font-bold hover:bg-slate-600 mt-10 m">Edit</button>
                </div>
            </div>

            <div class="grid grid-cols-12 mb-3 border border-gray-300 rounded-md border-2 mt-1">
                <div className='col-span-1 '>
                    <img class="mx-auto h-10 w-auto bg-green-200 rounded-full w-8 h-8 object-cover mt-10 mb-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUSw9xJPszFbme7Bd_mX_nlwdb_AFL1xBUcyeNWLa1g&s" alt="Your Company" />
                </div>
                <div className='col-span-7 pt-3 pb-3'>
                    <span class="font-bold">Frederick Adam  1234 5678</span><button class="ml-2 bg-green-200 p-1 rounded-md">Primary</button>
                    <h2>Expried Jun 2025</h2>

                </div>
                <div className='col-span-2'>
                    <button class="ml-2  p-1 rounded-md font-bold hover:bg-slate-600 mt-10 m">Delete</button>
                </div>
                <div className='col-span-2'>
                    <button class="ml-2  p-2 rounded-md  border-2 font-bold hover:bg-slate-600 mt-10 m">Edit</button>
                </div>
            </div>

            <div class="grid grid-cols-12">
                <div className='col-span-4 mt-10 '>
                    <h1>Copy &copy; 2023 Elstar All rights reserved</h1>
                </div>
                <div className='col-span-4 '>

                </div>
                <div className='col-span-4 mt-10'>
                    <h1> Terms & Conditions | Privacy & Policy</h1>

                </div>

            </div>



        </div>


    </div>
</div>
</div>
  )
}
