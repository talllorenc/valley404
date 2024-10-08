"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const BreadCrumbs: React.FC = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return null;
	}

	const pathSegments = pathname.split("/").filter((segment) => segment);

	return (
		<div className="pb-4">
			<nav>
				<ul className="flex gap-2 items-center flex-wrap">
					<li>
						<Link href="/">
							<TiHome className="text-xl" />
						</Link>
					</li>
					{pathSegments.length > 0 && <FaAngleRight />}
					{pathSegments.map((segment, index) => {
						let href = `/${pathSegments.slice(0, index + 1).join("/")}`;
						const isLastSegment = index === pathSegments.length - 1;
						let itemLink =
							segment[0].toUpperCase() + segment.slice(1, segment.length);

						return (
							<div key={index} className="flex items-center gap-2">
								<li>
									<Link
										href={href}
										className={`${isLastSegment && "underline font-bold text-[#02d7f2]"} hover:text-[#02d7f2]`}>
										{itemLink}
									</Link>
								</li>
								{pathSegments.length !== index + 1 && <FaAngleRight />}
							</div>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default BreadCrumbs;
