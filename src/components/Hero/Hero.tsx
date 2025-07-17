"use client";

import React from "react";
import {
	Typography,
	Button,
	Container,
	Box,
	useMediaQuery,
} from "@mui/material";
import { HeroWrapper, HeroContent } from "./styled";

const Hero = () => {
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	return (
		<HeroWrapper>
			<Container maxWidth="md">
				<HeroContent>
					<Typography
						variant="h3"
						gutterBottom
						fontFamily="Geist"
						sx={{
							fontSize: large ? "3rem" : medium ? "2.4rem" : "2rem",
							fontWeight: 700,
						}}
					>
						Selamat Datang di{" "}
						<Typography
							variant="h3"
							component="span"
							color="primary"
							sx={{
								fontSize: large ? "3rem" : medium ? "2.4rem" : "2rem",
								fontWeight: 700,
							}}
						>
							PT. PMG
						</Typography>
					</Typography>

					<Typography
						variant="h6"
						gutterBottom
						sx={{
							fontSize: large ? "1.2rem" : medium ? "1.1rem" : "1rem",
							color: "#ccc",
						}}
					>
						Konsultan pengembangan SDM & penyalur tenaga kerja terpercaya
					</Typography>

					<Box
						display="flex"
						gap="12px"
						justifyContent="center"
						flexWrap="wrap"
						mt={2}
					>
						<Button
							variant="outlined"
							color="primary"
							href="/tentang-kami"
							sx={{
								textTransform: "none",
								padding: "12px 16px",
								fontSize: medium ? "16px" : "14px",
								fontWeight: 600,
								fontFamily: "Geist",
							}}
						>
							Tentang Kami
						</Button>
						<Button
						href="/karir"
							variant="contained"
							color="primary"
							sx={{
								textTransform: "none",
								padding: "12px 16px",
								fontSize: medium ? "16px" : "14px",
								fontWeight: 600,
								fontFamily: "Geist",
							}}
						>
							Lihat Lowongan
						</Button>
					</Box>
				</HeroContent>
			</Container>
		</HeroWrapper>
	);
};

export default Hero;
