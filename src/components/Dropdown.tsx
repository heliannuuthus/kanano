import {
  Keyboard,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Title,
} from "@mui/icons-material";
import {
  Button,
  ButtonProps,
  Menu,
  MenuItem,
  MenuProps,
  Popover,
  Popper,
  alpha,
  styled,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { Text } from "./toolbar/Icons";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export const Dropdown = ({
  component,
  menuProps,
}: {
  component: ReactNode;
  menuProps?: MenuProps;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [iconSpin, setIconSpin] = useState<boolean>(false);
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    console.log("移入");
    setAnchorEl(event.currentTarget);
    setIconSpin(true);
  };
  const handleClose = () => {
    console.log("移出");
    setAnchorEl(null);
    setIconSpin(false);
  };
  return (
    <>
      <span onMouseEnter={handleHover} onMouseLeave={handleClose}>
        <KeyboardArrowDown
          style={{
            transform: iconSpin ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </span>
      <StyledMenu
        component={Popper}
        anchorEl={anchorEl}
        open={Boolean(anchorEl) || false}
        {...menuProps}
      ></StyledMenu>
    </>
  );
};
