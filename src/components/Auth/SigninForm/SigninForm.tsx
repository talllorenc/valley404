"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import { ISignin } from "@/types/auth";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import FormErrors from "@/components/Auth/FormErrors/FormErrors";
import { useMutation } from "@tanstack/react-query";
import { signin } from "@/services/auth.service";
import { Button } from "@/components/tl-ui/button";
import { Input } from "@/components/tl-ui/input";
import { Label } from "@/components/tl-ui/label";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string().required("Password is required"),
});

const SigninForm = () => {
	const [serverError, setServerError] = useState<string | null>(null);

	const { mutate, isPending } = useMutation({
		mutationFn: signin,
		onSuccess: () => {
			setServerError(null);
			window.location.href = "/";
		},
		onError: (error: any) => {
			setServerError(
				error.response?.data?.message ||
					"Something went wrong. Please try again.",
			);
		},
	});

	const { values, handleChange, touched, handleBlur, handleSubmit, errors } =
		useFormik<ISignin>({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema,
			onSubmit: async (values) => {
				setServerError(null);
				mutate(values);
			},
		});

	return (
		<div className="flex flex-col gap-4 rounded-xl">
			<div className="flex flex-col items-center justify-center text-center">
				<p className="text-5xl font-bold uppercase text-black dark:text-white">Sign in</p>
				<p className="text-black/50 dark:text-white/50">
					Welcome back! Please sign in to continue
				</p>
			</div>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-1">
					<Label htmlFor="email" className="font-medium text-black dark:text-white">
						Email
					</Label>
					<Input
						id="email"
						type="email"
						placeholder="address@gmail.com"
						className="bg-[#ffffff]/50 dark:bg-[#131316]/50"
						error={errors.email}
						touched={touched.email}
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>

				<div className="flex flex-col gap-1">
					<Label htmlFor="password" className="font-medium text-black dark:text-white">
						Password
					</Label>
					<Input
						id="password"
						type="password"
						placeholder="*********"
						className="bg-[#ffffff]/50 dark:bg-[#131316]/50"
						error={errors.password}
						touched={touched.password}
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>

				<Button disabled={isPending} type="submit">
					Sign in
					<IoMdArrowDropright className="ml-2" />
				</Button>
			</form>

			{serverError && <FormErrors message={serverError} />}

			<div className="flex items-center justify-center py-2">
				<span className="text-center text-black/50 dark:text-white/50">
					Don’t have an account?
					<Link
						href="/sign-up"
						className="font-medium ml-2 hover:underline text-black dark:text-white">
						Sign up
					</Link>
				</span>
			</div>
		</div>
	);
};

export default SigninForm;
