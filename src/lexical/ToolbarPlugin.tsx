import { styled } from "@mui/system";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $findMatchingParent } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  ElementNode,
  RangeSelection,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { Dispatch, useCallback, useEffect, useState } from "react";

export default function ToolbarPlugin({
  setIsShowToolbar,
  setIsLinkEditMode,
}: {
  setIsShowToolbar: Dispatch<HTMLElement | null>;
  setIsLinkEditMode: Dispatch<boolean>;
}) {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);
  const [selectStart, setSelectStart] = useState(false);
  const [selectEnd, setSelectEnd] = useState(false);

  const $updateToolbar = useCallback(() => {}, [activeEditor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setSelectStart(true);
        setActiveEditor(newEditor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, $updateToolbar]);

  useEffect(() => {
    return editor.registerCommand(
      CLICK_COMMAND,
      (_payload, newEditor) => {
        setSelectEnd(true);
        const selection = $getSelection();
        console.log(selection);
        if ($isRangeSelection(selection)) {
          if (
            (selection as RangeSelection).anchor.offset ==
            (selection as RangeSelection).focus.offset
          ) {
            setSelectEnd(false);
            setSelectStart(false);
            setIsShowToolbar(null);
          } else {
            if (selectStart && selectEnd) {
              const anchorNode: ElementNode = (
                selection as RangeSelection
              ).anchor.getNode();
              const elementDOM = activeEditor.getElementByKey(
                anchorNode.getKey()
              );
              console.log("end");
              setIsShowToolbar(elementDOM);
            }
          }
        }
        console.log(selectStart);
        console.log(selectEnd);
        setActiveEditor(newEditor);
        return true;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor]);

  return <></>;
}
