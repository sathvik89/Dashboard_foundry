"use client";

import { signIn, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push("/");
      }
    });
  }, [router]);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen px-6 py-12 flex items-center justify-center
                 bg-[url('/background/bg.png')] bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black/25 sm:bg-black/30 z-0" />
      <div className="absolute inset-0 bg-[rgba(215,196,163,0.25)] z-0" />

      <div
        className="relative z-10 bg-[#F5EBDD]/95 backdrop-blur-md rounded-3xl shadow-2xl
                   p-6 sm:p-10 max-w-md w-full
                   text-center border border-[#D7C4A3]
                   transition-all duration-300
                   flex flex-col items-center"
      >
        <div className="text-6xl sm:text-7xl animate-bounce-slow text-[#8B6B4A] mb-6">
          🍕
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#3e2723bf] mb-3">
          Welcome to PizzaHub
        </h1>

        <p className="text-[#7B5E3C] mb-8 text-sm sm:text-base max-w-xs sm:max-w-none">
          Sign in to manage your pizza business
        </p>

        <button
          onClick={handleSignIn}
          disabled={isLoading}
          className="flex items-center justify-center gap-3 w-full
                     bg-[#A67B5B] text-[#F9F1E7] py-3 sm:py-4 rounded-xl
                     text-sm sm:text-base font-semibold
                     hover:bg-[#C19A6B] active:scale-95 active:shadow-inner
                     transition-transform duration-150 shadow-md
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <span className="text-xl sm:text-2xl">@</span>
          )}
          {isLoading ? "Signing in..." : "Continue with Google"}
        </button>

        <p className="text-xs sm:text-sm text-[#7B5E3C] mt-8 max-w-xs sm:max-w-none leading-snug">
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
