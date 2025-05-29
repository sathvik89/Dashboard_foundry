import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const response = await getServerSession(authOptions); // check if user is logged in

  if (!response) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Hello, {response.user.name}! 👋
        </h1>
        <p className="text-gray-600">You're successfully logged in.</p>
      </div>
    </div>
  );
}
