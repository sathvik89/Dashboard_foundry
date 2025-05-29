import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { FaSmileWink } from "react-icons/fa";

export default async function Home() {
  const response = await getServerSession(authOptions);

  if (!response) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#A98467] px-4 py-8">
      <div className="bg-[#FFF3E0] shadow-xl border border-[#EFEBE9] rounded-3xl p-10 text-center max-w-md w-full space-y-6 transform transition-all hover:scale-[1.01] duration-300 ease-in-out">
        <div className="text-6xl text-green-600 mx-auto animate-bounce">
          <FaSmileWink />
        </div>

        <h1 className="text-3xl sm:text-2xl font-bold text-[#4E342E] leading-tight">
          Welcome, {response.user.name}!
        </h1>

        <p className="text-[#6D4C41] text-sm sm:text-base leading-relaxed">
          You're successfully logged in. 🎉 Let's make something awesome today.
        </p>
      </div>
    </main>
  );
}
