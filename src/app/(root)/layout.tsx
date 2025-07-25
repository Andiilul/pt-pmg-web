import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/constant/theme";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // opsional, sesuaikan dengan kebutuhanmu
});

export const metadata: Metadata = {
	title: "PT PMG",
	description: "Website PT PMG",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${poppins.variable}`}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
			>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
