import { useState, useEffect } from "react";
import style from "./style.module.css";
import Logo from "../Logo";
import Link from "next/link";

const Header = ({ blok }) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<header className={style.header}>
			<figure>
				<Logo />
			</figure>
			<nav>
				<button onClick={handleToggle} className={`${open ? style.close : style.open}`}>
					<span></span>
				</button>
				{blok && (
					<ul className={`${open ? `${style.show}` : ""}`}>
						{blok.menu.map((item, k) => (
							<li key={k}>
								<Link href={item.link.url}>
									<a>{item.name}</a>
								</Link>
							</li>
						))}
					</ul>
				)}
			</nav>
		</header>
	);
};
export default Header;
