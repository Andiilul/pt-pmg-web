"use client";

import { createTheme } from "@mui/material";

// Tema statis untuk mode light
const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#dc8630", // Warm, smooth orange (turunan dari kuning)
			light: "#f7c491", // Lighter peach
			dark: "#c67c2d", // Deep orange-brown
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#19647e", // Soft navy blue
			light: "#5ca9c6", // Light teal-blue (hover/focus)
			dark: "#0c3c4e", // Deep navy (active)
			contrastText: "#ffffff", // White text
		},
		background: {
			default: "#f9f9f9",
			paper: "#ffffff",
		},
		text: {
			primary: "#000000",
			secondary: "#4f5b62",
			disabled: "#9e9e9e",
		},
		common: {
			black: "#000000",
			white: "#ffffff",
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				fontFamily: "Poppins",
			},
		},
	},
});

export default theme;
