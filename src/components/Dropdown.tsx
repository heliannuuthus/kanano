import { KeyboardArrowDown } from "@mui/icons-material";
import {
  ClickAwayListener,
  Grow,
  MenuList,
  MenuProps,
  Paper,
  Popper,
} from "@mui/material";
import { ReactNode, useRef, useState } from "react";

export const Dropdown = ({
  anchor,
  children,
}: {
  anchor?: ReactNode | null;
  children: MenuProps["children"];
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [iconSpin, setIconSpin] = useState<boolean>(false);
  const spanRef = useRef(null);
  const handleHover = () => {
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
    <>
      <span ref={spanRef} onMouseEnter={handleHover} onMouseLeave={handleClose}>
        {anchor}
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
        {({ TransitionProps }) => (
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
                <MenuList>{children}</MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
