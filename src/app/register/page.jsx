"use client";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/AuthContext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";

export default function Register1Page() {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  // ===========================
  // Email/Password Registration
  // ===========================
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // ✅ Modular SDK: update displayName & photo
      await updateProfile(user, { displayName: name, photoURL: photoURL });

      // ✅ SweetAlert2 success
      await Swal.fire({
        title: "Registered Successfully!",
        text: `Welcome, ${name}`,
        icon: "success",
        confirmButtonText: "Go to Home",
      });

      router.push("/"); // Redirect to Home
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // ===========================
  // Google Sign-in
  // ===========================
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      await Swal.fire({
        title: "Logged in Successfully!",
        text: `Welcome, ${user.displayName || "User"}`,
        icon: "success",
        confirmButtonText: "Go to Home",
      });

      router.push("/"); // Redirect to Home
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 to-amber-500 p-4 sm:p-6">
      <div className="bg-white shadow-xl p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-600 mb-6">
          Register Page
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="font-medium block text-black mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-500 focus:text-black"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="font-medium block text-black mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-500 focus:text-black"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label className="font-medium block  text-black mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-500 focus:text-black"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="font-medium block text-black mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-500 focus:text-black"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 sm:py-2.5 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 mt-4 w-full border py-2 sm:py-2.5 rounded-lg font-semibold  transition  border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 bg-white hover:bg-gray-100 text-gray-700 hover:text-black"
        >
          <FcGoogle size={22} /> Sign in with Google
        </button>

        <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
          Already have an account?{" "}
          <Link href="/login" className="text-amber-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
