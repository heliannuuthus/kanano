import {
  Box,
  Button,
  MenuItem,
  Select,
  Popper,
  Fade,
  Divider,
  SelectChangeEvent,
  FormControl,
  styled,
  IconButton,
} from "@mui/material";
import React, { Dispatch, useState } from "react";
import { H1, H2, Quote } from "./Icons";
import { FormatBold, FormatClear, FormatItalic } from "@mui/icons-material";

type FontSetting = {
  icon: JSX.Element;
  title: string;
  value: string;
};

export const FontSizeSettings: Record<string, FontSetting> = {
  h1: {
    icon: <H1 />,
    title: "一级标题",
    value: "h1",
  },
  h2: {
    icon: <H2 />,
    title: "二级标题",
    value: "h2",
  },
};

export const FontTypeSettings: Record<string, FontSetting> = {
  reference: {
    icon: <Quote />,
    title: "引用",
    value: "reference",
  },
};

export const FontSetting = ({
  setFontSetting: setFontSetting,
}: {
  setFontSetting: Dispatch<string>;
}) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      autoWidth
      id="kanano-font-setting"
      value={FontSizeSettings[value || ""]?.value || ""}
      onChange={(event: SelectChangeEvent) => {
        setValue(event.target.value as string);
        setFontSetting(event.target.value as string);
      }}
    >
      {Object.keys(FontSizeSettings).map((key: string, index: number) => {
        return (
          <MenuItem value={key} key={index}>
            {FontSizeSettings[key].title}
          </MenuItem>
        );
      })}
      <Divider />
      {Object.keys(FontTypeSettings).map((key: string, index: number) => {
        console.log(key);
        return (
          <div style={{ display: "flex" }} key={index}>
            {FontTypeSettings[key].icon}
            <Divider />
            <MenuItem value={key}>{FontTypeSettings[key].title}</MenuItem>
          </div>
        );
      })}
    </Select>
  );
};

export const Bold = ({ enabled }: { enabled: boolean }) => {
  return (
    <IconButton size="small">
      <FormatBold fontSize="small" />
    </IconButton>
  );
};

export const Clear = ({ enabled }: { enabled: boolean }) => {
  return (
    <IconButton size="small">
      <FormatClear fontSize="small" />
    </IconButton>
  );
};

export const Italic = ({ enabled }: { enabled: boolean }) => {
  return (
    <IconButton size="small">
      <FormatItalic fontSize="small" />
    </IconButton>
  );
};

export const Toolbar = ({ anchor }: { anchor: HTMLElement | null }) => {
  const canBeOpen = Boolean(anchor);
  const id = canBeOpen ? "kanano-toolbar" : undefined;

  const [fontSetting, setFontSetting] = useState<string | null>(null);

  return (
    <Popper style={{ marginTop: "15px" }} id={id} open={Boolean(anchor)} anchorEl={anchor} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            '& hr': {
              mx: 0.5,
            },
          }}>
            <FontSetting setFontSetting={setFontSetting} />
            <Divider orientation="vertical" flexItem />
            <Bold enabled />
            <Clear enabled />
            <Italic enabled />
          </Box>
        </Fade>
      )}
    </Popper>
  );
};
