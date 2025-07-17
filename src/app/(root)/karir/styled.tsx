import { styled, Box } from "@mui/material";

export const CareerIntro = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),
	textAlign: "center",
}));

export const CareerBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1.5),
	backgroundColor: theme.palette.grey[100],
	padding: theme.spacing(4),
	borderRadius: theme.spacing(2),
	boxShadow: theme.shadows[1],

	[theme.breakpoints.up("md")]: {
		padding: theme.spacing(6),
	},
}));
