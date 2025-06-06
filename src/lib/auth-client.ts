import { createAuthClient } from "better-auth/react";
import { adminClient, inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "@/lib/auth";
import { ac, roles } from "@/lib/permissions";

const URL = process.env.NEXT_PUBLIC_URL;

export const authClient = createAuthClient({
  baseURL: URL,
  plugins: [inferAdditionalFields<typeof auth>(), adminClient({ ac, roles })],
});

export type Session = typeof authClient.$Infer.Session;
