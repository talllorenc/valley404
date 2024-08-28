"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumbs: React.FC = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return null;
	}

	const pathSegments = pathname.split("/").filter((segment) => segment);

	return (
		<nav>
			<ul className="flex gap-2 items-center">
				<li>
					<Link href="/">Home</Link>
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
								<Link href={href} className={`${isLastSegment && "underline"}`}>
									{itemLink}
								</Link>
							</li>
							{pathSegments.length !== index + 1 && <FaAngleRight />}
						</div>
					);
				})}
			</ul>
		</nav>
	);
};

export default BreadCrumbs;
