import { MenuItem } from "@mui/material";

import { Box, styled } from "@mui/system";
import { ReactElement, useState } from "react";
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
  },
});

type FontSizeType = {
  key: string;
  icon: ReactElement;
  content: string;
};

const FontSizes: Record<string, FontSizeType> = {
  text: {
    key: "text",
    icon: <Text />,
    content: "正文",
  },
  h1: {
    key: "h1",
    icon: <FormatH1 />,
    content: "一级标题",
  },
  h2: {
    key: "h2",
    icon: <FormatH2 />,
    content: "二级标题",
  },
  h3: {
    key: "h3",
    icon: <FormatH3 />,
    content: "三级标题",
  },
  h4: {
    key: "h4",
    icon: <FormatH4 />,
    content: "四级标题",
  },
  h5: {
    key: "h5",
    icon: <FormatH5 />,
    content: "五级标题",
  },
  h6: {
    key: "h6",
    icon: <FormatH6 />,
    content: "六级标题",
  },
};

export const FontSize = () => {
  const [element, setElement] = useState<ReactElement>(<Text />);
  return (
    <>
      <Dropdown anchor={element}>
        {Object.values(FontSizes).map((title: FontSizeType) => {
          return (
            <StyledMenuItem
              onClick={() => setElement(title.icon)}
              disableRipple
              key={title.key}
            >
              <Box sx={{ display: "flex" }}>{title.icon}</Box>
              <Box
                sx={{ display: "flex", marginLeft: "16px", fontSize: "14px" }}
              >
                {title.content}
              </Box>
            </StyledMenuItem>
          );
        })}
      </Dropdown>
    </>
  );
};
