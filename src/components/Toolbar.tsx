import React, { Dispatch, ReactNode, useState } from "react";
import { H1, H2, Quote, Text } from "./Icons";
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

export const Bold = ({ enabled }: { enabled: boolean }) => (
  <Button size="small" icon={<BoldOutlined />} />
);

export const Strikethrough = ({ enabled }: { enabled: boolean }) => (
  <Button size="small" icon={<StrikethroughOutlined />} />
);

export const Italic = ({ enabled }: { enabled: boolean }) => (
  <Button size="small" icon={<ItalicOutlined />} />
);

export const Toolbar = ({ anchor }: { anchor: HTMLElement | null }) => {
  const canBeOpen = Boolean(anchor);
  const id = canBeOpen ? "kanano-toolbar" : undefined;

  const [fontSetting, setFontSetting] = useState<string | null>(null);

  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {},
        },
      }}
    >
      <Popover id={id} open={Boolean(anchor)}>
        <>
          <FontSetting setFontSetting={setFontSetting} />
          <Divider type="vertical" />
          <Bold enabled />
          <Strikethrough enabled />
          <Italic enabled />
        </>
      </Popover>
    </ConfigProvider>
  );
};
