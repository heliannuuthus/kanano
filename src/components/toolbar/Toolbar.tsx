import type { VirtualElement } from "@popperjs/core";
import React from "react";

import { Divider, Paper, Popper, ToggleButton } from "@mui/material";
import {
	FormatBold,
	FormatItalic,
	FormatStrikethrough,
	FormatUnderlined,
	Linked,
} from "../Icons";
import { PatchToolTip } from "../PatchTooltip";
import { Alignment } from "./Alignment";
import { ColorFill } from "./ColorFill";
import { FontSize } from "./FontSize";
import { ToolBarButtonGroup } from "./ToggleButtonGroup";

type ToolbarComponent = {
	key: string;
	tooltip?: string;
	icon: React.JSX.Element;
};

export const Toolbar = ({
	anchorEl,
}: {
	anchorEl: HTMLElement | VirtualElement | null;
}) => {
	const [formats, setFormats] = React.useState<Array<string>>([]);

	const formatComponents: ToolbarComponent[] = [
		{
			key: "blod",
			icon: <FormatBold />,
			tooltip: "加粗",
		},
		{
			key: "strikethrough",
			icon: <FormatStrikethrough />,
			tooltip: "删除线",
		},
		{
			key: "italic",
			icon: <FormatItalic />,
			tooltip: "斜体",
		},
		{
			key: "underlined",
			icon: <FormatUnderlined />,
			tooltip: "下划线",
		},
		{
			key: "linked",
			icon: <Linked />,
			tooltip: "链接",
		},
	];

	const handleFormat = (
		_event: React.MouseEvent<HTMLElement>,
		newFormats: string[]
	) => {
		setFormats(newFormats);
	};
	return (
		<Popper
			anchorEl={anchorEl}
			open={Boolean(anchorEl)}
			modifiers={[
				{
					name: "offset",
					options: {
						offset: [0, 30],
					},
				},
			]}
			placement="top"
		>
			<div>
				<Paper
					elevation={0}
					sx={{
						padding: "8px",
						display: "flex",
						border: (theme) => `1px solid ${theme.palette.divider}`,
						flexWrap: "wrap",
					}}
				>
					<FontSize />
					<Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
					<Alignment />
					<Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
					<ToolBarButtonGroup value={formats} onChange={handleFormat}>
						{formatComponents.map((component) => {
							return component.key === "divider" ? (
								component.icon
							) : (
								<ToggleButton
									value={component.key}
									key={component.key}
									aria-label={component.key}
								>
									<PatchToolTip placement="top" title={component.tooltip} arrow>
										{component.icon}
									</PatchToolTip>
								</ToggleButton>
							);
						})}
						<ToggleButton selected={false} value="colorFilled">
							<ColorFill />
						</ToggleButton>
					</ToolBarButtonGroup>
				</Paper>
			</div>
		</Popper>
	);
};
