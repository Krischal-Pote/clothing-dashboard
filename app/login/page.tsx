"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login to Dashboard</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
