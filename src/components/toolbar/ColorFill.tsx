import { Box, SvgIcon, ToggleButton, Typography } from "@mui/material";
import { Dropdown } from "../Dropdown";
import { ColorFillToggleButtonGroup } from "./ToggleButtonGroup";

const ColorFillIcon = ({
	backgroundColor,
	color,
}: {
	backgroundColor?: string;
	color?: string;
}) => {
	return (
		<span
			style={{
				height: "20px",
				width: "20px",
				margin: "2px",
				borderRadius: "3px",
				backgroundColor,
			}}
		>
			<SvgIcon sx={{ fontSize: "14px", fill: `${color}` }}>
				<svg
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					data-icon="FontcolorOutlined"
				>
					<path
						d="m16.439 15 3.14 7.391a1 1 0 1 0 1.842-.782L13.38 2.692c-.518-1.218-2.244-1.218-2.761 0L2.58 21.609a1 1 0 1 0 1.84.782L7.563 15h8.877Zm-.85-2H8.412L12 4.557 15.59 13Z"
						fill="currentColor"
					></path>
				</svg>
			</SvgIcon>
		</span>
	);
};

const pallet: Array<string> = [
	"rgb(222, 120, 2)",
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
