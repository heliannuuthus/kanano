import { MenuItem } from "@mui/material";

import { Box, styled } from "@mui/system";
import { ReactElement, useState } from "react";
import { Dropdown } from "../Dropdown";
import {
  Checked,
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
  const [element, setElement] = useState<ReactElement>(FontSizes["text"].icon);
  const [selected, setSelected] = useState<string>(FontSizes["text"].key);
  return (
    <>
      <Dropdown anchor={element}>
        {Object.values(FontSizes).map((fontsize: FontSizeType) => {
          return (
            <StyledMenuItem
              onClick={() => {
                setElement(fontsize.icon);
                setSelected(fontsize.key);
              }}
              disableRipple
              key={fontsize.key}
              selected={fontsize.key == selected}
            >
              <Box sx={{ display: "flex" }}>{fontsize.icon}</Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "16px",
                  fontSize: "14px",
                }}
              >
                {fontsize.content}
              </Box>
              <Box
                sx={{
                  display: fontsize.key == selected ? "flex" : "none",
                  lineHeight: "16px",
                }}
              >
                <Checked />
              </Box>
            </StyledMenuItem>
          );
        })}
      </Dropdown>
    </>
  );
};
