import { Menu, MenuItem } from "@mui/material";
import { Dispatch, MouseEvent, ReactNode, useState } from "react";
import { Text } from "./Icons";
import { Dropdown } from "../Dropdown";

export const FontSetting = ({
  setFontSetting: setFontSetting,
}: {
  setFontSetting: Dispatch<string>;
}) => {
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
      <Dropdown></Dropdown>
    </>
  );
};
