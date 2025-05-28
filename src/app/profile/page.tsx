import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <SignOutButton />
      {session.user.role === "ADMIN" && (
        <Button variant={"outline"} asChild>
          <Link href={"/admin/dashboard"}>Admin Area</Link>
        </Button>
      )}
      <h1>Perfil</h1>

      <h2>
        Olá! {session.user.name}, seu cargo atual é de: {session.user.role}
      </h2>

    </div>
  );
}
