import { Box, Paper, PaperProps } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import Editor from "./Editor";
import "./styles.css";

const MainBox = styled(Box)({
	"&.MuiBox-root": {
		height: "calc(var(--vh,1vh) * 100)",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflow: "hidden",
	},
});

const MainContainer = styled(Grid)({
	"&.app": {
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflow: "hidden",
	},
});

const HeaderBlock = styled((props: PaperProps) => <Paper {...props} />)({
	"&.MuiPaper-root": {
		position: "relative",
		zIndex: 0,
		padding: "20px 0 0",
		margin: "0 0 22px",
		wordBreak: "break-word",
	},
});

const EditorContainer = styled((props: PaperProps) => <Paper {...props} />)({
	"&.MuiPaper-root": {
		paddingLeft: "0",
		paddingRight: "0",
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MainBox>
			<MainContainer container className="app">
				<Grid xs></Grid>
				<Grid xs={6.5} id={"editor"} className="editor">
					<EditorContainer elevation={0}>
						<HeaderBlock elevation={0} />
						<Editor />
					</EditorContainer>
				</Grid>
				<Grid xs></Grid>
			</MainContainer>
		</MainBox>
	</React.StrictMode>
);
