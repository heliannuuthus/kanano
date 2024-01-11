import { MenuItem } from "@mui/material";

import { Box, styled } from "@mui/system";
import { MouseEvent, ReactElement, useState } from "react";
import { Dropdown } from "../Dropdown";
import {
  FormatH1,
  FormatH2,
  FormatH3,
  FormatH4,
  FormatH5,
  FormatH6,
  Text,
} from "./Icons";

const StyledMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    minHeight: "32px",
    padding: "4px",
    borderRadius: "4px",
    width: "100%",
    "&.MuiSvgIcon-root": {
      fontSize: 24,
    },
  },
});
type TitleType = {
  key: string;
  icon: ReactElement;
  text: string;
};

const titles: Array<TitleType> = [
  {
    key: "text",
    icon: <Text />,
    text: "正文格式",
  },
  {
    key: "h1",
    icon: <FormatH1 />,
    text: "一级标题",
  },
  {
    key: "h2",
    icon: <FormatH2 />,
    text: "二级标题",
  },
  {
    key: "h3",
    icon: <FormatH3 />,
    text: "三级标题",
  },
  {
    key: "h4",
    icon: <FormatH4 />,
    text: "四级标题",
  },
  {
    key: "h5",
    icon: <FormatH5 />,
    text: "五级标题",
  },
  {
    key: "h6",
    icon: <FormatH6 />,
    text: "六级标题",
  },
];

export const FontSetting = () => {
  const [element] = useState<ReactElement>(<Text />);
  const onClick = (event: MouseEvent<HTMLElement>) => {
    console.log(event);
  };
  return (
    <>
      <Dropdown anchor={element}>
        {titles.map((title: TitleType) => {
          return (
            <StyledMenuItem
              className="FontSettingSelection"
              onClick={onClick}
              disableRipple
              key={title.key}
            >
              <Box sx={{ display: "flex" }}>{title.icon}</Box>
              <Box sx={{ display: "flex", marginLeft: "16px" }}>
                {title.text}
              </Box>
            </StyledMenuItem>
          );
        })}
      </Dropdown>
    </>
  );
};
