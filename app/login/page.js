"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen px-4 flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-100">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="text-5xl">🍕</div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to PizzaHub
        </h1>

        <p className="text-gray-600 mb-6">
          Sign in to manage your pizza business
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center cursor-pointer justify-center gap-3 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg text-sm font-medium shadow hover:from-orange-600 hover:to-red-600 transition"
        >
          <span className="text-xl">＠</span> Continue with Google
        </button>

        <p className="text-xs text-gray-400 mt-6">
          By signing in, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
