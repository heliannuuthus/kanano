import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import Editor from "./Editor";
import "./styles.css";

const MainContainer = styled(Container)({
	"&.MuiContainer-root": {
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflow: "hidden",
	},
});

const EditorContainer = styled(Container)({
	"&.MuiContainer-root": {
		paddingLeft: "0",
		paddingRight: "0",
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MainContainer>
			<Grid container spacing={8}>
				<Grid xs></Grid>
				<Grid xs={7}>
					<EditorContainer maxWidth={"md"} className="editor">
						<Box>
							<Editor />
						</Box>
					</EditorContainer>
				</Grid>
				<Grid xs></Grid>
			</Grid>
		</MainContainer>
	</React.StrictMode>
);
