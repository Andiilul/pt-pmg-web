"use client";
import { styled, Box } from "@mui/material";

// Tambahkan tipe untuk prop scrolled
interface NavbarWrapperProps {
	scrolled: boolean;
}

export const NavbarWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== "scrolled", // agar tidak dilempar ke DOM
})<NavbarWrapperProps>(({ theme, scrolled }) => ({
	width: "100%",
	position: "fixed",
	top: 0,
	zIndex: 1000,
	display: "flex",
	justifyContent: "center",
	transition: "background-color 0.3s ease, box-shadow 0.3s ease",
	backgroundColor: scrolled ? theme.palette.background.paper : "transparent",
	boxShadow: scrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
	backdropFilter: scrolled ? "blur(6px)" : "none",

	padding: "12px 16px",
	["@media (min-width: 1024px)"]: {
		padding: "12px 64px",
	},
	["@media (min-width: 768px)"]: {
		padding: "12px 32px",
	},
}));

export const NavbarContainer = styled(Box)(({}) => ({
	width: "100%",
	display: "flex",
	maxWidth: "1280px",
	justifyContent: "space-between",
}));
