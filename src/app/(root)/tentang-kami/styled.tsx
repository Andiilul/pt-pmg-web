import { Box, styled } from "@mui/material";

export const HeroSection = styled(Box)(({}) => ({
	width: "100%",
	height: 300,
	position: "relative",
	backgroundImage: "url('/images/hero.jpg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	"& .overlay": {
		width: "100%",
		height: "100%",
		background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

export const ContentSection = styled(Box)(({ theme }) => ({
	padding: theme.spacing(6, 0),
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(6),
}));

export const FlexRow = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(4),

	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
}));

export const InfoBox = styled(Box)(({  }) => ({
	flex: 1,
	minWidth: 0,
}));

export const AboutUsInfo = styled(Box)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "1fr",
	gap: theme.spacing(4),

	[theme.breakpoints.up("sm")]: {
		gridTemplateColumns: "1fr 1fr",
	},
}));

export const AboutUsBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1),
}));

export const MapContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: 400,
	borderRadius: theme.shape.borderRadius,
	overflow: "hidden",
	boxShadow: theme.shadows[3],
}));
