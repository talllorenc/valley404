import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import { ThemeProviderWrapper } from "@/providers/ThemeProviderWrapper";
import QueryClientWrapper from "@/providers/QueryClientWrapper";

const plexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["italic", "normal"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={plexMono.className}>
				<ThemeProviderWrapper>
					<QueryClientWrapper>{children}</QueryClientWrapper>
				</ThemeProviderWrapper>
			</body>
		</html>
	);
}
