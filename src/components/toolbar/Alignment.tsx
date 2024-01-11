import { MenuItem } from "@mui/material";

import { Box, styled } from "@mui/system";
import { ReactElement, useState } from "react";
import { Dropdown } from "../Dropdown";
import {
  Checked,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
} from "./Icons";

const StyledMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    minHeight: "32px",
    padding: "4px",
    borderRadius: "4px",
  },
});

type AlignmentType = {
  key: string;
  icon: ReactElement;
  content: string;
  tooltip?: string;
};

const Alignments: Record<string, AlignmentType> = {
  alignLeft: {
    key: "alignLeft",
    icon: <FormatAlignLeft />,
    content: "左对齐",
  },
  alignCenter: {
    key: "alignCenter",
    icon: <FormatAlignCenter />,
    content: "居中对齐",
  },
  alignRight: {
    key: "alignRight",
    icon: <FormatAlignRight />,
    content: "右对齐",
  },
  alignJustify: {
    key: "alignJustify",
    icon: <FormatAlignJustify />,
    content: "垂直居中",
  },
};

export const Alignment = () => {
  const [element, setElement] = useState<ReactElement>(
    Alignments["alignLeft"].icon
  );
  const [selected, setSelected] = useState<string>(Alignments["alignLeft"].key);
  return (
    <>
      <Dropdown anchor={element}>
        {Object.values(Alignments).map((alignment: AlignmentType) => {
          return (
            <StyledMenuItem
              onClick={() => {
                setElement(alignment.icon);
                setSelected(alignment.key);
              }}
              disableRipple
              key={alignment.key}
              selected={alignment.key == selected}
            >
              <Box sx={{ display: "flex" }}>{alignment.icon}</Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "16px",
                  fontSize: "14px",
                }}
              >
                {alignment.content}
              </Box>
              <Box
                sx={{
                  display: alignment.key == selected ? "flex" : "none",
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
