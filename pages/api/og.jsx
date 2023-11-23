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
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					gap: 50,
				}}
			>
				<div
					style={{
						display: "flex",
						color: "#000000",
						fontSize: 100,
					}}
				>
					곰터뷰 ⭐️
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
