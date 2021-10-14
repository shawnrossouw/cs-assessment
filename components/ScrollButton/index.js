import style from './style.module.css'

const ScrollDown = () => {
  return (
    <div className={style.scrollDown}>
      <button className={style.scrollBtn}>Scroll Down</button>
      <div className={style.arrows}>
        <div className={style.arrow}></div>
        <div className={style.arrow}></div>
        <div className={style.arrow}></div>
      </div>
    </div>
  )
}
export default ScrollDown