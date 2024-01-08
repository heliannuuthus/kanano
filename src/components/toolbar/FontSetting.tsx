import { Dispatch, MouseEvent, ReactNode, useState } from "react";
import { Text } from "./Icons";
import { Menu, MenuItem } from "@mui/material";

export const FontSetting = ({
  setFontSetting: setFontSetting,
}: {
  setFontSetting: Dispatch<string>;
}) => {
  // const [value, setValue] = useState<ReactNode | null>(
  //   <a>{MergeSettings[defaultSelectedKeys[0]].icon}</a>
  // );

  const [buttonElement, setButtonElement] = useState<ReactNode>(<Text />);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(null);
  };

  return (
    <>
      <a onMouseEnter={handleEnter} onMouseLeave={handleClose}>
        {buttonElement}
      </a>
      <Menu
        variant="selectedMenu"
        id="fontSetting"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};
