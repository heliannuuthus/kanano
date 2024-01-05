import { styled } from "@mui/system";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  $setSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  ElementNode,
  LexicalEditor,
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

  const handleMouseup = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      console.log(selectStart);

      if ($isRangeSelection(selection)) {
        if (
          (selection as RangeSelection).anchor.offset ==
          (selection as RangeSelection).focus.offset
        ) {
          setSelectStart((_old) => false);
          setIsShowToolbar(null);
        }
        if (selectStart) {
          const anchorNode: ElementNode = (
            selection as RangeSelection
          ).anchor.getNode();
          const elementDOM = activeEditor.getElementByKey(anchorNode.getKey());
          $setSelection(selection);
          console.log("set selection success");
          setIsShowToolbar(elementDOM);
        }
      }
    });
  }, [editor, activeEditor, selectStart]);

  const handleSelectionChange = useCallback(
    (_payload: void, _newEditor: LexicalEditor) => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        setSelectStart(
          (selection as RangeSelection).anchor.offset !=
            (selection as RangeSelection).focus.offset
        );
        editor.getRootElement()?.addEventListener("mouseup", handleMouseup);
        console.log(
          "change",
          (selection as RangeSelection).anchor.offset,
          (selection as RangeSelection).focus.offset,
          selectStart
        );
      }
      return false;
    },
    [editor, selectStart]
  );

  useEffect(() => {
    const rootElement = editor.getRootElement();
    // return mergeRegister(
    const cmd = editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      handleSelectionChange,
      COMMAND_PRIORITY_CRITICAL
    );
    //   editor.registerCommand(
    //     CLICK_COMMAND,
    //     (_payload, newEditor) => {
    //       setSelectEnd(true);
    //       $showToobar();
    //       setActiveEditor(newEditor);
    //       return false;
    //     },
    //     COMMAND_PRIORITY_CRITICAL
    //   )
    // );
    return () => {
      cmd(), rootElement?.removeEventListener("mouseup", handleMouseup);
    };
  }, [editor, activeEditor]);

  return <></>;
}
