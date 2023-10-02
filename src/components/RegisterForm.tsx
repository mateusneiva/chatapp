"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

import { InputText } from "./InputText";
import { Button } from "./Button";
import { Spinner } from "./Spinner";

const registerUserFormSchema = z
  .object({
    name: z.string().nonempty("The username field is required to register."),
    email: z
      .string()
      .nonempty("The email field is required to register.")
      .email("Invalid email.")
      .toLowerCase(),
    password: z
      .string()
      .nonempty("The password field is required to register.")
      .min(5, "The password needs at least 8 characters."),
    confirmPassword: z.string().nonempty("You need to confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

type LoginUserFormData = z.infer<typeof registerUserFormSchema>;

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);

  const router = useRouter();
  const session = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
  });

  async function onSubmit(data: LoginUserFormData) {
    try {
      setIsLoading(true);

      await axios.post("/api/register", data);

      signIn("credentials", data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session?.status, router]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div>
          <InputText
            label="Email"
            placeholder="name@example.com"
            required={true}
            disabled={isLoading || isGoogleLoading || isGithubLoading}
            {...register("email")}
          />

          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <InputText
            label="Name"
            required={true}
            placeholder="John doe"
            disabled={isLoading || isGoogleLoading || isGithubLoading}
            {...register("name")}
          />

          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div>
          <InputText
            type="password"
            label="Password"
            required={true}
            placeholder="••••••••"
            disabled={isLoading || isGoogleLoading || isGithubLoading}
            {...register("password")}
          />

          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div>
          <InputText
            type="password"
            required={true}
            placeholder="••••••••"
            label="Confirm Password"
            disabled={isLoading || isGoogleLoading || isGithubLoading}
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading || isGoogleLoading || isGithubLoading}
        >
          {isLoading && <Spinner />}Create account
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t dark:border-slate-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white text-gray-600 px-2 dark:bg-slate-900 dark:text-gray-300">
            Or
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button
          type="button"
          variant="outline"
          disabled={isLoading || isGoogleLoading || isGithubLoading}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google");
          }}
        >
          {isGoogleLoading ? (
            <Spinner variant="secondary" />
          ) : (
            <FcGoogle size={20} />
          )}
          Continue with Google
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={isLoading || isGoogleLoading || isGithubLoading}
          onClick={() => {
            setIsGithubLoading(true);
            signIn("github");
          }}
        >
          {isGithubLoading ? (
            <Spinner variant="secondary" />
          ) : (
            <IoLogoGithub size={20} />
          )}
          Continue with Github
        </Button>
      </div>
    </form>
  );
}
