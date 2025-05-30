import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import OrdersPageA from "./OrdersPageA";

export default async function OrdersPage() {
  const response = await getServerSession(authOptions);

  if (!response) {
    redirect("/login");
  }

  return <OrdersPageA />;
}
