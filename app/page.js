import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
// import { FaSmileWink } from "react-icons";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Extract user details
  const { name, email, image } = session.user;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-md w-full space-y-6">
        <div className="text-5xl text-green-400 mx-auto">
          {/* <FaSmileWink /> */}
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {name}!</h1>
        <p className="text-gray-600">You're successfully logged in. 🎉</p>
        {/* Display Profile Image */}
        <img
          src={image}
          alt="Profile Picture"
          className="w-20 h-20 rounded-full mx-auto mt-4"
        />
      </div>
    </main>
  );
}
