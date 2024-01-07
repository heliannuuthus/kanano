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

  const handleMouseup = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (
          (selection as RangeSelection).anchor.offset ==
          (selection as RangeSelection).focus.offset
        ) {
          setIsShowToolbar(null);
        } else {
          const anchorNode: ElementNode = (
            selection as RangeSelection
          ).anchor.getNode();
          const elementDOM = activeEditor.getElementByKey(anchorNode.getKey());
          setIsShowToolbar(elementDOM);
        }
      }
    });
  }, [editor, activeEditor]);

  useEffect(() => {
    const rootElement = editor.getRootElement();
    editor.getRootElement()?.addEventListener("mouseup", handleMouseup);
    return () => {
      rootElement?.removeEventListener("mouseup", handleMouseup);
    };
  }, [editor, activeEditor]);

  return <></>;
}
