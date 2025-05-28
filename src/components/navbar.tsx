"use client";
import Link from "next/link";
import { Zap } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { useSession } from "@/lib/auth-client";
import { SignOutButton } from "./auth/sign-out-button";

const Btn = ({session} : {session: unknown }) => {
  if (!session) {
    return (
      <>
        <Link
          href={"/auth/login"}
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Login
        </Link>
        <Link
          href={"/auth/register"}
          className={buttonVariants({ size: "sm" })}
        >
          Registrar
        </Link>
      </>
    );
  } else {
    return <SignOutButton />;
  }
};

export default function Navbar() {
  const { data: session } = useSession();


  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <Zap className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold">MinhaApp</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#recursos"
        >
          Recursos
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#sobre"
        >
          Sobre
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contato"
        >
          Contato
        </Link>
      </nav>
      <div className="ml-4 flex gap-2">
      <Btn session={session} />
      </div>
    </header>
  );
}
