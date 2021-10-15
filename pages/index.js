import Layout from '../components/Layout'
import Storyblok, { useStoryblok } from './lib/storyblok'
import DynamicComponent from '../components/DynamicComponent'

const Home = ({ story, preview }) => {

  const enableBridge = true;
  story = useStoryblok(story, enableBridge)
  return (
    <Layout>
      <DynamicComponent blok={story.content} />
    </Layout>
  )
}
export default Home

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home"
  // load the published content outside of the preview mode
  let sbParams = {
    version: "published", // or 'draft'
  }

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft"
    sbParams.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      story: data ? data.story : null,
      preview
    },
    revalidate: 3600, // revalidate every hour
  }
}
