/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
	runtime: "edge",
};

export default async function handler() {
	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					background: "#ffffff",
					width: "100%",
					height: "100%",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 50,
				}}
			>
				<div
					style={{
						display: "flex",
						color: "#477FEE",
						fontWeight: 900,
						fontSize: 180,
					}}
				>
					곰터뷰 💙
				</div>
				<div
					style={{
						display: "flex",
						color: "#477FEE",
						fontSize: 40,
					}}
				>
					당신을 위한 무료 면접 서비스
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
