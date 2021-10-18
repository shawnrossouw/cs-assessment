import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Course Studio Assessment</title>
				<meta name="Assessment for Course Studio" content="Next.js app with storyblok" />
				<meta name="keywords" content="Course Studio Assessment" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;
