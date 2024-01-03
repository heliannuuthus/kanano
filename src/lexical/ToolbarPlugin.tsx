import { styled } from "@mui/system";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $findMatchingParent } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
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

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    console.log(selection);

    if ($isRangeSelection(selection)) {
      if (
        (selection as RangeSelection).anchor.offset ==
        (selection as RangeSelection).focus.offset
      ) {
        setIsShowToolbar(null);
        return;
      }

      const anchorNode: ElementNode = (
        selection as RangeSelection
      ).anchor.getNode();
      let element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow() as ElementNode;
      }

      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);

      if (elementDOM != null) {
        setIsShowToolbar(elementDOM);
      }
    }
    const context = selection?.getTextContent();
    if (context && context.length > 0) {
      // popover
      console.log(context);
    }
  }, [activeEditor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        $updateToolbar();
        setActiveEditor(newEditor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, $updateToolbar]);

  return <div></div>;
}
