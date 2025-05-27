import Link from "next/link";
import { Zap } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
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
      </div>
    </header>
  );
}
