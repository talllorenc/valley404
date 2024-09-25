"use client";

import VerifyCodeBar from "@/components/Auth/VerifyCodeBar/VerifyCodeBar";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { checkToken } from "@/services/auth.service";
import Spinner from "@/components/UI/Spinner";
import HomeButton from "../tl-ui/HomeButton";

const VerifyEmailPageContent = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const searchParams = useSearchParams();
	const router = useRouter();
	const token = searchParams.get("token");

	const { mutate } = useMutation({
		mutationFn: checkToken,
		onSuccess: () => {
			setLoading(false);
		},
		onError: () => {
			router.replace("/");
		},
	});

	useEffect(() => {
		if (!token) {
			router.replace("/");
			return;
		}

		mutate(token);
	}, [token, mutate, router]);

	if (loading) {
		return (
			<div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
				<Spinner width="100px" height="100px" />
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4 p-4">
			<h1 className="font-bold text-5xl text-center">Verify Email</h1>
			<p className="text-center text-dark/50 dark:text-light/50">
				Enter the code sent to your email. It is valid for 1 hour. After it
				expires, please log in again to request a new one
			</p>
			<VerifyCodeBar />
			<HomeButton />
		</div>
	);
};

const VerifyEmailPage = () => {
	return (
		<Suspense fallback={<Spinner width="100px" height="100px" />}>
			<VerifyEmailPageContent />
		</Suspense>
	);
};

export default VerifyEmailPage;
