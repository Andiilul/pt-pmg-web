"use client";

import { styled, Box } from "@mui/material";

export const HeroWrapper = styled(Box)(() => ({
	width: "100%",
	backgroundImage: "url('/images/hero.jpg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	padding: "16px",
	minHeight: "480px",

	position: "relative",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "#fff",
	textAlign: "center",
	"&::after": {
		content: '""',
		position: "absolute",
		inset: 0,
		backgroundColor: "rgba(0,0,0,0.6)",
		zIndex: 1,
	},
	//Laptop
	["@media (min-width: 1024px)"]: {
		height: "100vh",
	},
	//Tablet
	["@media (min-width: 768px)"]: {
		padding: "32px",
		minHeight: "600px",
	},
}));

export const HeroContent = styled(Box)(() => ({
	position: "relative",
	zIndex: 2,
	maxWidth: "800px",
	padding: "0 16px",
	display: "flex",
	flexDirection: "column",
	gap: "12px",
	textAlign: "center",

	// Tablet
	["@media (min-width: 768px)"]: {
		padding: "0 24px",
		gap: "16px",
	},

	// Laptop / Desktop
	["@media (min-width: 1024px)"]: {
		padding: "0 32px",
		gap: "20px",
	},
}));
