"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { APIError } from "better-auth/api";

export async function SignInEmailActions(formData: FormData) {
  const email = String(formData.get("email"));
  if (!email) return { error: "Please enter a email" };

  const password = String(formData.get("password"));
  if (!password) return { error: "Please enter a password" };

  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email,
        password,
      },
    });

    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      return { error: err.message };
    }
  }

  return { error: "Internal Server Error" };
}
