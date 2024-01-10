import { MenuItem, MenuList } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import { MouseEvent, ReactElement, useState } from "react";
import { Dropdown } from "../Dropdown";
import {
  FormatH1,
  FormatH2,
  FormatH3,
  FormatH4,
  FormatH5,
  FormatH6,
  Text,
} from "./Icons";

type TitleType = {
  key: string;
  icon: ReactElement;
  text: string;
};

const StyleDropdown = styled(
  ({
    anchor,
    children,
  }: {
    anchor: ReactElement | null;
    children: ReactElement;
  }) => <Dropdown anchor={anchor} children={children} />
)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const titles: Array<TitleType> = [
  {
    key: "text",
    icon: <Text />,
    text: "正文格式",
  },
  {
    key: "h1",
    icon: <FormatH1 />,
    text: "一级标题",
  },
  {
    key: "h2",
    icon: <FormatH2 />,
    text: "二级标题",
  },
  {
    key: "h3",
    icon: <FormatH3 />,
    text: "三级标题",
  },
  {
    key: "h4",
    icon: <FormatH4 />,
    text: "四级标题",
  },
  {
    key: "h5",
    icon: <FormatH5 />,
    text: "五级标题",
  },
  {
    key: "h6",
    icon: <FormatH6 />,
    text: "六级标题",
  },
];

export const FontSetting = () => {
  const [element] = useState<ReactElement>(<Text />);
  const onClick = (event: MouseEvent<HTMLElement>) => {
    console.log(event);
  };
  return (
    <>
      <StyleDropdown
        anchor={element}
        children={
          <MenuList>
            {titles.map((key: TitleType) => {
              return (
                <MenuItem onClick={onClick} key={key.key} disableRipple>
                  {key.icon}
                  {key.text}
                </MenuItem>
              );
            })}
          </MenuList>
        }
      />
    </>
  );
};
