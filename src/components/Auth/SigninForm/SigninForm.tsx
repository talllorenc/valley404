"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import { ISignin } from "@/types/auth";
import Input from "@/components/UI/Input";
import { FaEnvelope, FaUnlock } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import ButtonSubmit from "@/components/UI/ButtonSubmit";

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
		</div>
	);
};

export default SigninForm;
