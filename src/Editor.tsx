import { useEffect, useState } from "react";
import { styled } from "@mui/system";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "./lexical/ToolbarPlugin";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { EditorState } from "lexical";
import { Toolbar } from "./components/Toolbar";

const theme = {};

function AutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function onError(error: Error) {
  console.error(error);
}

const Editor = () => {
  const initialConfig = {
    namespace: "Kanano",
    theme,
    onError,
  };
  const onChange = (editorState: EditorState) => {
    // console.log(editorState);
  };
  const [anchor, setAnchorEl] = useState<HTMLElement | null>(null);

  const showToolbar = (element: HTMLElement | null) => {
    setAnchorEl(element);
  };

  const open = Boolean(anchor);
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={
          <div>
            <ContentEditable />
          </div>
        }
        placeholder={<div></div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <ToolbarPlugin
        setIsShowToolbar={showToolbar}
        setIsLinkEditMode={(_old: boolean) => true}
      />
      <Toolbar anchor={anchor} />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};

export default Editor;
