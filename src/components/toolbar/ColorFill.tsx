import { Box, Paper, SvgIcon } from "@mui/material";
import { CSSProperties, SVGProps } from "react";
import { Dropdown } from "../Dropdown";

const ColorFillIcon = ({
	color,
	backgroundColor,
}: {
	color: SVGProps<SVGSVGElement>["fill"];
	backgroundColor: CSSProperties["backgroundColor"];
}) => {
	return (
		<SvgIcon>
			<svg
				fill={color}
				style={{
					backgroundColor,
					borderRadius: "5px",
				}}
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 -960 960 960"
				width="24"
			>
				<path d="M300-280v-400h40v180h280v-180h40v400h-40v-180H340v180h-40Z" />
			</svg>
		</SvgIcon>
	);
};

export const ColorFill = () => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<ColorFillIcon backgroundColor={"red"} color={"white"} />
			<Dropdown children={<Paper></Paper>} />
		</Box>
	);
};
