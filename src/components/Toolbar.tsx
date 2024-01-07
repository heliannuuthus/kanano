import { styled } from "@mui/material/styles";
import React, { Dispatch, MouseEvent, ReactNode, useState } from "react";
import { Text } from "./Icons";

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
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  TooltipProps,
} from "@mui/material";
type FontSetting = {
  icon: ReactNode;
  title: string;
  value: string;
};

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

type ToolbarComponent = {
  key: string;
  tooltip?: string;
  component: any;
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
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

const PatchToolTip = ({ ...props }: TooltipProps) => {
  return <Tooltip {...props} />;
};

export const Toolbar = ({ anchor }: { anchor: ReactNode }) => {
  const [fontSetting, setFontSetting] = useState<string | null>(null);
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState<Array<string>>([]);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const alignmentComponents: ToolbarComponent[] = [
    {
      key: "left",
      component: <FormatAlignLeft />,
      tooltip: "左对齐",
    },
    {
      key: "center",
      component: <FormatAlignCenter />,
      tooltip: "居中对齐",
    },
    {
      key: "right",
      component: <FormatAlignRight />,
      tooltip: "右对齐",
    },
    {
      key: "justify",
      component: <FormatAlignJustify />,
      tooltip: "垂直居中",
    },
  ];

  const formatComponents: ToolbarComponent[] = [
    {
      key: "blod",
      component: <FormatBold />,
      tooltip: "加粗",
    },
    {
      key: "strikethrough",
      component: <FormatStrikethrough />,
      tooltip: "删除线",
    },
    {
      key: "italic",
      component: <FormatItalic />,
      tooltip: "斜体",
    },
    {
      key: "underlined",
      component: <FormatUnderlined />,
      tooltip: "下划线",
    },
    {
      key: "color",
      component: (
        <>
          <FormatColorFill />
          <ArrowDropDown />
        </>
      ),
      tooltip: "下划线",
    },
  ];

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    console.log(newFormats);
    setFormats(newFormats);
  };
  return (
    <Popover
      open={Boolean(anchor)}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 200, left: 400 }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
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
                component.component
              ) : (
                <ToggleButton
                  value={component.key}
                  key={component.key}
                  aria-label={component.key}
                >
                  <PatchToolTip placement="top" title={component.tooltip} arrow>
                    {component.component}
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
                component.component
              ) : (
                <ToggleButton
                  value={component.key}
                  key={component.key}
                  aria-label={component.key}
                >
                  <PatchToolTip
                    children={component.component}
                    placement="top"
                    title={component.tooltip}
                    arrow
                  ></PatchToolTip>
                </ToggleButton>
              );
            })}
          </StyledToggleButtonGroup>
        </Paper>
      </div>
    </Popover>
  );
};
