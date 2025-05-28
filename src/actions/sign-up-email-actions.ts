"use server";

import { auth, ErrorCode } from "@/lib/auth";
import { APIError } from "better-auth/api";

export async function SignUpEmailActions(formData: FormData) {
  const name = String(formData.get("name"));
  if (!name) return { error: "Please enter your name" };

  const email = String(formData.get("email"));
  if (!email) return { error: "Please enter a email" };

  const password = String(formData.get("password"));
  if (!password) return { error: "Please enter a password" };

  const repeatPassword = String(formData.get("confirmPassword"));
  if (!repeatPassword || repeatPassword !== password)
    return { error: "Passwords doesn't match." };

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN";

      switch (errCode) {
        default:
          return { error: err.message };
      }
    }
  }

  return { error: "Internal Server Error" };
}
