import { Tooltip, TooltipProps, tooltipClasses, styled } from "@mui/material";
import { lineHeight } from "@mui/system";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export const PatchToolTip = ({ ...props }: TooltipProps) => {
  return (
    <Tooltip
      placement="top"
      {...props}
      children={<span style={{ lineHeight: 1 }}>{props.children}</span>}
    />
  );
};
