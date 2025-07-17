"use client";

import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { FooterContainer, FooterWrapper } from "./styled";
import Link from "next/link";
import {
	Facebook,
	Twitter,
	Instagram,
	YouTube,
	LinkedIn,
} from "@mui/icons-material";

export const Footer: React.FC = () => {
	const theme = useTheme();
	return (
		<FooterWrapper>
			<FooterContainer>
				<Box display="flex" flexDirection="column" alignItems="center" gap={2}>
					<Typography
						variant="h5"
						fontFamily={"Geist"}
						fontWeight={700}
						color="text.primary"
					>
						PT. PMG
					</Typography>

					<Typography
						fontSize={14}
						color="text.secondary"
						textAlign="center"
						maxWidth={500}
					>
						PT. PMG adalah perusahaan yang menyediakan layanan dan solusi
						teknologi. Kami berdedikasi untuk memberikan inovasi dan pelayanan
						terbaik kepada klien kami.
					</Typography>

					<Box display="flex" justifyContent="center" gap={1.5}>
						<IconButton
							size="small"
							sx={{
								color: "primary.main",
								border: "1px solid",
								borderColor: "primary.main",
							}}
						>
							<Facebook fontSize="small" />
						</IconButton>
						<IconButton
							size="small"
							sx={{
								color: "primary.main",
								border: "1px solid",
								borderColor: "primary.main",
							}}
						>
							<Twitter fontSize="small" />
						</IconButton>
						<IconButton
							size="small"
							sx={{
								color: "primary.main",
								border: "1px solid",
								borderColor: "primary.main",
							}}
						>
							<Instagram fontSize="small" />
						</IconButton>
						<IconButton
							size="small"
							sx={{
								color: "primary.main",
								border: "1px solid",
								borderColor: "primary.main",
							}}
						>
							<YouTube fontSize="small" />
						</IconButton>
						<IconButton
							size="small"
							sx={{
								color: "primary.main",
								border: "1px solid",
								borderColor: "primary.main",
							}}
						>
							<LinkedIn fontSize="small" />
						</IconButton>
					</Box>

					<Box display="flex" justifyContent="center" gap={3} mt={1}>
						<Link href="/">
							<Typography
								fontSize={14}
								sx={{
									color: theme.palette.text.primary,
									transition: "200ms",
									":hover": {
										color: theme.palette.primary.main,
										transition: "200ms",
									},
								}}
							>
								Beranda
							</Typography>
						</Link>
						<Link href="/tentang-kami">
							<Typography
								fontSize={14}
								sx={{
									color: theme.palette.text.primary,
									transition: "200ms",
									":hover": {
										color: theme.palette.primary.main,
										transition: "200ms",
									},
								}}
							>
								Tentang Kami
							</Typography>
						</Link>
						<Link href="/karir">
							<Typography
								fontSize={14}
								sx={{
									color: theme.palette.text.primary,
									transition: "200ms",
									":hover": {
										color: theme.palette.primary.main,
										transition: "200ms",
									},
								}}
							>
								Karir
							</Typography>
						</Link>
					</Box>
				</Box>
			</FooterContainer>
			<Box
				bgcolor={"#1a1a1a"}
				sx={{
					width: "100%",
					padding: "12px",
				}}
			>
				<Typography
					fontSize={12}
					sx={{
						color: theme.palette.text.disabled,
					}}
				>
					© {new Date().getFullYear()} PT. PMG. All rights reserved.
				</Typography>
			</Box>
		</FooterWrapper>
	);
};
