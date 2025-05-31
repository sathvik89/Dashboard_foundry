import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import RecentOrders from "./components/RecentOrders";
import Footer from "./components/Footer";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex flex-col align-middle  items-center justify-center bg-[url('/background/bg2.png')] bg-cover bg-center bg-no-repeat px-4 py-10">
      <div className="bg-[#F3E5AB] shadow-2xl border border-[#D7CCC8] rounded-3xl p-10 max-w-2xl w-full space-y-10 text-center">
        <div className="text-6xl text-[#6D4C41] animate-bounce">☕</div>

        <h1 className="text-3xl font-bold text-[#3E2723]">
          Welcome, {session.user.name}!
        </h1>

        <p className="text-[#5D4037] text-base">
          You're logged in! Grab your brew and review recent orders. 🍕
          <br />
          <br />
          <span>A Unique Coffee-Themed Pizza Hub</span>
        </p>

        <RecentOrders />
      </div>
      <Footer />
    </main>
  );
}
