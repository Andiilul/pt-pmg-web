"use client";

import {
	alpha,
	Box,
	CardActionArea,
	Drawer,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Image from "next/image";
import { NavbarContainer, NavbarWrapper } from "./styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
	const menulist = [
		{ name: "Beranda", link: "/" },
		{ name: "Tentang Kami", link: "/tentang-kami" },
		{ name: "Karir", link: "/karir" },
	];

	const theme = useTheme();
	const pathname = usePathname();

	const [openDrawer, setOpenDrawer] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 64);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (medium && openDrawer) {
			setOpenDrawer(false);
		}
	}, [medium, openDrawer]);

	return (
		<NavbarWrapper scrolled={scrolled}>
			<Drawer
				open={openDrawer}
				anchor="right"
				onClose={() => setOpenDrawer(false)}
				PaperProps={{
					sx: {
						width: 250,
						padding: 2,
						backgroundColor: theme.palette.background.default,
					},
				}}
			>
				<Box display="flex" flexDirection="column" gap={1}>
					{menulist.map((menu, index) => {
						const isActive = pathname === menu.link;
						return (
							<CardActionArea
								key={index}
								href={menu.link}
								sx={{
									padding: "12px 6px",
									borderRadius: "4px",
									backgroundColor: isActive
										? alpha(theme.palette.primary.main, 1)
										: "",
									color: isActive ? "white" : theme.palette.text.primary,
								}}
							>
								<Typography>{menu.name}</Typography>
							</CardActionArea>
						);
					})}
				</Box>
			</Drawer>

			<NavbarContainer>
				<Box display="flex" gap="12px" alignItems="center">
					<Box
						sx={{
							width: "40px",
							height: "40px",
							borderRadius: "4px",
							position: "relative",
							display: "flex",
							overflow: "hidden",
						}}
					>
						<Image
							src="/images/PMG.png"
							alt="Logo PMG"
							fill
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
						/>
					</Box>
					<Typography
						fontSize="18px"
						fontWeight="bold"
						sx={{
							color: scrolled ? theme.palette.text.primary : "#fff",
							transition: "color 0.3s ease",
						}}
					>
						PT PMG
					</Typography>
				</Box>

				{large ? (
					<Box display="flex" gap="12px" alignItems="center">
						{menulist.map((menu, index) => {
							const isActive = pathname === menu.link;
							return (
								<Link key={index} href={menu.link} passHref>
									<Box padding="2px 6px">
										<Typography
											sx={{
												transition: "color 0.3s ease",
												color: isActive
													? theme.palette.primary.main
													: scrolled
													? theme.palette.text.secondary
													: "#fff",
												":hover": {
													color: theme.palette.primary.main,
												},
											}}
										>
											{menu.name}
										</Typography>
									</Box>
								</Link>
							);
						})}
					</Box>
				) : (
					<IconButton onClick={() => setOpenDrawer(true)}>
						<Menu
							sx={{ color: scrolled ? theme.palette.text.primary : "#fff" }}
						/>
					</IconButton>
				)}
			</NavbarContainer>
		</NavbarWrapper>
	);
};
