import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { VirtualElement } from "@popperjs/core";
import { useEffect, useState } from "react";
import { Toolbar } from "./components/toolbar/Toolbar";
import ToolbarPlugin from "./lexical/ToolbarPlugin";

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
  const onChange = () => {
    // console.log(editorState);
  };
  const [anchorEl, setAnchorEl] = useState<HTMLElement | VirtualElement | null>(
    null
  );

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
      <ToolbarPlugin setAnchorEl={setAnchorEl} />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};

export default Editor;
