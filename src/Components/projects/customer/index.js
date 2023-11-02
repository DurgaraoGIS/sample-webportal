import React from "react";

import { FaUsers } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export const Customer = () => {
  return (
    <div>
      <p className="customer">Customers</p>
      <div class="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div class="bg-white shadow-md rounded-lg p-6 card m-1">
          <div class="flex items-center">
            <FaUsers size={40} className="icon1" />
            <div class="ml-4">
              <p class="text-sm">Total Customers Details</p>
              <h5 class="text-lg font-bold">1234</h5>
            </div>
            <div
              className="percentege1"
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                margin: "2px",
              }}
            >
              <div>↑</div>
              <div>23.24%</div>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 card m-1">
          <div class="flex items-center">
            <FaUsers size={40} className="icon2" />
            <div class="ml-4">
              <p class="text-sm">Total Customers</p>
              <h5 class="text-lg font-bold">1234</h5>
            </div>
            <div
              className="percentege1"
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                margin: "2px",
              }}
            >
              <div>↑</div>
              <div>23.24%</div>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 card m-1">
          <div class="flex items-center">
            <FaUsers size={40} className="icon3" />
            <div class="ml-4">
              <p class="text-sm">Total Customers</p>
              <h5 class="text-lg font-bold">1234</h5>
            </div>
            <div
              className="percentege2"
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                margin: "2px",
              }}
            >
              <div>↓</div>
              <div>-3.24%</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table class="min-w-full divide-y divide-gray-200 m-4">
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>Name</div>
                  <div>
                    <span>
                      <FaSort />
                    </span>
                  </div>
                </div>
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>Email</div>
                  <div>
                    <span>
                      <FaSort />
                    </span>
                  </div>
                </div>
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>Status</div>
                  <div>
                    <span>
                      <FaSort />
                    </span>
                  </div>
                </div>
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>Last Online</div>
                  <div>
                    <span>
                      <FaSort />
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <div className="rowdata">
                  <FaUserCircle className="icon" size={24} />
                  <span>Carolyn Perkins</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <li style={{ color: "red" }}>
                  <span style={{ color: "black" }}>Blocked</span>
                </li>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <div className="rowdata">
                  <FaUserCircle className="icon" size={24} />
                  <span>Carolyn Perkins</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <li style={{ color: "green" }}>
                  <span style={{ color: "black" }}>Active</span>
                </li>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <div className="rowdata">
                  <FaUserCircle className="icon" size={24} />
                  <span>Carolyn Perkins</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <li style={{ color: "green" }}>
                  <span style={{ color: "black" }}>Active</span>
                </li>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <div className="rowdata">
                  <FaUserCircle className="icon" size={24} />
                  <span>Carolyn Perkins</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <li style={{ color: "red" }}>
                  <span style={{ color: "black" }}>Blocked</span>
                </li>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <div className="rowdata">
                  <FaUserCircle className="icon" size={24} />
                  <span>Carolyn Perkins</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <li style={{ color: "red" }}>
                  <span style={{ color: "black" }}>Blocked</span>
                </li>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <div className="rowdata">
                  <FaUserCircle className="icon" size={24} />
                  <span>Carolyn Perkins</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <li style={{ color: "green" }}>
                  <span style={{ color: "black" }}>Active</span>
                </li>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <div className="rowdata">
                  <FaUserCircle className="icon" size={24} />
                  <span>Carolyn Perkins</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                <li style={{ color: "green" }}>
                  <span style={{ color: "black" }}>Active</span>
                </li>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b-2">
                carolyn_h@hotmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
