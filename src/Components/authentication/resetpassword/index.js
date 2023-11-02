import React from 'react'

export const Resetpassword = () => {
  return (
    <div> <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F3F4F6] h-screen">
    <div class="container">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-5">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto rounded-full w-16 h-16 object-cover mt-10" src="https://media.licdn.com/dms/image/C4D0BAQEskr8W_uXZkg/company-logo_100_100/0/1602694549618?e=2147483647&v=beta&t=7s4tDpP17Y54qifbYFcqX-iuGCUIHK0ydRZQvcNZkdM" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Set new password</h2>
            <p class="text-xs text-center text-custom-red ">Your new password must different to previous password</p>
          </div>
        
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2">
                 <input type="password" id="password" name="password" placeholder="Enter your password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              </div>
        
              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                  </div>
                <div class="mt-2">
                  <input type="password" id="password" name="password" placeholder="Enter your confirm password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              </div>
        
              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
              </div>
            </form>
        
            <p class="mt-10 text-center text-sm text-gray-500 ">
            Back to
              <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in </a>
            </p>
            
            
          </div>
    </div>
</div>
  </div></div>
  )
}
