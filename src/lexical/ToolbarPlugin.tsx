import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { VirtualElement } from "@popperjs/core";
import {
	$setSelection,
	COMMAND_PRIORITY_CRITICAL,
	SELECTION_CHANGE_COMMAND,
} from "lexical";
import { Dispatch, useCallback, useEffect, useState } from "react";
const generateGetBoundingClientRect = (x = 0, y = 0) => {
	return () => new DOMRect(x, y, 0, 0);
};

export default function ToolbarPlugin({
	setAnchorEl,
}: {
	setAnchorEl: Dispatch<HTMLElement | VirtualElement | null>;
}) {
	const [editor] = useLexicalComposerContext();
	const [activeEditor, setActiveEditor] = useState(editor);

	const handleMouseup = useCallback(
		(_event: MouseEvent) => {
			editor.getEditorState().read(() => {
				const selection = window.getSelection();
				console.log(selection);
				if (selection && !selection?.isCollapsed) {
					const range = selection?.getRangeAt(0);
					const rect = range.getBoundingClientRect();
					const clientX = rect.right + window.scrollX;
					const clientY = rect.bottom + window.scrollY;
					const virtualPopper: VirtualElement = {
						getBoundingClientRect: generateGetBoundingClientRect(
							clientX,
							clientY
						),
					};
					setAnchorEl(virtualPopper);
				} else {
					setAnchorEl(null);
				}
			});
		},
		[editor, activeEditor]
	);
	const handleMousedown = useCallback(() => {
		editor.update(() => {
			$setSelection(null);
			const selection = window.getSelection();
			selection?.removeAllRanges();
		});
	}, [editor, activeEditor]);

	useEffect(() => {
		const kananoEditor = document.getElementById("editor");
		const cc = editor.registerCommand(
			SELECTION_CHANGE_COMMAND,
			(_, newEditor) => {
				setActiveEditor(newEditor);
				return false;
			},
			COMMAND_PRIORITY_CRITICAL
		);
		kananoEditor?.addEventListener("mouseup", handleMouseup);
		kananoEditor?.addEventListener("mousedown", handleMousedown);
		return () => {
			cc();
			kananoEditor?.removeEventListener("mouseup", handleMouseup);
			kananoEditor?.removeEventListener("mousedown", handleMousedown);
		};
	}, [editor, activeEditor]);

	return <></>;
}
