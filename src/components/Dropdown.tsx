import {
  Keyboard,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Title,
} from "@mui/icons-material";
import {
  Button,
  ButtonProps,
  ClickAwayListener,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  MenuProps,
  Paper,
  Popover,
  Popper,
  ToggleButton,
  alpha,
  styled,
} from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Text } from "./toolbar/Icons";

export const Dropdown = ({ children }: { children: MenuProps["children"] }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [iconSpin, setIconSpin] = useState<boolean>(false);
  const spanRef = useRef(null);
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(spanRef.current);
    setIconSpin(true);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIconSpin(false);
    setAnchorEl(null);
  };
  return (
    <div>
      <span ref={spanRef} onMouseEnter={handleHover} onMouseLeave={handleClose}>
        <KeyboardArrowDown
          style={{
            transform: iconSpin ? "rotate(180deg)" : "rotate(0deg)",
            transition: iconSpin ? "transform 0.3s" : "transform 0.1s",
          }}
        />
      </span>
      <Popper
        open={open}
        component={Popper}
        anchorEl={anchorEl}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 18],
            },
          },
        ]}
        disablePortal
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps}>
            <Paper
              onMouseEnter={() => {
                setOpen(true);
              }}
              onMouseLeave={() => setOpen(false)}
            >
              <ClickAwayListener
                onClickAway={() => {
                  handleClose();
                }}
              >
                <MenuList>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
