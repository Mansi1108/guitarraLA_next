import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
        <main className='contenedor'> 
          <h2 className='heading'> Nosotros </h2>

          <div className={styles.contenido}>
              <Image
                layout='responsive'
                width={600}
                height={400}
                src ="/img/nosotros.jpg"
                alt='Imagen sobre nosotros'
              />
              <div>
                <p>Lorem ipsum dolor sit amet. Et impedit sint et consequuntur nesciunt est sint nostrum sed voluptatem dolorem et commodi repudiandae? Et voluptatem molestiae et doloribus mollitia ut obcaecati illo non illo praesentium id excepturi nesciunt. Aut consequatur iste et mollitia quia rem quia assumenda.</p>

                <p>Aut dolore laborum et nostrum consectetur sit iste unde. Et illo esse et commodi perspiciatis eum voluptatem labore sit molestiae adipisci et recusandae amet. Cum modi voluptas eum perspiciatis magnam et explicabo autem rem iusto quia est voluptas asperiores et omnis repudiandae est omnis quia.</p>
              </div>
          </div>         
        </main>
    </Layout>
  )
}

export default Nosotros
