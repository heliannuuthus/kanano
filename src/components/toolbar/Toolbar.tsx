import type { VirtualElement } from "@popperjs/core";
import React from "react";

import { styled } from "@mui/material/styles";

import {
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatItalic,
  FormatStrikethrough,
  FormatUnderlined,
} from "@mui/icons-material";
import {
  Divider,
  MenuItem,
  Paper,
  Popper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Dropdown } from "../Dropdown";
import { PatchToolTip } from "../PatchTooltip";

type ToolbarComponent = {
  key: string;
  tooltip?: string;
  icon: JSX.Element;
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "&.MuiToggleButtonGroup-root": {
    padding: "8px",
  },
  "& .MuiToggleButtonGroup-grouped": {
    boxShadow: "none",
    border: 0,
    lineHeight: 0,
    padding: 3,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
      marginLeft: "8px !important",
      border: 0,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
      border: 0,
    },
  },
}));

export const Toolbar = ({
  anchorEl,
}: {
  anchorEl: HTMLElement | VirtualElement | null;
}) => {
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState<Array<string>>([]);
  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const alignmentComponents: ToolbarComponent[] = [
    {
      key: "left",
      icon: <FormatAlignLeft />,
      tooltip: "左对齐",
    },
    {
      key: "center",
      icon: <FormatAlignCenter />,
      tooltip: "居中对齐",
    },
    {
      key: "right",
      icon: <FormatAlignRight />,
      tooltip: "右对齐",
    },
    {
      key: "justify",
      icon: <FormatAlignJustify />,
      tooltip: "垂直居中",
    },
  ];

  const formatComponents: ToolbarComponent[] = [
    {
      key: "blod",
      icon: <FormatBold />,
      tooltip: "加粗",
    },
    {
      key: "strikethrough",
      icon: <FormatStrikethrough />,
      tooltip: "删除线",
    },
    {
      key: "italic",
      icon: <FormatItalic />,
      tooltip: "斜体",
    },
    {
      key: "underlined",
      icon: <FormatUnderlined />,
      tooltip: "下划线",
    },
    {
      key: "color",
      icon: (
        <Dropdown
          children={
            <MenuItem>
              <div>{Boolean(anchorEl)}</div>
            </MenuItem>
          }
        />
      ),
    },
  ];

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };
  return (
    <Popper
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 30],
          },
        },
      ]}
      placement="top"
    >
      <div>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            flexWrap: "wrap",
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleFormat}
          >
            {formatComponents.map((component) => {
              return component.key == "divider" ? (
                component.icon
              ) : (
                <ToggleButton
                  value={component.key}
                  key={component.key}
                  aria-label={component.key}
                >
                  <PatchToolTip placement="top" title={component.tooltip} arrow>
                    {component.icon}
                  </PatchToolTip>
                </ToggleButton>
              );
            })}
          </StyledToggleButtonGroup>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            {alignmentComponents.map((component) => {
              return component.key == "divider" ? (
                component.icon
              ) : (
                <ToggleButton
                  value={component.key}
                  key={component.key}
                  aria-label={component.key}
                >
                  <PatchToolTip placement="top" title={component.tooltip} arrow>
                    {component.icon}
                  </PatchToolTip>
                </ToggleButton>
              );
            })}
          </StyledToggleButtonGroup>
        </Paper>
      </div>
    </Popper>
  );
};
