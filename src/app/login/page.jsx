"use client";

import Link from "next/link";
import { Card, CardHeader, CardContent as CardBody, Input, Button, Label, Form } from "@heroui/react";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import Logo from "@/components/Logo";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";


const LoginPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const { data: signInData, error: signInError } = await authClient.signIn.email({
                email: data.email,
                password: data.password,
            });

            if (signInError) {
                toast.error(signInError.message || "Login failed. Please try again.");
                console.error(signInError);
            } else {
                toast.success("Login successful!");
                router.push("/");
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
            console.error(err);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const { data, error } = await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });

            if (error) {
                toast.error("Google login failed");
                console.log(error);
            } else {
                toast.success("Login successful!");
                router.push("/");
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
            console.error(err);
        }
    };

    return (
        <div className="mx-auto flex items-center justify-center min-h-screen px-4">
            <Card className="w-full max-w-md border border-black bg-black/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(236,72,153,0.15)] rounded-3xl p-6">
                <CardHeader className="flex flex-col gap-2 items-center pb-8 text-center">
                    <Logo />
                    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>
                </CardHeader>

                <CardBody className="gap-5">
                    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
                        <Label htmlFor="email" className="text-slate-300 font-medium">
                            Email Address
                        </Label>

                        <Input
                            {...register("email", { required: "Email is required" })}
                            id="email"
                            placeholder="john@example.com"
                            type="email"
                            labelPlacement="outside"
                            startContent={<FaEnvelope className="text-slate-400 text-sm" />}
                            className="w-full"
                            classNames={{
                                inputWrapper:
                                    "bg-slate-900/60 border border-white/10 hover:border-pink-500/60 focus-within:border-pink-500 h-12 rounded-xl",
                            }}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message}
                        />

                        <Label htmlFor="password" className="text-slate-300 font-medium">
                            Password
                        </Label>

                        <Input
                            {...register("password", { required: "Password is required" })}
                            id="password"
                            placeholder="••••••••"
                            type="password"
                            labelPlacement="outside"
                            startContent={<FaLock className="text-slate-400 text-sm" />}
                            className="w-full"
                            classNames={{
                                inputWrapper:
                                    "bg-slate-900/60 border border-white/10 hover:border-pink-500/60 focus-within:border-pink-500 h-12 rounded-xl",
                            }}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-bold h-12 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            Sign In
                        </Button>
                    </Form>

                    <div className="flex items-center my-5">
                        <div className="flex-grow border-t border-white/10" />
                        <span className="mx-4 text-xs text-slate-500 font-semibold uppercase tracking-widest">
                            Or Login With
                        </span>
                        <div className="flex-grow border-t border-white/10" />
                    </div>

                    <Button
                        onClick={handleGoogleLogin}
                        variant="bordered"
                        className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-500/40 text-white font-bold text-sm h-12 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <FaGoogle className="text-cyan-200" size={18} />
                        Login with Google
                    </Button>

                    <p className="text-center text-sm text-slate-400 mt-6">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="text-pink-500 hover:text-pink-400 font-semibold transition-colors"
                        >
                            Sign Up
                        </Link>
                    </p>
                </CardBody>
            </Card>
        </div>
    );
};

export default LoginPage;