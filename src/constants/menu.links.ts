import { IMenuLinks } from "@/types/menu.types";

export const menuLinks: IMenuLinks[] = [
	{
		id: 1,
		title: "About",
		path: "/about",
	},
	{
		id: 2,
		title: "Contact",
		path: "/contact",
	},
	{
		id: 3,
		title: "Keymap",
		path: "/keymap",
	},
];

export const menuUserLinks: IMenuLinks[] = [
	{
		id: 1,
		title: "Profile",
		path: "/user",
	},
	{
		id: 2,
		title: "Settings",
		path: "/user/settings",
	},
	{
		id: 3,
		title: "Dashboard",
		path: "/user/dashboard",
	},
];
