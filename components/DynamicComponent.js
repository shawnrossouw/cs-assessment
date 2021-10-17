import SbEditable from "storyblok-react";
import Hero from "./Hero";
import Athletes from "./Athletes";
import Page from "./Page";
import Header from "./Header";

const Components = {
	hero: Hero,
	athletes: Athletes,
	"home-page": Page,
	header: Header,
};

const DynamicComponent = ({ blok }) => {
	if (typeof Components[blok.component] !== "undefined") {
		const Component = Components[blok.component];
		return (
			<SbEditable content={blok}>
				<Component blok={blok} />
			</SbEditable>
		);
	}
	return (
		<p>
			The component <strong>{blok.component}</strong> has not been created yet.
		</p>
	);
};

export default DynamicComponent;
