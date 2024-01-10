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
  $INTERNAL_isPointSelection,
  LexicalEditor,
  RangeSelection,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { Dispatch, useCallback, useEffect, useState } from "react";

export default function ToolbarPlugin({
  setClientX,
  setIsShowToolbar,
  setIsLinkEditMode,
}: {
  setClientX: Dispatch<number | null>;
  setIsShowToolbar: Dispatch<HTMLElement | null>;
  setIsLinkEditMode: Dispatch<boolean>;
}) {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);

  const handleMouseup = useCallback(
    (event: MouseEvent) => {
      editor.getEditorState().read(() => {
        const selection = $getSelection();
        console.log(selection);
        if ($isRangeSelection(selection)) {
          if (!(selection as RangeSelection)._cachedNodes) {
            setClientX(null);
            setIsShowToolbar(null);
          } else {
            const anchorNode: ElementNode = (
              selection as RangeSelection
            ).anchor.getNode();
            const elementDOM = activeEditor.getElementByKey(
              anchorNode.getKey()
            );
            setClientX(event.clientX);
            setIsShowToolbar(elementDOM);
          }
        }
      });
    },
    [editor, activeEditor]
  );
  const handleMousedown = useCallback(
    (event: MouseEvent) => {
      editor.getEditorState().read(() => {
        window.getSelection()?.removeAllRanges();
      });
    },
    [editor, activeEditor]
  );

  useEffect(() => {
    const rootElement = editor.getRootElement();
    const cc = editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_, newEditor) => {
        setActiveEditor(newEditor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
    rootElement?.addEventListener("mouseup", handleMouseup);
    rootElement?.addEventListener("mousedown", handleMousedown);
    return () => {
      cc();
      rootElement?.removeEventListener("mouseup", handleMouseup);
      rootElement?.removeEventListener("mousedown", handleMousedown);
    };
  }, [editor, activeEditor]);

  return <></>;
}
