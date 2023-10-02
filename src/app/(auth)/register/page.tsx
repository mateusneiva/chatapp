import React from "react";
import Link from "next/link";
import { Metadata } from "next";

import { RegisterForm } from "@/components/RegisterForm";
import { ToggleThemeMenu } from "@/components/ToggleThemeMenu";

export const metadata: Metadata = {
  title: "Create an account | ChatApp",
  description: "Generated by create next app",
};

export default function Register() {
  return (
    <div className="flex flex-col h-screen">
      <header className="fixed w-full h-16 flex justify-end items-center p-16">
        <ToggleThemeMenu />
      </header>

      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[400px]">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="font-bold text-3xl">Create an account</h2>

            <div className="text-gray-600 text-sm font-base dark:text-gray-300">
              By creating an account, you agree to our&nbsp;
              <Link
                href="/terms"
                className="underline text-black font-bold dark:text-white"
              >
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link
                href="/privacy"
                className="underline text-black font-bold dark:text-white"
              >
                Privacy Policy
              </Link>
              .
            </div>
          </div>

          <RegisterForm />

          <div className="flex justify-center text-sm font-medium gap-1 mt-8">
            <p>Already have an account?</p>

            <Link
              href="/login"
              className="underline text-black font-bold dark:text-white"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
