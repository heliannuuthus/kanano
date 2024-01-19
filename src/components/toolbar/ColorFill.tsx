import { Box, SvgIcon, ToggleButton, Typography } from "@mui/material";
import { CSSProperties, SVGProps } from "react";
import { Dropdown } from "../Dropdown";
import { ColorFillToggleButtonGroup } from "./ToggleButtonGroup";

const ColorFillIcon = ({
	color,
	size,
	backgroundColor,
}: {
	color?: SVGProps<SVGSVGElement>["fill"];
	size?: CSSProperties["fontSize"];
	backgroundColor?: CSSProperties["backgroundColor"];
}) => {
	return (
		<SvgIcon>
			<svg
				fill={color}
				style={{
					backgroundColor,
					borderRadius: "5px",
					fontSize: size,
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

const pallet: Array<string> = [
	"#FFCCCC",
	"#CCFFCC",
	"#CCCCFF",
	"#FFFFCC",
	"#FFEBEB",
	"#CCFFFF",
];

export const ColorFill = () => {
	return (
		<ColorFillToggleButtonGroup>
			<ToggleButton value="colorFill">
				<ColorFillIcon backgroundColor={"red"} color={"white"} />
			</ToggleButton>
			<ToggleButton value="colorFillDropDown">
				<Dropdown
					children={
						<Box>
							<Typography variant="body2">字体颜色</Typography>
							<ColorFillToggleButtonGroup>
								{pallet.map((color) => (
									<ColorFillIcon color={color} />
								))}
							</ColorFillToggleButtonGroup>
							<div>123</div>
							<div>123</div>
							<div>123</div>
						</Box>
					}
				/>
			</ToggleButton>
		</ColorFillToggleButtonGroup>
	);
};
