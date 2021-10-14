import style from './style.module.css'
import ScrollDown from '../ScrollButton'

const Hero = () => {
  return (
    <section className={style.hero}>
      <img src="./hero.jpg" alt="" />
      <div className={style.heroContent}>
        <h1>LOREM IPSUM. <span>DOLORE AMET.</span></h1>
        <p><span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <ScrollDown />
    </section>
  )
}
export default Hero