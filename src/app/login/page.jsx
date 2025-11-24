"use client";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      Swal.fire({
        title: "Oops!",
        text: "Please enter email and password",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome back, ${user.displayName || "User"}`,
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          router.push("/"); // Redirect to Home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Google Login Successful!",
          text: `Welcome back, ${user.displayName || "User"}`,
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          router.push("/"); // Redirect to Home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 to-amber-500 p-4 sm:p-6">
      <div className="bg-white shadow-xl p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>

          {/* Google Sign In Button styled like Register page */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 mt-4 w-full border py-2 sm:py-2.5 rounded-lg font-semibold  transition  border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 bg-white hover:bg-gray-100 text-gray-700 hover:text-black"
          >
            <FcGoogle size={22} /> Sign in with Google
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link href="/register" className="text-amber-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
