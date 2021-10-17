import Layout from "../components/Layout";
import Storyblok, { useStoryblok } from "./lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";

const Home = ({ story, preview }) => {
	const enableBridge = true;
	story = useStoryblok(story, enableBridge);
	return (
		<Layout>
			<DynamicComponent blok={story.content} />
		</Layout>
	);
};
export default Home;

export async function getStaticProps({ preview = false }) {
	let slug = "home";
	let sbParams = {
		version: "published", // or 'draft'
	};

	if (preview) {
		sbParams.version = "draft";
		sbParams.cv = Date.now();
	}

	let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : null,
			preview,
		},
		revalidate: 3600,
	};
}
