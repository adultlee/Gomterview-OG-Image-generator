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
					background: "#f6f6f6",
					width: "100%",
					height: "100%",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<img width="720" height="720" src={imageData} />
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
