import { createAuthClient } from "better-auth/react"

const URL = process.env.NEXT_PUBLIC_URL;

const authClient = createAuthClient({
    baseURL: URL,
});

export const {signIn, signUp, signOut, getSession} = authClient;

