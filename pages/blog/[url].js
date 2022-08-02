import Image from 'next/image'
import Layout from "../../components/Layout"
import styles from '../../styles/Entrada.module.css'
import {formatearFecha} from "../../helpers"

const EntradaBlog = ({entrada}) => {

    const { contenido, imagen, published_at, titulo} = entrada[0]

    return (
        <Layout 
            pagina={titulo}
        >
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                    <Image
                        priority='true'
                        layout='responsive'
                        width={600}
                        height={400}
                        src ={imagen.url}
                        alt={`Imagen entrada ${titulo}`}
                    />
                    <div className={styles.contenido}>
                        <p className={styles.fechaP}>{formatearFecha(published_at)}</p>
                        <p className={styles.text}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const paths = entradas.map(entrada => ({
        params:{ url:entrada.url }
    }))
    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({params:{url}}){

    const urlB = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlB)
    const entrada = await respuesta.json()

    return {
        props:{
            entrada
        }
    }
}

/*export async function getServerSideProps({query:{id}}){

    const url = `${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props:{
            entrada
        }
    }
}*/
export default EntradaBlog