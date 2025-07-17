"use client";

import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { ContentSection, HeroSection } from "../tentang-kami/styled";
import { DefaultLayout } from "@/components/DefaultLayout";

export default function KarirPage() {
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	const headingFontSize = large ? "32px" : medium ? "28px" : "24px";
	const textFontSize = medium ? "16px" : "14px";
	const boxPadding = large ? "40px" : medium ? "32px" : "24px";

	return (
		<>
			<HeroSection>
				<Box className="overlay">
					<Typography
						variant="h2"
						fontWeight="bold"
						color="white"
						textAlign="center"
						sx={{
							fontSize: large ? "48px" : medium ? "40px" : "32px",
						}}
					>
						Karier di PMG
					</Typography>
				</Box>
			</HeroSection>

			<DefaultLayout>
				<ContentSection>
					{/* Konten Utama */}
					<Box
						display="grid"
						gridTemplateColumns={large ? "1fr 1fr" : "1fr"}
						gap={medium ? 4 : 2}
					>
						{/* Box 1 */}
						<Box
							sx={{
								padding: boxPadding,
								backgroundColor: "rgba(255,255,255,0.95)",
								boxShadow: 1,
								borderRadius: 1,
								display: "flex",
								flexDirection: "column",
								gap: "12px",
							}}
						>
							<Typography
								fontSize={headingFontSize}
								fontWeight={600}
								color="primary"
							>
								Berkarir di PT PMG
							</Typography>
							<Typography fontSize={textFontSize} color="text.secondary">
								PT. PMG membuka berbagai lowongan pekerjaan untuk Anda yang
								ingin berkembang dan berkontribusi dalam dunia kerja
								profesional. Kami mencari individu yang berdedikasi, memiliki
								semangat tinggi, dan ingin menjadi bagian dari perubahan
								positif.
							</Typography>
						</Box>

						{/* Box 2 */}
						<Box
							sx={{
								padding: boxPadding,
								backgroundColor: "rgba(255,255,255,0.95)",
								boxShadow: 1,
								borderRadius: 1,
								display: "flex",
								flexDirection: "column",
								gap: "12px",
							}}
						>
							<Typography
								fontSize={headingFontSize}
								fontWeight={600}
								color="primary"
							>
								Kenapa Harus di PT PMG
							</Typography>
							<Typography fontSize={textFontSize} color="text.secondary">
								Kami percaya bahwa sumber daya manusia adalah aset terpenting
								perusahaan. Di PMG, Anda akan mendapatkan kesempatan untuk
								berkembang, dibina, dan ditempatkan di perusahaan mitra yang
								berkualitas. Jadilah bagian dari jaringan profesional yang solid
								bersama kami!
							</Typography>
						</Box>
					</Box>

					{/* CTA Section */}
					<Box
						py={6}
						px={4}
						textAlign="center"
						sx={{
						}}
					>
						<Typography
							variant="h5"
							fontWeight={600}
							color="primary"
							mb={2}
							sx={{
								fontSize: large ? "28px" : medium ? "24px" : "20px",
							}}
						>
							Tertarik Bergabung?
						</Typography>
						<Typography
							color="text.secondary"
							mb={4}
							sx={{ fontSize: textFontSize }}
						>
							Mari mulai perjalanan karier Anda bersama PT PMG dan jadilah bagian dari
							perusahaan yang berkembang pesat dan profesional.
						</Typography>
						<Button
							variant="contained"
							color="primary"
							size="large"
							sx={{
								padding: "12px 24px",
								fontWeight: 600,
								fontSize: medium ? "16px" : "14px",
								textTransform: "none",
							}}
							href="/karir/loker"
						>
							Lihat Lowongan
						</Button>
					</Box>
				</ContentSection>
			</DefaultLayout>
		</>
	);
}
