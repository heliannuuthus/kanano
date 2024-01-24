import {
	ToggleButton,
	ToggleButtonGroup,
	ToggleButtonProps,
	toggleButtonGroupClasses,
	touchRippleClasses,
} from "@mui/material";
import { styled } from "@mui/system";

export const DivToggleButton = ({ value, ...props }: ToggleButtonProps) => {
	return <ToggleButton component="div" value={value} {...props} />;
};

export const ToolBarButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	[`& .${toggleButtonGroupClasses.grouped}`]: {
		padding: 0,
		border: 0,
		borderRadius: theme.shape.borderRadius,
		["& span:not(.MuiTouchRipple-root)"]: {
			fontSize: "18px",
			width: "24px",
			height: "24px",
			lineHeight: "24px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		[`&.${toggleButtonGroupClasses.disabled}`]: {
			border: 0,
		},
	},
	[`& .${touchRippleClasses.root}`]: {
		lineHeight: "0",
	},
	[`& .${toggleButtonGroupClasses.middleButton}, & .${toggleButtonGroupClasses.lastButton},`]:
		{
			marginLeft: "8px !important",
		},
}));

export const ToolBarCombineButtonGroup = styled(ToggleButtonGroup)(
	({ theme }) => ({
		[`& .${toggleButtonGroupClasses.grouped}`]: {
			padding: "0",
			border: 0,
			borderRadius: theme.shape.borderRadius,
			["& span"]: {
				fontSize: "18px",
				lineHeight: "24px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			},
			[`&.${toggleButtonGroupClasses.disabled}`]: {
				border: 0,
			},
		},
		[`& .${touchRippleClasses.root}`]: {
			lineHeight: "0",
		},
	})
);

export const ColorFillToggleButtonGroup = styled(ToggleButtonGroup)(
	({ theme }) => ({
		[`& .${toggleButtonGroupClasses.grouped}`]: {
			marginLeft: 0,
			border: 0,
			padding: 0,
			lineHeight: 0,
			borderRadius: theme.shape.borderRadius,
			[`&.${toggleButtonGroupClasses.disabled}`]: {
				border: 0,
			},
		},
		[`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.lastButton}`]:
			{
				marginLeft: "0 !important",
			},
	})
);
