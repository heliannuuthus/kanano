import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { $convertFromMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { VirtualElement } from "@popperjs/core";
import { useState } from "react";
import { Toolbar } from "./components/toolbar/Toolbar";
import ToolbarPlugin from "./lexical/ToolbarPlugin";
function onError(error: Error) {
	console.error(error);
}

const Editor = () => {
	const initialConfig = {
		namespace: "kanano",
		theme: {
			root: "kanano-content",
			link: "cursor-pointer",
			text: {
				bold: "textBold",
				italic: "textItalic",
				underline: "textUnderline",
			},
		},
		editorState: () => $convertFromMarkdownString("", TRANSFORMERS),
		onError: onError,
		nodes: [
			HeadingNode,
			ListNode,
			ListItemNode,
			QuoteNode,
			CodeNode,
			CodeHighlightNode,
			TableNode,
			TableCellNode,
			TableRowNode,
			AutoLinkNode,
			LinkNode,
		],
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
					</>
				}
				placeholder={null}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<Toolbar anchorEl={anchorEl} />
			<ToolbarPlugin setAnchorEl={setAnchorEl} />
			<HistoryPlugin />
			<AutoFocusPlugin defaultSelection="rootEnd" />
			<MarkdownShortcutPlugin transformers={TRANSFORMERS} />
			<OnChangePlugin onChange={onChange} />
		</LexicalComposer>
	);
};

export default Editor;
