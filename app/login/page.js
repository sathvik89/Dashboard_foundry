"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen px-4 flex items-center justify-center 
                 bg-[url('./public/background/bg.png')] bg-cover bg-opacity-20 bg-center"
    >
      <div className="bg-[#FFF3E0] rounded-3xl shadow-xl p-8 sm:p-10 w-full max-w-md text-center border border-[#EFEBE9]">

        <div className="flex justify-center mb-6">
          <div className="text-6xl">🍕</div>
        </div>

        <h1 className="text-3xl font-bold text-[#4E342E] mb-2">
          Welcome to PizzaHub
        </h1>

        <p className="text-[#6D4C41] mb-6 text-sm">
          Sign in to manage your pizza business
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-3 w-full 
                     bg-[#1B5E20] text-white py-3 rounded-lg text-sm font-semibold 
                     hover:bg-[#2E7D32] transition cursor-pointer"
        >
          <span className="text-xl">＠</span>
          Continue with Google
        </button>

        <p className="text-xs text-[#5D4037] mt-6">
          By signing in, you agree to our{" "}
          <a href="#" className="underline text-[#4E342E] hover:text-[#1B5E20]">
            Terms of Service
          </a>
          and
          <a href="#" className="underline text-[#4E342E] hover:text-[#1B5E20]">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
