"use client";

import { Button } from "../ui/button";
import { signIn } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";

interface SignInOauthButtonProps {
  provider: "google" | "github";
  signUp?: boolean;
}

export default function AuthButtons({
  provider,
  signUp,
}: SignInOauthButtonProps) {
  const [isPending, setIsPending] = useState(false);

  async function handleClick() {
    setIsPending(true);
    await signIn.social({
      provider,
      callbackURL: "/profile",
      errorCallbackURL: "/auth/login/error",
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    });

    setIsPending(false);
  }

  const action = signUp ? "Up" : "In";
  const providerName = provider === "google" ? "Google" : "Github";

  return (
    <div className="space-y-3">
      <Button variant={"outline"} className="w-full" onClick={handleClick}>
        {isPending ? (
          "Loading"
        ) : (
          <>
            Sign {action} with {providerName}
          </>
        )}
      </Button>
    </div>
  );
}
