import { IconButton, MenuItem, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
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
			<IconButton sx={{ borderRadius: "8px", height: "24px", width: "24px" }}>
				<ColorFillIcon backgroundColor={"red"} color={"white"} />
			</IconButton>
			<Dropdown
				children={
					<MenuItem>
						<div>{Boolean(true)}</div>
						<div>{Boolean(true)}</div>
						<div>{Boolean(true)}</div>
						<div>{Boolean(true)}</div>
					</MenuItem>
				}
			/>
		</Box>
	);
};
