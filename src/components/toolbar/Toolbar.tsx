import React, {
  Dispatch,
  MouseEvent,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { Text } from "./Icons";
import { styled } from "@mui/material/styles";

import {
  ArrowDropDown,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatColorFill,
  FormatItalic,
  FormatStrikethrough,
  FormatUnderlined,
} from "@mui/icons-material";
import {
  Divider,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Popper,
  Portal,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  TooltipProps,
} from "@mui/material";
import { PatchToolTip } from "../PatchTooltip";
import { Dropdown } from "../Dropdown";
type FontSetting = {
  icon: ReactNode;
  title: string;
  value: string;
};

type ToolbarComponent = {
  key: string;
  tooltip?: string;
  icon: ReactElement<any, any>;
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    boxShadow: "none",
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export const Toolbar = ({
  anchorEl,
  top,
  left,
}: {
  anchorEl: HTMLElement | null;
  top: number | null;
  left: number | null;
}) => {
  const [fontSetting, setFontSetting] = useState<string | null>(null);
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
      icon: <Dropdown component={<FormatColorFill />}  />,
      tooltip: "下划线",
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
      open={top != null && left != null}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [top, left],
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
            aria-label="text formatting"
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
