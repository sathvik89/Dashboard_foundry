"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen px-4 flex items-center justify-center 
                 bg-[url('./public/background/bg.png')] bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="absolute inset-0 bg-[rgba(215,196,163,0.25)] z-0" />

      <div className="relative z-10 bg-[#F5EBDD]/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-md text-center border border-[#D7C4A3] transition-all duration-300">
        <div className="flex justify-center mb-6">
          <div className="text-6xl animate-bounce-slow text-[#8B6B4A]">🍕</div>
        </div>

        <h1 className="text-3xl font-serif font-extrabold text-[#3e2723bf] mb-2">
          Welcome to PizzaHub
        </h1>

        <p className="text-[#7B5E3C] mb-6 text-sm">
          Sign in to manage your pizza business
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center cursor-pointer hover:scale-105 justify-center gap-3 w-full 
                     bg-[#A67B5B] text-[#F9F1E7] py-3 rounded-xl text-sm font-semibold 
                     hover:bg-[#C19A6B] active:scale-95 active:shadow-inner 
                     transition-transform duration-150 shadow-md"
        >
          <span className="text-xl">@</span>
          Continue with Google
        </button>

        <p className="text-xs text-[#7B5E3C] mt-6">
          By signing in, you agree to our{" "}
          <a href="#" className="underline text-[#6F4E37] hover:text-[#A67B5B]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-[#6F4E37] hover:text-[#A67B5B]">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
