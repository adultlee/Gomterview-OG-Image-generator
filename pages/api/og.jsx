/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
	runtime: "edge",
};

export default async function handler() {
	const imageData = await fetch(
		new URL("./landing-bear.png", import.meta.url)
	).then((res) => res.arrayBuffer());
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
						fontSize: 80,
					}}
				>
					곰터뷰 ⭐️
				</div>
				<img width="300" height="300" src={imageData} />
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
