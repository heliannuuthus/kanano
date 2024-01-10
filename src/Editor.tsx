import { useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "./lexical/ToolbarPlugin";
import { EditorState } from "lexical";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Instance, Options, VirtualElement } from "@popperjs/core";

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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | VirtualElement | null>(
    null
  );
  const [postion, setPosition] = useState<[number, number] | null>(null);

  const showToolbar = (element: HTMLElement | VirtualElement | null) => {
    setAnchorEl(element);
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={
          <>
            <ContentEditable
              className="kanano-editable"
              style={{
                outline: "none",
                lineHeight: 1.65,
                letterSpacing: ".02em",
                fontSize: "16px",
              }}
            />
            <Toolbar anchorEl={anchorEl} />
          </>
        }
        placeholder={<div></div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <ToolbarPlugin
        setPosition={setPosition}
        setIsShowToolbar={showToolbar}
        setIsLinkEditMode={(_old: boolean) => true}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};

export default Editor;
