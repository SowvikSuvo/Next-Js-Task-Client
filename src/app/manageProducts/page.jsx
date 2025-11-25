"use client";

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/components/AuthContext";
import PrivateRoute from "@/privateRoute/PrivateRoute";
import Swal from "sweetalert2";
import axios from "axios";

export default function ManageProducts() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://next-js-task-server.vercel.app/myProducts?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f59e0b",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://next-js-task-server.vercel.app/myProducts/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
            setProducts(products.filter((p) => p._id !== id));
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete product.", "error");
          });
      }
    });
  };

  return (
    <PrivateRoute>
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-amber-400 mb-8 text-center">
          Manage Products
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No products found.
          </p>
        ) : (
          <>
            {/* Desktop & Tablet Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full border border-gray-700 rounded-xl divide-y divide-gray-700 text-gray-200">
                <thead className="bg-gray-800 text-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium uppercase tracking-wider">
                      #
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium uppercase tracking-wider">
                      Image
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium uppercase tracking-wider">
                      Title
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium uppercase tracking-wider">
                      Category
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium uppercase tracking-wider">
                      Price
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium uppercase tracking-wider">
                      Stock
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {products.map((p, i) => (
                    <tr
                      key={p._id}
                      className="bg-gray-900 hover:bg-gray-800 transition-transform duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] 
                           transform hover:scale-[1.03] hover:shadow-lg cursor-pointer rounded-lg"
                    >
                      <td className="py-3 px-4">{i + 1}</td>
                      <td className="py-2 px-4">
                        <img
                          src={p.imageUrl}
                          alt={p.title}
                          className="w-16 h-16 object-cover rounded-lg border border-gray-700"
                        />
                      </td>
                      <td className="py-3 px-4 font-semibold text-amber-400">
                        {p.title}
                      </td>
                      <td className="py-3 px-4">{p.category}</td>
                      <td className="py-3 px-4 font-medium">${p.price}</td>
                      <td className="py-3 px-4">{p.stock}</td>
                      <td className="py-3 px-4 flex gap-2">
                        <button
                          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md text-sm transition-all duration-300 flex-1"
                          onClick={() =>
                            Swal.fire({
                              title: `<span class="text-amber-400 text-xl font-bold">${p.title}</span>`,
                              html: `
        <img src="${p.imageUrl}" class="w-full h-64 object-cover mx-auto mb-4 rounded-lg border border-gray-600"/>
        <p class="mb-2"><strong class="text-blue-400">Category:</strong> <span class="text-gray-200">${p.category}</span></p>
        <p class="mb-2"><strong class="text-green-400">Price:</strong> <span class="text-gray-200">$${p.price}</span></p>
        <p class="mb-2"><strong class="text-purple-400">Stock:</strong> <span class="text-gray-200">${p.stock}</span></p>
        <p class="mb-2"><strong class="text-pink-400">Description:</strong> <span class="text-gray-200">${p.fullDescription}</span></p>
      `,
                              width: 550,
                              background: "#1f2937",
                              color: "#fbbf24",
                              showCloseButton: true,
                              showConfirmButton: false,
                            })
                          }
                        >
                          View
                        </button>

                        <button
                          className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md text-sm transition-all duration-300"
                          onClick={() => handleDelete(p._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden grid gap-4">
              {products.map((p, i) => (
                <div
                  key={p._id}
                  className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform hover:scale-[1.02]"
                >
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-lg mb-3 border border-gray-700"
                  />
                  <h3 className="text-lg font-bold text-amber-400 mb-1">
                    {i + 1}. {p.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-1">
                    <strong>Category:</strong> {p.category}
                  </p>
                  <p className="text-gray-300 text-sm mb-1">
                    <strong>Price:</strong> ${p.price}
                  </p>
                  <p className="text-gray-300 text-sm mb-2">
                    <strong>Stock:</strong> {p.stock}
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md text-sm transition-all duration-300 flex-1"
                      onClick={() =>
                        Swal.fire({
                          title: `<span class="text-amber-400 text-xl font-bold">${p.title}</span>`,
                          html: `
        <img src="${p.imageUrl}" class="w-full h-64 object-cover mx-auto mb-4 rounded-lg border border-gray-600"/>
        <p class="mb-2"><strong class="text-blue-400">Category:</strong> <span class="text-gray-200">${p.category}</span></p>
        <p class="mb-2"><strong class="text-green-400">Price:</strong> <span class="text-gray-200">$${p.price}</span></p>
        <p class="mb-2"><strong class="text-purple-400">Stock:</strong> <span class="text-gray-200">${p.stock}</span></p>
        <p class="mb-2"><strong class="text-pink-400">Description:</strong> <span class="text-gray-200">${p.fullDescription}</span></p>
      `,
                          width: 550,
                          background: "#1f2937",
                          color: "#fbbf24",
                          showCloseButton: true,
                          showConfirmButton: false,
                        })
                      }
                    >
                      View
                    </button>

                    <button
                      className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md text-sm transition-all duration-300 flex-1"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </PrivateRoute>
  );
}
