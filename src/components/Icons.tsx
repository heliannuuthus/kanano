import { SvgIcon, SvgIconProps, svgIconClasses } from "@mui/material";
import { styled } from "@mui/system";
export const Text = () => <Icon children={text} />;
export const FormatH1 = () => <Icon children={h1} />;
export const FormatH2 = () => <Icon children={h2} />;
export const FormatH3 = () => <Icon children={h3} />;
export const FormatH4 = () => <Icon children={h4} />;
export const FormatH5 = () => <Icon children={h5} />;
export const FormatH6 = () => <Icon children={h6} />;
export const FormatQuote = () => <Icon children={quote} />;
export const FormatBold = () => <Icon children={bold} />;
export const FormatItalic = () => <Icon children={italic} />;
export const FormatStrikethrough = () => <Icon children={strikethrough} />;
export const FormatUnderlined = () => <Icon children={underlined} />;
export const FormatAlignCenter = () => <Icon children={textAlignCenter} />;
export const FormatAlignLeft = () => <Icon children={textAlignLeft} />;
export const FormatAlignRight = () => <Icon children={textAlignRight} />;
export const FormatAlignJustify = () => <Icon children={textAlignJustify} />;
export const Linked = () => <Icon children={linked} />;
export const Checked = () => <Icon children={checked} />;

export const Icon = styled(({ ...props }: SvgIconProps) => {
	return <SvgIcon {...props} />;
})({
	[`&.${svgIconClasses.root}`]: {
		fontSize: "18px",
	},
});

const text = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M455.384-200v-510H240.769v-50H720v50H505.385v510h-50.001Z" />
	</svg>
);
const h1 = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M240-300v-360h40v160h200v-160h40v360h-40v-160H280v160h-40Zm440 0v-320h-80v-40h120v360h-40Z" />
	</svg>
);

const h2 = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-300v-360h40v160h200v-160h40v360h-40v-160H200v160h-40Zm360 0v-135.385q0-26.654 18.981-45.634Q557.962-500 584.615-500h150.77q10.769 0 17.692-6.923T760-524.615v-70.77q0-10.769-6.923-17.692T735.385-620H520v-40h215.385q26.654 0 45.634 18.981Q800-622.039 800-595.385v70.77q0 26.654-18.981 45.634Q762.039-460 735.385-460h-150.77q-10.769 0-17.692 6.923T560-435.385V-340h240v40H520Z" />
	</svg>
);

const h3 = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-300v-360h40v160h200v-160h40v360h-40v-160H200v160h-40Zm360 0v-40h215.385q10.769 0 17.692-6.923T760-364.615V-460H600v-40h160v-95.385q0-10.769-6.923-17.692T735.385-620H520v-40h215.385q26.654 0 45.634 18.981Q800-622.039 800-595.385v230.77q0 26.654-18.981 45.634Q762.039-300 735.385-300H520Z" />
	</svg>
);

const h4 = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-300v-360h40v160h200v-160h40v360h-40v-160H200v160h-40Zm560 0v-120H520v-240h40v200h160v-200h40v200h80v40h-80v120h-40Z" />
	</svg>
);

const h5 = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-300v-360h40v160h200v-160h40v360h-40v-160H200v160h-40Zm360 0v-40h215.385q10.769 0 17.692-6.923T760-364.615v-70.77q0-10.769-6.923-17.692T735.385-460H520v-200h280v40H560v120h175.385q26.654 0 45.634 18.981Q800-462.039 800-435.385v70.77q0 26.654-18.981 45.634Q762.039-300 735.385-300H520Z" />
	</svg>
);

const h6 = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-300v-360h40v160h200v-160h40v360h-40v-160H200v160h-40Zm424.615 0q-26.653 0-45.634-18.981Q520-337.961 520-364.615v-230.77q0-26.654 18.981-45.634Q557.962-660 584.615-660H800v40H584.615q-10.769 0-17.692 6.923T560-595.385V-500h175.385q26.654 0 45.634 18.981Q800-462.039 800-435.385v70.77q0 26.654-18.981 45.634Q762.039-300 735.385-300h-150.77ZM560-460v95.385q0 10.769 6.923 17.692T584.615-340h150.77q10.769 0 17.692-6.923T760-364.615v-70.77q0-10.769-6.923-17.692T735.385-460H560Z" />
	</svg>
);

const bold = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="BoldOutlined"
	>
		<path
			d="M5 2.709C5 2.317 5.317 2 5.709 2h6.734a5.317 5.317 0 0 1 3.686 9.148 5.671 5.671 0 0 1-2.623 10.7H5.71a.709.709 0 0 1-.71-.707V2.71Zm2 7.798h5.443a3.19 3.19 0 0 0 3.19-3.19c0-1.762-1.428-3.317-3.19-3.317H7v6.507Zm0 2.126v7.09h6.507a3.544 3.544 0 0 0 0-7.09H7Z"
			fill="currentColor"
		></path>
	</svg>
);

const italic = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="ItalicOutlined"
	>
		<path
			d="M14.825 5.077 11.19 18.923h4.052a1.038 1.038 0 1 1 0 2.077H4.954a1.038 1.038 0 1 1 0-2.077h4.053l3.636-13.846H8.591A1.038 1.038 0 1 1 8.59 3h10.287a1.038 1.038 0 0 1 0 2.077h-4.053Z"
			fill="currentColor"
		></path>
	</svg>
);

const strikethrough = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="HorizontalLineOutlined"
	>
		<path
			d="M5.49 7.226A5.107 5.107 0 0 1 6.9 3.831C8.017 2.636 9.718 2 11.819 2c2.142 0 3.779.57 4.867 1.689.4.392.869.958 1.26 1.595.443.723-.191 1.53-1.04 1.53-.606 0-1.039-.447-1.326-.981a2.864 2.864 0 0 0-.362-.517c-.735-.93-1.909-1.419-3.386-1.419-2.404 0-4.154 1.395-4.2 3.393-.02.846.337 1.58.995 2.043h-2.75c-.271-.621-.403-1.332-.385-2.107Zm8.906 6.024H4.038c-.518 0-.938-.38-.938-.897 0-.518.42-.978.938-.978h16.125c.518 0 .937.437.937.954 0 .518-.42.921-.937.921h-2.455c.542.806.96 1.954.934 3.055C18.563 19.82 15.87 22 11.572 22c-2.875 0-5.028-.964-6.13-2.745a6.884 6.884 0 0 1-.545-1.191c-.261-.72.318-1.432 1.084-1.432.574 0 1.034.416 1.24.952.17.445.4.794.733 1.142.805.858 2.104 1.305 3.766 1.305 2.845 0 4.696-1.39 4.747-3.61.024-1.072-.256-1.61-.897-2.42-.473-.598-1.174-.751-1.174-.751Z"
			fill="currentColor"
		></path>
	</svg>
);

const underlined = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="UnderlineOutlined"
	>
		<path
			d="M7.361 3.052a.99.99 0 0 0-.989-.994.998.998 0 0 0-.999.994v5.765c0 4.205 2.601 7.29 6.627 7.29s6.627-3.085 6.627-7.29V3.052a.996.996 0 0 0-.996-.994.992.992 0 0 0-.992.994v5.765c0 3.003-1.763 5.302-4.639 5.302-2.876 0-4.639-2.299-4.639-5.302V3.052ZM3.054 19.42a.988.988 0 0 0-.994.988 1 1 0 0 0 .994 1h17.892a1 1 0 0 0 .994-1.002.987.987 0 0 0-.994-.986H3.054Z"
			fill="currentColor"
		></path>
	</svg>
);

const quote = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="m263.384-267.692 95.847-166.923q-6.924 3.846-16.154 5.384-9.231 1.539-18.462 1.539-56 0-94.154-38.866-38.154-38.865-38.154-93.442 0-56 38.154-94.154 38.154-38.154 94.154-38.154 54.577 0 93.443 38.154 38.865 38.154 38.865 93.886 0 19.422-4.731 36.23-4.73 16.807-13.423 31.73L309.231-267.692h-45.847Zm350.77 0L710-434.615q-6.923 3.846-16.154 5.384-9.231 1.539-18.461 1.539-56 0-94.154-38.866-38.154-38.865-38.154-93.442 0-56.769 38.154-94.539 38.154-37.769 94.154-37.769 54.577 0 93.442 38.154 38.866 38.154 38.866 93.886 0 19.422-4.731 36.23-4.731 16.807-13.423 31.73L660-267.692h-45.846ZM324.615-472.308q36.539 0 62.116-25.577 25.576-25.577 25.576-62.115t-25.576-62.115q-25.577-25.577-62.116-25.577-36.538 0-62.115 25.577-25.577 25.577-25.577 62.115t25.577 62.115q25.577 25.577 62.115 25.577Zm350.77 0q36.538 0 62.115-25.577 25.577-25.577 25.577-62.115T737.5-622.115q-25.577-25.577-62.115-25.577-36.539 0-62.116 25.577-25.576 25.577-25.576 62.115t25.576 62.115q25.577 25.577 62.116 25.577Zm0-87.692Zm-350.77 0Z" />
	</svg>
);

const textAlignCenter = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-160v-40h640v40H160Zm160-150v-40h320v40H320ZM160-460v-40h640v40H160Zm160-150v-40h320v40H320ZM160-760v-40h640v40H160Z" />
	</svg>
);
const textAlignLeft = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-160v-40h640v40H160Zm0-150v-40h400v40H160Zm0-150v-40h640v40H160Zm0-150v-40h400v40H160Zm0-150v-40h640v40H160Z" />
	</svg>
);
const textAlignRight = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-760v-40h640v40H160Zm240 150v-40h400v40H400ZM160-460v-40h640v40H160Zm240 150v-40h400v40H400ZM160-160v-40h640v40H160Z" />
	</svg>
);
const textAlignJustify = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M160-160v-40h640v40H160Zm0-150v-40h640v40H160Zm0-150v-40h640v40H160Zm0-150v-40h640v40H160Zm0-150v-40h640v40H160Z" />
	</svg>
);

const linked = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="GlobalLinkOutlined"
	>
		<path
			d="M18.849 2.699a5.037 5.037 0 0 0-7.1.97L8.97 7.372a4.784 4.784 0 0 0 .957 6.699l.972.729a1 1 0 0 0 1.2-1.6l-.972-.73a2.784 2.784 0 0 1-.557-3.898l2.777-3.703a3.037 3.037 0 1 1 4.8 3.72l-1.429 1.786a1 1 0 1 0 1.562 1.25l1.43-1.788a5.037 5.037 0 0 0-.862-7.138Z"
			fill="currentColor"
		></path>
		<path
			d="M5.152 21.301a5.037 5.037 0 0 0 7.1-.97l2.777-3.703a4.784 4.784 0 0 0-.957-6.699L13.1 9.2a1 1 0 0 0-1.2 1.6l.973.73a2.784 2.784 0 0 1 .556 3.898l-2.777 3.703a3.037 3.037 0 1 1-4.8-3.72l1.429-1.786a1 1 0 0 0-1.562-1.25l-1.43 1.787a5.037 5.037 0 0 0 .863 7.14Z"
			fill="currentColor"
		></path>
	</svg>
);

const checked = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
	</svg>
);
