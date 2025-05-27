"use client";

import type React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import AuthButtons from "./Auth-buttons";

export const RegisterForm = () => {
  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.target as HTMLFormElement);

    const name = String(formData.get("name"));
    if (!name) return toast.error("Please enter your name");

    const email = String(formData.get("email"));
    if (!email) return toast.error("Please enter a email");

    const password = String(formData.get("password"));
    if (!password) return toast.error("Please enter a password");

    const repeatPassword = String(formData.get("confirmPassword"));
    if (!repeatPassword || repeatPassword !== password)
      return toast.error("Passwords doesn't match.");

    await signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onRequest: () => {},
        onResponse: () => {},
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("User Registered Successfuly");
          redirect("/");
        },
      }
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Criar Conta
          </CardTitle>
          <CardDescription className="text-center">
            Crie sua conta para começar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Registro Social */}
          <AuthButtons signUp provider="github" />
          <AuthButtons signUp provider="google" />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Ou registre-se com
              </span>
            </div>
          </div>

          {/* Registro com Email */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="Name">Nome</Label>
              <Input id="Name" name="name" placeholder="João Silva" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                Aceito os{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  termos de uso
                </Link>{" "}
                e{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  política de privacidade
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Criar Conta
            </Button>
          </form>

          <div className="text-center text-sm">
            Já tem uma conta?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Fazer login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
