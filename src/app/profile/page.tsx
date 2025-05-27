import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    console.error("No session Found, redirecting to login...");
    return redirect("/auth/login");
  }

  return (
    <div>
      <SignOutButton/>
      <h1>Perfil</h1>
      <h2>Nome</h2>
    </div>
  );
}
