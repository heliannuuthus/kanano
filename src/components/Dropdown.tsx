import { KeyboardArrowDown } from "@mui/icons-material";
import { ClickAwayListener, Fade, Paper, Popper } from "@mui/material";
import { ReactElement, ReactNode, useRef, useState } from "react";

export const Dropdown = ({
	anchor,
	children,
}: {
	anchor?: ReactElement | null;
	children: ReactNode;
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const [iconSpin, setIconSpin] = useState<boolean>(false);
	const spanRef = useRef(null);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(spanRef.current);
	const handleHover = () => {
		setOpen(true);
		setAnchorEl(spanRef.current);
		setIconSpin(true);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setIconSpin(false);
		setOpen(false);
	};
	return (
		<>
			<span ref={spanRef} onMouseEnter={handleHover} onMouseLeave={handleClose}>
				{anchor}
				<KeyboardArrowDown
					style={{
						transform: iconSpin ? "rotate(180deg)" : "rotate(0deg)",
						transition: iconSpin ? "transform 0.3s" : "transform 0.1s",
					}}
				/>
			</span>
			<Popper
				open={open}
				anchorEl={anchorEl}
				modifiers={[
					{
						name: "offset",
						options: {
							offset: [0, 18],
						},
					},
				]}
				transition
			>
				{({ TransitionProps }) => (
					<Fade
						{...TransitionProps}
						timeout={{
							appear: 350,
							enter: 350,
							exit: 350,
						}}
						style={{ transitionDelay: "0.3s" }}
					>
						<Paper
							sx={{ padding: "8px", minWidth: "230px" }}
							onMouseEnter={handleHover}
							onMouseLeave={handleClose}
						>
							<ClickAwayListener
								onClickAway={() => {
									handleClose();
								}}
							>
								<div>{children}</div>
							</ClickAwayListener>
						</Paper>
					</Fade>
				)}
			</Popper>
		</>
	);
};
