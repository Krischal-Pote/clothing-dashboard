"use client";
import { signIn } from "next-auth/react";

export default function LoginPageClient() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[#FFFFFF] overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#993333] opacity-20 rounded-full filter blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#993333] opacity-20 rounded-full filter blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 sm:p-10 w-11/12 max-w-sm text-center">
        <div className="flex justify-center mb-4">
          <div className=" w-16 h-16 flex items-center justify-center">
            <img src="/logo.jfif" alt="logo" />
          </div>
        </div>

        <h1 className="text-[#333333] text-xl font-semibold mb-1">
          Welcome Back
        </h1>
        <p className="text-sm text-[#993333] mb-6">
          Continue with Google to access your account
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full border border-[#FFCCCC] text-[#333333] py-2 rounded-md flex items-center justify-center gap-2 hover:bg-[#FFCCCC]/30 transition"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.5 20H24V28.5H35.5C34 34 29 38 24 38C17.5 38 12 32.5 12 26C12 19.5 17.5 14 24 14C27 14 29.5 15 31.5 16.5L36.5 11.5C33 8.5 28.5 6.5 24 6.5C13 6.5 4.5 15 4.5 26C4.5 37 13 45.5 24 45.5C34 45.5 44.5 36 44.5 26C44.5 24.5 44.5 22.5 44.5 20Z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>

        <p className="text-xs text-[#993333] mt-6">
          By continuing, you agree to our <br />
          <a href="#" className="underline hover:text-[#333333]">
            Terms of Service
          </a>{" "}
          &amp;{" "}
          <a href="#" className="underline hover:text-[#333333]">
            Privacy Policy
          </a>
        </p>
      </div>
    </main>
  );
}
