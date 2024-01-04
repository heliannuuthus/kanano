import React, { Dispatch, ReactNode, useState } from "react";
import { Blod, H1, H2, Italic, Quote, Strikethrough, Text } from "./Icons";
import {
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Divider,
  Flex,
  Popover,
  Space,
  MenuProps,
  ConfigProvider,
} from "antd";
import { BaseOptionType } from "antd/es/select";
import CheckableTag from "antd/es/tag/CheckableTag";
type FontSetting = {
  icon: JSX.Element;
  title: string;
  value: string;
};

const FontHeaderSettings: Record<string, FontSetting> = {
  text: {
    icon: <Text />,
    title: "正文",
    value: "text",
  },
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

const FontTypeSettings: Record<string, FontSetting> = {
  reference: {
    icon: <Quote />,
    title: "引用",
    value: "reference",
  },
};

const MergeSettings: Record<string, FontSetting> = {
  ...FontHeaderSettings,
  ...FontTypeSettings,
};

const items: MenuProps["items"] = [
  ...Object.values(FontHeaderSettings).map((val) => {
    return {
      icon: val.icon,
      label: val.title,
      key: val.value,
    };
  }),
  { type: "divider" },
  ...Object.values(FontTypeSettings).map((val) => {
    return {
      icon: val.icon,
      label: val.title,
      key: val.value,
    };
  }),
];

export const FontSetting = ({
  setFontSetting: setFontSetting,
}: {
  setFontSetting: Dispatch<string>;
}) => {
  const defaultSelectedKeys = ["text"];
  const [value, setValue] = useState<JSX.Element | null>(
    <a>{MergeSettings[defaultSelectedKeys[0]].icon}</a>
  );

  const onSelect: MenuProps["onSelect"] = (selector) => {
    setValue(<a>{MergeSettings[selector.key].icon}</a>);
  };

  return (
    <Dropdown
      autoFocus
      menu={{
        defaultSelectedKeys,
        selectable: true,
        items,
        onSelect,
      }}
    >
      {value}
    </Dropdown>
  );
};

export const Toolbar = ({ anchor }: { anchor: HTMLElement | null }) => {
  const [fontSetting, setFontSetting] = useState<string | null>(null);
  const [selectSettings, setSelectSettings] = useState<string[]>([]);
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectSettings, tag]
      : selectSettings.filter((t) => t !== tag);
    setSelectSettings(nextSelectedTags);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {},
        },
      }}
    >
      <Popover placement="top" arrow={false} open={Boolean(anchor)}>
        <>
          <CheckableTag
            key={"fontsetting"}
            checked={selectSettings.includes("fontsetting")}
            onChange={(checked) => handleChange("fontsetting", checked)}
          >
            <FontSetting setFontSetting={setFontSetting} />
          </CheckableTag>
          <Divider type="vertical" />
          <CheckableTag
            key={"blod"}
            checked={selectSettings.includes("blod")}
            onChange={(checked) => handleChange("blod", checked)}
          >
            <Blod />
          </CheckableTag>
          <CheckableTag
            key={"strikethrough"}
            checked={selectSettings.includes("strikethrough")}
            onChange={(checked) => handleChange("strikethrough", checked)}
          >
            <Strikethrough />
          </CheckableTag>
          <CheckableTag
            key={"italic"}
            checked={selectSettings.includes("italic")}
            onChange={(checked) => handleChange("italic", checked)}
          >
            <Italic />
          </CheckableTag>
        </>
      </Popover>
    </ConfigProvider>
  );
};
