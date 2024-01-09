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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [clientX, setClientX] = useState<number | null>(null);
  const [clientY, setClientY] = useState<number | null>(20);
  const showToolbar = (element: HTMLElement | null) => {
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
                fontSize: "16px"
              }}
            />
            <Toolbar anchorEl={anchorEl} top={clientX} left={clientY} />
          </>
        }
        placeholder={<div></div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <ToolbarPlugin
        setClientX={setClientX}
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
