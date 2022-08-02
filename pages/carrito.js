import { useState, useEffect } from 'react'
import Layout from "../components/Layout"
import Image from "next/image"
import styles from '../styles/Carrito.module.css'

const Carrito = ({carrito, actulizarCantidad, eliminarProducto}) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
      const calculoTotal = carrito.reduce((total, producto)=> total + (producto.cantidad * producto.precio), 0)
      setTotal(calculoTotal)
    }, [carrito])
    

    return (
        <Layout
            pagina={'Carrito de Compras'}
        >
            <h1 className="heading">Carrito</h1>
            <main className={`${styles.contenido} contenedor`}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito.lenght === 0 ? 'Carrito Vacio' : (
                        carrito.map( producto => (
                            <div 
                            key={producto._id} 
                            className={styles.producto}>
                                <div>
                                    <Image
                                        layout="responsive"
                                        width={250}
                                        height={500}
                                        src={producto.imagen}
                                        alt={producto.nombre}                
                                    />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <div  className={styles.cantidad}>
                                        <p>Cantidad:</p>   
                                        <select 
                                            value={producto.cantidad}
                                            className={styles.select}
                                            onChange={(e)=> actulizarCantidad({
                                                cantidad: e.target.value,
                                                id: producto._id
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}> Precio Unitario: $ 
                                        <span>{producto.precio}</span>
                                    </p>
                                    <p className={styles.subtotal}>SubTotal: $
                                        <span>{producto.precio * producto.cantidad}</span>
                                    </p>
                                    <button
                                        type="button"
                                        className={styles.eliminar}
                                        onClick={() => eliminarProducto(producto._id)}
                                    >X</button>
                                </div>

                            </div>
                            
                        )  
                        

                    ))}
                    
                </div>
                <div className={styles.resumen}>
                    <h3>Resumen del Pedido</h3>
                    {total > 0 ? (
                        <>
                            <p>Resumen del pedido</p>
                            <p className={styles.total}>Total a Pagar: ${total}</p>
                        </>              
                    ): (
                    <p>No hay productos en el carrito</p>
                    )}
                </div>
            </main>
        </Layout>
    )
}

export default Carrito