import { SvgIcon } from "@mui/material";
import { ReactNode } from "react";
export const Text = () => <Icon component={text} />;
export const FormatH1 = () => <Icon component={h1} />;
export const FormatH2 = () => <Icon component={h2} />;
export const FormatH3 = () => <Icon component={h3} />;
export const FormatH4 = () => <Icon component={h4} />;
export const FormatH5 = () => <Icon component={h5} />;
export const FormatH6 = () => <Icon component={h6} />;
export const FormatQuote = () => <Icon component={quote} />;
export const FormatBold = () => <Icon component={bold} />;
export const FormatItalic = () => <Icon component={italic} />;
export const FormatStrikethrough = () => <Icon component={strikethrough} />;
export const FormatUnderlined = () => <Icon component={underlined} />;
export const FormatAlignCenter = () => <Icon component={textAlignCenter} />;
export const FormatAlignLeft = () => <Icon component={textAlignLeft} />;
export const FormatAlignRight = () => <Icon component={textAlignRight} />;
export const FormatAlignJustify = () => <Icon component={textAlignJustify} />;
export const Linked = () => <Icon component={linked} />;
export const Checked = () => <Icon component={checked} />;

export const Icon = ({ component }: { component: ReactNode }) => {
	return <SvgIcon>{component}</SvgIcon>;
};

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
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M315.077-230v-500H483q57.308 0 101.154 36.154T628-599.769q0 38.692-20.307 67.731-20.308 29.038-50.308 42.576 36.538 10.231 62.038 42.924 25.5 32.692 25.5 78.846 0 64.385-48.077 101.038Q548.769-230 491-230H315.077Zm51-47.385h122.462q46.461 0 75.038-27.961 28.577-27.962 28.577-65.116 0-37.153-28.577-65.115-28.577-27.961-75.731-27.961H366.077v186.153Zm0-232.615h114.538q39.923 0 67.616-24.692 27.692-24.693 27.692-61.846 0-37.847-28.154-62.077-28.154-24.231-66.692-24.231h-115V-510Z" />
	</svg>
);

const italic = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M231.538-230v-44.616h145.385l139.231-410.768H370.769V-730h332.308v44.616H562.308L423.077-274.616h140.769V-230H231.538Z" />
	</svg>
);

const strikethrough = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M486-184.615q-65.231 0-115-35-49.769-35-74.231-96.077l40.308-17.231q19.385 45.692 56.577 75.154 37.192 29.461 92.808 29.461 51.23 0 95.999-26.923 44.77-26.923 44.77-84.769 0-27.231-7.385-45.308-7.385-18.077-21.692-34.692h52q9.615 12.462 15.192 32.731Q670.923-367 670.923-340q0 74.462-55.346 114.923Q560.231-184.615 486-184.615ZM100-500v-40h760v40H100Zm382-278.308q53.692 0 92.039 22.885 38.346 22.884 65.346 70.654l-39.539 18.231Q584.692-694 555.577-714.307q-29.115-20.308-73.115-20.308-61.77 0-96.462 34.269T356.769-620h-43.692q-6.462-61.308 40.654-109.808 47.115-48.5 128.269-48.5Z" />
	</svg>
);

const underlined = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M227.692-190v-40h504.616v40H227.692ZM480-317.692q-85.615 0-134.308-50.308Q297-418.308 297-504.615v-302.308h45.308v303.692q0 65.231 36.461 103.308Q415.231-361.846 480-361.846q64.769 0 101.231-38.077Q617.692-438 617.692-503.231v-303.692H663v302.308q0 86.307-48.692 136.615Q565.615-317.692 480-317.692Z" />
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
		xmlns="http://www.w3.org/2000/svg"
		height="1rem"
		viewBox="0 -960 960 960"
		width="1rem"
	>
		<path d="M424.615-316.923H283.077q-67.677 0-115.377-47.687Q120-412.298 120-479.957q0-67.658 47.7-115.389 47.7-47.731 115.377-47.731h141.538v40H283.077q-50.769 0-86.923 36.154T160-480q0 50.769 36.154 86.923t86.923 36.154h141.538v40ZM340-460v-40h280v40H340Zm195.385 143.077v-40h141.538q50.769 0 86.923-36.154T800-480q0-50.769-36.154-86.923t-86.923-36.154H535.385v-40h141.538q67.677 0 115.377 47.687Q840-547.702 840-480.043q0 67.658-47.7 115.389-47.7 47.731-115.377 47.731H535.385Z" />
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
