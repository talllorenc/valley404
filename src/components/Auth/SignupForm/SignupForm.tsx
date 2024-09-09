"use client";

import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ISignup } from "@/types/auth";
import { FaEnvelope, FaLock, FaUnlock, FaUser } from "react-icons/fa";
import Input from "@/components/UI/Input";
import ButtonSubmit from "@/components/UI/ButtonSubmit";
import { IoMdArrowDropright } from "react-icons/io";
import FormErrors from "@/components/Auth/FormErrors/FormErrors";
import { useState } from "react";
import FormSuccess from "@/components/Auth/FormSuccess/FormSuccess";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/services/auth.service";
import { useRouter } from "next/navigation";

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
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	const { mutate, isPending } = useMutation({
		mutationFn: signup,
		onSuccess: () => {
			setServerError(null);
			setSuccessMessage(
				"Registration successful. Please check your email to verify your account.",
			);
			resetForm();
			setTimeout(() => {
				router.push("/sign-in");
			}, 4000);
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
		<div className="flex flex-col gap-4 p-4 rounded-xl dark:bg-dark/40 bg-light/40 backdrop-blur-2xl">
			<div className="flex flex-col items-center justify-center text-center">
				<p className="text-lg font-bold">Sign up to Valley404</p>
				<p className="text-dark/50 dark:text-light/50">
					Welcome! Please sign up to continue
				</p>
			</div>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<Input
					id="name"
					label="Name"
					type="text"
					placeholder="name"
					icon={<FaUser />}
					error={errors.name}
					touched={touched.name}
					value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
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
					placeholder="******"
					icon={<FaUnlock />}
					error={errors.password}
					touched={touched.password}
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<Input
					id="confirmPassword"
					label="Confirm password"
					type="password"
					placeholder="******"
					icon={<FaLock />}
					error={errors.confirmPassword}
					touched={touched.confirmPassword}
					value={values.confirmPassword}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				<ButtonSubmit
					text="Sign up"
					icon={<IoMdArrowDropright />}
					isDisabled={isPending}
				/>
			</form>

			{serverError && <FormErrors message={serverError} />}
			{successMessage && <FormSuccess message={successMessage} />}

			<div className="flex items-center justify-center py-2">
				<span className="text-center text-dark/50 dark:text-light/50">
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
