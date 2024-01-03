import {
  Box,
  Button,
  MenuItem,
  Select,
  Popper,
  Fade,
  Divider,
  SelectChangeEvent,
} from "@mui/material";
import { Dispatch, useState } from "react";

type FontSetting = {
  icon: string;
  title: string;
  value: string;
};

export const FontSizeSettings: Record<string, FontSetting> = {
  h1: {
    icon: "",
    title: "一级标题",
    value: "20px",
  },
  h2: {
    icon: "",
    title: "二级标题",
    value: "17px",
  },
};

export const FontTypeSettings: Record<string, FontSetting> = {
  reference: {
    icon: "",
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
      labelId="kanano-font-setting-label"
      id="kanano-font-setting"
      value={FontSizeSettings[value || ""]?.value}
      label="Age"
      onChange={(event: SelectChangeEvent) => {
        setValue(event.target.value as string);
        setFontSetting(event.target.value as string);
      }}
    >
      {Object.keys(FontSizeSettings).map((key: string, index: number) => {
        console.log(key);
        return (
          <MenuItem value={key} id={index + ""}>
            {FontSizeSettings[key].title}
          </MenuItem>
        );
      })}
      <Divider />
      {Object.keys(FontTypeSettings).map((key: string, index: number) => {
        console.log(key);
        return (
          <MenuItem value={key} id={index + ""}>
            {FontTypeSettings[key].title}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export const Italic = ({ enable }: { enable: boolean }) => {
  return <Button>I</Button>;
};

export const Toolbar = ({ anchor }: { anchor: HTMLElement | null }) => {
  const canBeOpen = Boolean(anchor);
  const id = canBeOpen ? "kanano-toolbar" : undefined;

  const [fontSetting, setFontSetting] = useState<string | null>(null);

  return (
    <Popper id={id} open={Boolean(anchor)} anchorEl={anchor} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            <FontSetting setFontSetting={setFontSetting} />
          </Box>
        </Fade>
      )}
    </Popper>
  );
};
