import style from "./style.module.css";
import ScrollDown from "../ScrollButton";
import { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Hero = ({ blok }) => {
	const titleVariants = {
		visible: { opacity: 1, transition: { duration: 1, delay: 0.8 } },
		hidden: { opacity: 0 },
	};
	const paragraphVariants = {
		visible: { opacity: 1, transition: { duration: 2, delay: 1.2 } },
		hidden: { opacity: 0 },
	};
	const [elementTop, setElementTop] = useState(0);
	const ref = useRef(null);
	const { scrollY } = useViewportScroll();
	const y = useTransform(scrollY, [elementTop, elementTop + 10], [0, -2], {
		clamp: false,
	});

	useEffect(() => {
		setElementTop(5);
	}, []);

	return (
		<section className={style.hero}>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.6 } }}
				src={blok.image.filename}
				alt={blok.image.alt}
			/>
			<div className={style.heroContent}>
				{blok.title.content.map((item) =>
					item.content.map((node, k) => (
						<motion.div key={k} variants={titleVariants} animate="visible" initial="hidden" ref={ref} style={{ y }}>
							<h1 dangerouslySetInnerHTML={{ __html: node.text }} />
						</motion.div>
					))
				)}
				{blok.subtitle.content.map((item) =>
					item.content.map((node, k) => (
						<motion.article
							key={k}
							variants={paragraphVariants}
							animate="visible"
							initial="hidden"
							ref={ref}
							style={{ y }}>
							<p dangerouslySetInnerHTML={{ __html: node.text }} />
						</motion.article>
					))
				)}
			</div>
			<ScrollDown />
		</section>
	);
};
export default Hero;
