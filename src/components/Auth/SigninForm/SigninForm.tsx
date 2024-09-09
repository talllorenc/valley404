"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import { ISignin } from "@/types/auth";
import Input from "@/components/UI/Input";
import { FaEnvelope, FaUnlock } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import ButtonSubmit from "@/components/UI/ButtonSubmit";
import Link from "next/link";
import { useState } from "react";
import FormErrors from "@/components/Auth/FormErrors/FormErrors";
import { useMutation } from "@tanstack/react-query";
import { signin } from "@/services/auth.service";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string().required("Password is required"),
});

const SigninForm = () => {
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
	const [serverError, setServerError] = useState<string | null>(null);

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
		<div className="flex flex-col gap-4 p-4 rounded-xl dark:bg-dark/40 bg-light/40 backdrop-blur-2xl">
			<div className="flex flex-col items-center justify-center text-center">
				<p className="text-lg font-bold">Sign in to Valley404</p>
				<p className="text-dark/50 dark:text-light/50">
					Welcome back! Please sign in to continue
				</p>
			</div>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<Input
					id="email"
					label="Email address"
					type="email"
					placeholder="address@gmail.com"
					icon={<FaEnvelope />}
					error={errors.email}
					touched={touched.email}
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				<Input
					id="password"
					label="Password"
					type="password"
					placeholder="*********"
					icon={<FaUnlock />}
					error={errors.password}
					touched={touched.password}
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				<ButtonSubmit
					text="Sign in"
					icon={<IoMdArrowDropright />}
					isDisabled={isPending}
				/>
			</form>

			{serverError && <FormErrors message={serverError} />}

			<div className="flex items-center justify-center py-2">
				<span className="text-center text-dark/50 dark:text-light/50">
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
