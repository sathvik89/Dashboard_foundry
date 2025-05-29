"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={() => signIn("google")}
        className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        @ Sign-in with Google
      </button>
    </div>
  );
}
