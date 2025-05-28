import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import {
  DeleteUserButton,
  PlaceholderButton,
} from "@/components/admin/delete-user-button";

const AdminDashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/auth/login");

  if (session.user.role !== "ADMIN") redirect("/");

  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div>
      <h1>Admin Dashboard</h1>
      Olá! {session.user.role}
      <h3>Aqui tem todos os usuários:</h3>
      {users.map((user, i) => {

        if (user.id === session.user.id) return null

        return (
          <div
            className="p-2 flex gap-4 mt-4 bg-slate-300 rounded w-1/2"
            key={i}
          >
            <div> {user.name}</div>
            <div> {user.role}</div>
            <div> {user.email}</div>
            <div>
              {user.role === "USER" ? (
                <DeleteUserButton userId={user.id} />
              ) : (
                <PlaceholderButton />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminDashboard;
