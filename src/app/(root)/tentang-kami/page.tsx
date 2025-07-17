"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import {
	HeroSection,
	ContentSection,
	FlexRow,
	InfoBox,
	AboutUsInfo,
	AboutUsBox,
	MapContainer,
} from "./styled";
import { Mail, Phone } from "@mui/icons-material";
import { DefaultLayout } from "@/components/DefaultLayout";

export default function TentangKamiPage() {
	const large = useMediaQuery('(min-width:1024px)');
	const medium = useMediaQuery('(min-width:768px)');
	return (
		<>
			{" "}
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
					<FlexRow>
						<InfoBox>
							<Typography variant="h5" fontWeight={600} gutterBottom>
								PT. PMG
							</Typography>
							<Typography color="text.secondary" fontSize={16}>
								PT. PMG adalah perusahaan konsultan yang bergerak di bidang
								pengembangan Sumber Daya Manusia serta penyediaan dan penyaluran
								tenaga kerja ke perusahaan mitra. Kami hadir sebagai jembatan
								antara pencari kerja dan perusahaan yang membutuhkan tenaga
								kerja berkualitas.
							</Typography>
						</InfoBox>

						<InfoBox sx={{ textAlign: "center" }}>
							<Image
								src="/images/PMG.png"
								alt="Logo PT PMG"
								width={200}
								height={200}
								style={{ objectFit: "contain" }}
							/>
						</InfoBox>
					</FlexRow>

					<AboutUsInfo>
						<AboutUsBox>
							<Typography variant="h6" fontWeight={600}>
								Kantor Pusat
							</Typography>
							<Typography color="text.secondary">
								Jl. Dg Ramang No. 56, Sudiang Raya, Kec. Biringkanaya, Kota
								Makasar, Sulawesi Selatan 90242
							</Typography>
						</AboutUsBox>

						<AboutUsBox>
							<Typography variant="h6" fontWeight={600}>
								Kontak Kami
							</Typography>
							<Typography color="text.secondary">
								<Phone fontSize={"inherit"} /> +62 812-2802-5250
							</Typography>
							<Typography color="text.secondary">
								<Mail fontSize={"inherit"} /> ptpmglobal@gmail.com
							</Typography>
						</AboutUsBox>
					</AboutUsInfo>

					<MapContainer>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0359925218527!2d119.52019699999998!3d-5.0978829999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefb000d924577%3A0xefe0fbdac4d94e5b!2sHOWI%20PS!5e0!3m2!1sen!2sid!4v1752768601995!5m2!1sen!2sid"
							width="100%"
							title="Map"
							loading="lazy"
							height="100%"
							allowFullScreen
						></iframe>
					</MapContainer>
				</ContentSection>
			</DefaultLayout>
		</>
	);
}
