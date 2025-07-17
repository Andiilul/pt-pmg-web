import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**", // Allow any HTTPS host
			},
			{
				protocol: "http",
				hostname: "**", // Optional: allow any HTTP host (less secure)
			},
		],
	},
};

export default nextConfig;
