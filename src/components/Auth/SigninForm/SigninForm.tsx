"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import { ISignin } from "@/types/auth";
import Input from "@/components/UI/Input";
import { FaEnvelope, FaUnlock } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import ButtonSubmit from "@/components/UI/ButtonSubmit";
import Link from "next/link";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string().required("Password is required"),
});

const SigninForm = () => {
	const { values, handleChange, touched, handleBlur, handleSubmit, errors } =
		useFormik<ISignin>({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema,
			onSubmit: async (values) => {
				console.log(values);
			},
		});

	return (
		<div className="flex flex-col gap-4 border border-dark/50 dark:border-light/50 p-4 rounded-xl">
			<div className="flex flex-col items-center justify-center text-center">
				<p className="text-lg font-bold">Sign in to Valley404</p>
				<p className="text-dark/50 dark:text-light/50">
					Welcome back! Please sign in to continue
				</p>
			</div>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<Input
					id="email"
					label="Email Address"
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
					isDisabled={false}
				/>
			</form>

			<div className="flex items-center justify-center py-2">
				<span className="text-center">
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
