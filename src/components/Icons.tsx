import { SvgIcon, SvgIconProps, svgIconClasses } from "@mui/material";
import { styled } from "@mui/system";
export const Text = () => <Icon children={text} />;
export const FormatH1 = () => <Icon children={h1} />;
export const FormatH2 = () => <Icon children={h2} />;
export const FormatH3 = () => <Icon children={h3} />;
export const FormatH4 = () => <Icon children={h4} />;
export const FormatH5 = () => <Icon children={h5} />;
export const FormatH6 = () => <Icon children={h6} />;
export const FormatH7 = () => <Icon children={h7} />;
export const FormatH8 = () => <Icon children={h8} />;
export const FormatH9 = () => <Icon children={h9} />;
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
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="TextOutlined"
	>
		<path
			d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V4h-7v16h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V4H4v3a1 1 0 1 1-2 0V3Z"
			fill="currentColor"
		></path>
	</svg>
);
const h1 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H1Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm15.604 9.91a.4.4 0 0 1-.585-.355c0-.533 0-.774.004-1.582a.4.4 0 0 1 .203-.347l2.769-1.568A.39.39 0 0 1 20.197 9h1.404c.234 0 .423.21.423.468V19.95c0 .593-.483 1.073-1.075 1.073a1.07 1.07 0 0 1-1.07-1.073v-8.228l-2.275 1.19Z"
			fill="currentColor"
		></path>
	</svg>
);

const h2 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H2Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm20.993 16.872c0-.561-.455-1.015-1.017-1.015h-3.121l3.407-4.272a3.35 3.35 0 0 0 .731-2.126c-.01-.992-.347-1.816-1.005-2.464-.647-.651-1.492-.984-2.523-.995-.931.011-1.72.34-2.356.982-.37.386-.941 1.044-.941 1.602 0 .591.48 1.07 1.07 1.07.563 0 .769-.347.993-.726.06-.101.12-.204.19-.304a1.36 1.36 0 0 1 .186-.214c.262-.252.584-.376.982-.376.447.01.784.15 1.02.423.234.28.35.606.35.987 0 .146-.019.303-.057.471-.05.152-.156.341-.315.548l-4.402 5.506a.4.4 0 0 0-.087.25v1.022c0 .221.267.65.606.65h5.272c.562 0 1.017-.457 1.017-1.019Z"
			fill="currentColor"
		></path>
	</svg>
);

const h3 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H3Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm21 14.296c0-.51-.108-.998-.324-1.461a2.923 2.923 0 0 0-.877-1.044c.377-.297.65-.63.816-1.001.17-.44.252-.886.252-1.348a3.48 3.48 0 0 0-.943-2.385C21.274 9.363 20.398 9.01 19.31 9a3.179 3.179 0 0 0-2.251.932c-.349.336-.848.879-.848 1.384a1 1 0 0 0 1 1c.482 0 .767-.352 1.043-.692l.09-.11c.057-.07.121-.132.192-.185.256-.2.53-.296.834-.296.431.01.779.144 1.049.405.267.267.406.61.415 1.04 0 .417-.133.75-.4 1.008-.335.335-.766.387-1.212.387a.958.958 0 1 0 0 1.917h.088c.452-.002.824-.003 1.205.353.29.277.442.674.452 1.201-.01.51-.16.894-.451 1.162-.296.296-.65.44-1.076.44-.4 0-.712-.107-.944-.316l-.008-.008a8.055 8.055 0 0 1-.213-.207c-.1-.099-.178-.207-.254-.31-.193-.264-.366-.5-.81-.5a1 1 0 0 0-1 1c0 .574.543 1.19.954 1.533.635.53 1.35.84 2.174.84 1.057-.01 1.93-.35 2.609-1.018.69-.651 1.04-1.545 1.052-2.664Z"
			fill="currentColor"
		></path>
	</svg>
);

const h4 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H4Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm19.681 7.19c0-.658-.486-1.19-1.143-1.19-.402 0-.824.204-1.043.542l-4.428 6.821a.266.266 0 0 0-.043.145v1.62c0 .22.18.4.4.4h4.404v1.363c0 .512.43.927.941.927a.914.914 0 0 0 .912-.927v-1.363h.4a.954.954 0 0 0 .943-.956.934.934 0 0 0-.944-.932h-.399v-6.45Zm-4.53 6.45 2.677-4.177v4.177H17.15Z"
			fill="currentColor"
		></path>
	</svg>
);

const h5 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H5Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm17.758 9.728a2.98 2.98 0 0 0-1.252.258c-.264.108-.509.26-.735.457l.21-2.395h3.422c.566 0 1.024-.475 1.024-1.04A1.01 1.01 0 0 0 21.403 9h-4.666a.4.4 0 0 0-.398.366l-.5 5.867a.4.4 0 0 0 .398.434l1.228.002c.116 0 .22-.069.278-.17.16-.275.36-.479.61-.622.258-.154.582-.23.975-.23.57 0 .986.19 1.262.574.301.403.46.973.46 1.69 0 .648-.18 1.163-.526 1.547a1.698 1.698 0 0 1-1.29.558c-.468 0-.841-.123-1.105-.351-.176-.154-.34-.508-.444-.858l-.004.001a.973.973 0 1 0-1.829.653c.218.65.557 1.251.992 1.64.657.595 1.458.899 2.377.899 1.004 0 1.874-.355 2.61-1.064.796-.795 1.19-1.807 1.19-3.04 0-1.266-.303-2.29-.903-3.037-.601-.75-1.397-1.131-2.36-1.131Z"
			fill="currentColor"
		></path>
	</svg>
);

const h6 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H6Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm17.47 6.843c1.379 0 2.463.659 2.995 1.64l.001.003c.116.214.219.404.219.638 0 .506-.41.915-.915.915-.477 0-.69-.327-.909-.662a3.585 3.585 0 0 0-.212-.304c-.262-.33-.675-.527-1.18-.527-.586 0-1.055.348-1.402.977-.312.527-.483 1.181-.518 1.975.234-.28.509-.498.825-.657.39-.21.84-.309 1.364-.309.989 0 1.784.34 2.378 1.027.594.685.887 1.568.887 2.627 0 1.081-.344 1.986-1.027 2.691a3.391 3.391 0 0 1-2.52 1.064c-1.23 0-2.183-.487-2.834-1.448-.637-.925-.946-2.187-.946-3.812 0-1.732.332-3.125 1.008-4.195.675-1.09 1.612-1.643 2.785-1.643Zm-.068 5.426c-.55 0-.958.171-1.249.523-.298.335-.45.82-.45 1.452 0 .607.16 1.081.475 1.42.318.342.719.511 1.224.511.515 0 .915-.18 1.233-.55.32-.37.48-.847.48-1.44 0-.582-.155-1.048-.45-1.393-.315-.352-.727-.523-1.263-.523Z"
			fill="currentColor"
		></path>
	</svg>
);

const h7 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H7Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm15.088 8.14a1.073 1.073 0 0 1-1.063-1.074c0-.587.476-1.053 1.064-1.053h5.535c.22 0 .4.18.4.4v1.405l-3.804 9.49c-.16.398-.62.658-1.049.658-.743 0-1.173-.753-.893-1.441l3.409-8.385h-3.599Z"
			fill="currentColor"
		></path>
	</svg>
);

const h8 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H7Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm15.088 8.14a1.073 1.073 0 0 1-1.063-1.074c0-.587.476-1.053 1.064-1.053h5.535c.22 0 .4.18.4.4v1.405l-3.804 9.49c-.16.398-.62.658-1.049.658-.743 0-1.173-.753-.893-1.441l3.409-8.385h-3.599Z"
			fill="currentColor"
		></path>
	</svg>
);

const h9 = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="H9Outlined"
	>
		<path
			d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm20.07 7.55C21.406 9.518 20.43 9 19.172 9c-1.043 0-1.914.383-2.606 1.152-.693.754-1.042 1.725-1.042 2.9 0 1.15.296 2.083.9 2.802.61.756 1.442 1.14 2.459 1.14a2.96 2.96 0 0 0 1.399-.331c.309-.17.588-.408.836-.712-.038.842-.217 1.555-.532 2.14-.371.667-.84.996-1.414.996-.774 0-1.126-.283-1.59-.772-.247-.26-.599-.518-.937-.518-.536 0-.832.34-.832.875 0 .28.371.856.56 1.033.81.935 2.043 1.316 2.785 1.271 1.192 0 2.155-.598 2.86-1.774.686-1.167 1.034-2.691 1.034-4.526 0-1.751-.324-3.12-.982-4.126Zm-4.113.945c.323-.394.742-.59 1.27-.59.506 0 .925.185 1.246.549.326.37.487.869.487 1.535 0 .661-.159 1.183-.466 1.576-.31.365-.733.556-1.267.556-.548 0-.97-.19-1.27-.559-.323-.366-.478-.86-.478-1.51 0-.653.157-1.164.478-1.556Z"
			fill="currentColor"
		></path>
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
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		data-icon="TypographyOutlined"
	>
		<path
			d="M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Zm-1 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
			fill="currentColor"
		></path>
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
