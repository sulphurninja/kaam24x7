import Link from 'next/link'
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'
import styles from './product.module.scss'

const ProductItem = ({product, handleCheck}) => {
    const { state, dispatch } = useContext(DataContext)
    const { cart, auth } = state

   
    const adminLink = () => {
        return(
            <>
                <Link href={`create/${product._id}`}>
                    <a className="btn btn-info"
                    style={{marginRight: '5px', flex: 1}}>Edit</a>
                </Link>
                <button className="btn btn-danger"
                style={{marginLeft: '5px', flex: 1}}
                data-toggle="modal" data-target="#exampleModal"
                onClick={() => dispatch({
                    type: 'ADD_MODAL',
                    payload: [{ 
                        data: '', id: product._id, 
                        title: product.title, type: 'DELETE_PRODUCT' 
                    }]
                })} >
                    Delete
                </button>
            </>
        )
    }

    return(
        <div className={styles.container} style={{ width: '18rem' }}>
            {
                auth.user && auth.user.role === 'admin' &&
                <input type="checkbox" checked={product.checked}
                className="position-absolute"
                style={{height: '20px', width: '20px'}}
                onChange={() => handleCheck(product._id)} />
            }
            <Link href={`product/${product._id}`}>
            <img className={styles.imageContainer} src={product.images[0].url} alt={product.images[0].url} />
            </Link>
            <div className={styles.textContainer}>
                <h5 className="card-title text-capitalize" title={product.title}>
                    {product.title}
                </h5>

                <p className={styles.textContainer} title={product.description}>
                    {product.description}
                </p>

                <div className={styles.priceContainer}>
                <div className={styles.prices}>
                <span className={styles.priceText}>Rs.{product.price + 300}</span>
                    <h6 className={styles.salePriceText}>Rs.{product.price}</h6>
                </div>
                </div>
             
                    
              
            </div>
        </div>
    )
}


export default ProductItem