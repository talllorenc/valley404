"use client";

import { LiaCookieBiteSolid } from "react-icons/lia";
import ButtonSubmit from "@/components/UI/ButtonSubmit";
import { useEffect, useState } from "react";
import { Button } from "../tl-ui/button";

const CookiePanel = () => {
	const [isCookieAllowed, setIsCookieAllowed] = useState(false);

	const allowCookieHandler = () => {
		setIsCookieAllowed(false);
		localStorage.setItem("userAllowToUseCookie", "yes");
	};

	useEffect(() => {
		const cookieStatus = localStorage.getItem("userAllowToUseCookie");
		if (!cookieStatus) {
			setIsCookieAllowed(true);
		}
	}, []);

	if (!isCookieAllowed) {
		return;
	}

	return (
		<div className="fixed bottom-4 right-0 w-full mx-auto px-4 z-50">
			<div className="mx-auto max-w-4xl w-full border border-dark/50 dark:border-light/50 bg-dark dark:bg-light text-light dark:text-dark flex flex-col md:flex-row items-center text-center md:text-left gap-4 p-2 rounded-xl">
				<LiaCookieBiteSolid className="text-5xl flex-shrink-0 hidden md:flex" />

				<div className="text-md">
					<p className="font-bold">This website uses cookies</p>
					<p className="">
						By proceeding, you agree to the use of cookies for improving site
						performance and analytics. If you do not consent, please exit the
						site
					</p>
				</div>

				<Button onClick={allowCookieHandler}>Accept</Button>
			</div>
		</div>
	);
};

export default CookiePanel;
