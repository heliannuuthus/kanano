import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

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
    <BootstrapTooltip
      placement="top"
      {...props}
      children={<span>{props.children}</span>}
    />
  );
};
