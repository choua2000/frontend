"use client"
import React from "react";
import { useState } from "react";
import { API_URL } from "@/app/constant/server";
import axios from "axios";
const Login = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
  
    })
    const [error, setError] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${API_URL}/api/login`, formData);
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
      } catch (err: any) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email" 
              value= {formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter your email..."
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password" 
              name="password"
              value={formData.password}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter your password..."
            />
          </div>
          <div className="mt-7">
            <button type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >Login</button>
          </div>
          <div className="mt-4n flex justify-between">
            <div>
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="/auth/forgot-password" className="text-sm text-blue-500 hover:text-blue-600">Forgot Password?</a>
          </div>
          <div>
            <p className="text-10 mt-4">
              Don't have an account?
              <a href="/auth/signup" className="text-blue-500 hover:text-blue-600 underline"> SignUp</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
