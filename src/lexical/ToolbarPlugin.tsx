import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { VirtualElement } from "@popperjs/core";
import {
	$getSelection,
	$isRangeSelection,
	$setSelection,
	COMMAND_PRIORITY_CRITICAL,
	RangeSelection,
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
		(event: MouseEvent) => {
			editor.getEditorState().read(() => {
				const selection = $getSelection();
				if (selection == null) {
					setAnchorEl(null);
					return;
				} else if ($isRangeSelection(selection)) {
					// console.log(selection.anchor.getNode());
					if (!(selection as RangeSelection)._cachedNodes) {
						setAnchorEl(null);
					} else {
						const virtualPopper: VirtualElement = {
							getBoundingClientRect: generateGetBoundingClientRect(
								event.pageX,
								event.pageY
							),
						};
						setAnchorEl(virtualPopper);
					}
				}
			});
		},
		[editor, activeEditor]
	);
	const handleMousedown = useCallback(() => {
		editor.update(() => {
			$setSelection(null);
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
