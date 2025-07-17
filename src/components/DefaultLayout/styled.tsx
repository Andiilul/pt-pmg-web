"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LayoutWrapper = styled(Box)(({ }) => ({
	display: "flex",
	paddingLeft: "16px",
	paddingRight: "16px",
	justifyContent:"center",
	//Laptop
	["@media (min-width: 1024px)"]: {
		paddingLeft: "64px",
		paddingRight: "64px",
	},
	//Tablet
	["@media (min-width: 768px)"]: {
		paddingLeft: "32px",
		paddingRight: "32px",
	},
}));

export const LayoutContainer = styled(Box)(({ }) => ({
	flex: "1",
	maxWidth: "1280px",
	width: "100%",
}));
