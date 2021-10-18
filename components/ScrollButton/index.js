import style from "./style.module.css";
import Link from "next/link";

const ScrollDown = () => {
	return (
		<div className={style.scrollDown}>
			<button className={style.scrollBtn}>
				<Link href="/#athletes">
					<a>Scroll Down</a>
				</Link>
			</button>
			<div className={style.arrows}>
				<div className={style.arrow}></div>
				<div className={style.arrow}></div>
				<div className={style.arrow}></div>
			</div>
		</div>
	);
};
export default ScrollDown;
