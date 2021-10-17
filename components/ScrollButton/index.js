import style from "./style.module.css";

const ScrollDown = () => {
	return (
		<div className={style.scrollDown}>
			<button className={style.scrollBtn}>
				<a href="/#athletes">Scroll Down</a>
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
