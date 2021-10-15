import style from './style.module.css'
import ScrollDown from '../ScrollButton'

const Hero = ({ blok }) => {
  // console.log(blok.subtitle.content[0])
  // blok.subtitle.content.map(item => (

  //   item.content.map(node => {
  //     console.log(node.text)
  //   })
  // ))
  return (
    <section className={style.hero}>
      <img src={blok.image.filename} alt={blok.image.alt} />
      <div className={style.heroContent}>

        {blok.title.content.map((item, k) => (
          item.content.map((node, k) => (
            <h1 key={k} dangerouslySetInnerHTML={{ __html: node.text }} />
          ))
        ))}

        {blok.subtitle.content.map((item, k) => (
          item.content.map((node, k) => (
            <p key={k} dangerouslySetInnerHTML={{ __html: node.text }} />
          ))
        ))}
      </div>
      <ScrollDown />
    </section>
  )
}
export default Hero