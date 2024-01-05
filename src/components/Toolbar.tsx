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
  Menu,
} from "antd";
import { BaseOptionType } from "antd/es/select";
import CheckableTag from "antd/es/tag/CheckableTag";
import { display } from "@mui/system";
type FontSetting = {
  icon: ReactNode;
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
  const [value, setValue] = useState<ReactNode | null>(
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

type ToolbarComponent = {
  key: string;
  tooltip?: string;
  component?: ReactNode;
};
type MenuItem = Required<MenuProps>["items"][number];

export const Toolbar = ({
  anchor,
  showIt,
}: {
  anchor: ReactNode;
  showIt: boolean;
}) => {
  const [fontSetting, setFontSetting] = useState<string | null>(null);
  const [selectedSettings, setSelectSettings] = useState<string[]>([]);
  const handleSelected = ({ selectedKeys }: { selectedKeys: string[] }) => {
    setSelectSettings(selectedKeys);
  };

  const handleDeselect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    setSelectSettings(selectedKeys);
  };

  const toolbarComponents: ToolbarComponent[] = [
    {
      key: "fontSetting",
      component: <FontSetting setFontSetting={setFontSetting} />,
      tooltip: "font",
    },
    { key: "divider" },
    {
      key: "blod",
      component: <Blod />,
      tooltip: "",
    },
    {
      key: "strikethrough",
      component: <Strikethrough />,
      tooltip: "",
    },
    {
      key: "italic",
      component: <Italic />,
      tooltip: "",
    },
  ];
  return (
    <Dropdown
      dropdownRender={() => (
        <Menu
          style={{ display: "flex", maxWidth: "300px" }}
          multiple
          selectable
          onSelect={handleSelected}
          onDeselect={handleDeselect}
          selectedKeys={selectedSettings}
          items={toolbarComponents.map((value) => {
            return value.key === "divider"
              ? { type: "divider" }
              : ({
                  label: value.component,
                  key: value.key,
                } as MenuItem);
          })}
        ></Menu>
      )}
      trigger={["contextMenu", "click"]}
      arrow={false}
      open={showIt}
    >
      {anchor}
    </Dropdown>
  );
};
