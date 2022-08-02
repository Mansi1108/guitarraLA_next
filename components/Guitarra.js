import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
    const { descripcion, imagen, nombre, precio, url } = guitarra
    return (
        <div className={styles.guitarra}>
            <Image 
                layout='responsive'
                width={200}
                height= {350}
                src="https://res.cloudinary.com/dsck8qdmt/image/upload/v1659377200/guitarra_11_02dcd59d17.jpg"
                alt={`Imagen Guitarra ${nombre}`}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>
                        Ver Producto
                    </a>
                </Link>
            </div>
        </div>
    )
}


export default Guitarra