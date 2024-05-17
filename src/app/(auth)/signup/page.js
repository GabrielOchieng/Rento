"use client";
import { useState, useEffect } from "react";

import backgroundImg from "../../../../public/assets/images/backgroundImg.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRegisterMutation } from "@/redux/slices/usersApiSlice";
import { setCredentials } from "@/redux/slices/AuthSlice";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // Assuming you have default selection
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      // router.push("/login");
    }
  }, [router, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({
          name,
          email,
          password,
          role,
          phoneNumber,
        });
        dispatch(setCredentials({ ...res }));

        toast.success("User created successfully");
        router.push("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        console.log(err);
      }
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="role" className="text-sm font-medium mb-1">
              User Type
            </label>
            {/* Implement user type selection based on your UI framework (dropdown, radio buttons, etc.) */}
            <select
              id="role"
              name="role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select User Type</option>
              <option value="Landlord">Landlord</option>
              <option value="Tenant">Tenant</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm font-medium mb-1">
              Phone number
            </label>

            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              autoComplete="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          {isLoading && <h2>Loading...</h2>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
