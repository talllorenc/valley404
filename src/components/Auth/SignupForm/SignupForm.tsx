"use client";

import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ISignup } from "@/types/auth";
import { IoMdArrowDropright } from "react-icons/io";
import FormErrors from "@/components/Auth/FormErrors/FormErrors";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { Button } from "@/components/tl-ui/button";
import { Input } from "@/components/tl-ui/input";
import { Label } from "@/components/tl-ui/label";

const loginRules = /^[A-Za-z0-9]+$/;
const passwordRules = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;

const validationSchema = Yup.object({
	name: Yup.string()
		.min(4, "Min 4 characters")
		.required("Name is required")
		.matches(loginRules, { message: "Only latin characters" }),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Min 6 characters")
		.matches(passwordRules, {
			message:
				"Password must contain at least one uppercase letter and one special character",
		})
		.required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), undefined], "Passwords don't match")
		.required("Confirm password is required"),
});

const SignupForm = () => {
	const router = useRouter();
	const [serverError, setServerError] = useState<string | null>(null);

	const { mutate, isPending } = useMutation({
		mutationFn: signup,
		onSuccess: (data) => {
			setServerError(null);
			router.replace(`/verify-email?token=${data.token}`);
		},
		onError: (error: any) => {
			setServerError(
				error.response?.data?.message ||
					"Something went wrong. Please try again.",
			);
		},
	});

	const {
		values,
		handleChange,
		touched,
		handleBlur,
		handleSubmit,
		errors,
		resetForm,
	} = useFormik<ISignup>({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
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
				<p className="text-5xl font-bold uppercase text-black dark:text-white">Sign up</p>
				<p className="text-black/50 dark:text-white/50">
					Welcome! Please sign up to continue
				</p>
			</div>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-1">
					<Label htmlFor="name" className="font-medium text-black dark:text-white">
						Name
					</Label>
					<Input
						id="name"
						type="text"
						placeholder="name"
						className="bg-[#ffffff]/50 dark:bg-[#131316]/50"
						error={errors.name}
						touched={touched.name}
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label htmlFor="email" className="font-medium text-black dark:text-white">
						Email
					</Label>
					<Input
						id="email"
						type="text"
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
						placeholder="******"
						className="bg-[#ffffff]/50 dark:bg-[#131316]/50"
						error={errors.password}
						touched={touched.password}
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label htmlFor="confirmPassword" className="font-medium text-black dark:text-white">
						Confirm password
					</Label>
					<Input
						id="confirmPassword"
						type="password"
						placeholder="******"
						className="bg-[#ffffff]/50 dark:bg-[#131316]/50"
						error={errors.confirmPassword}
						touched={touched.confirmPassword}
						value={values.confirmPassword}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>

				<Button disabled={isPending} type="submit">
					Sign up
					<IoMdArrowDropright className="ml-2" />
				</Button>
			</form>

			{serverError && <FormErrors message={serverError} />}

			<div className="flex items-center justify-center py-2">
				<span className="text-center text-black/50 dark:text-white/50">
					Already have an account?
					<Link
						href="/sign-in"
						className="font-medium ml-2 hover:underline text-black dark:text-white">
						Sign in
					</Link>
				</span>
			</div>
		</div>
	);
};

export default SignupForm;
