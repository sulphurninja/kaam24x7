import React, {useState, useEffect} from 'react'
import filterSearch from '../utils/filterSearch'
import {getData} from '../utils/fetchData'
import {useRouter} from 'next/router'
import styles from './filter.module.scss'


const Filter = ({state}) => {
    
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')

    const {categories} = state

    const router = useRouter()


    const handleCategory = (e) => {
        setCategory(e.target.value)
        filterSearch({router, category: e.target.value})
    }

    const handleSort = (e) => {
        setSort(e.target.value) 
        filterSearch({router, sort: e.target.value})
    }

 

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <select className={styles.container}
                value={category} onChange={handleCategory}>

                    <option value="all">All Products</option>

                    {
                        categories.map(item => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))
                    }
                </select>
            </div>

           

            <div className={styles.container}>
                <select className={styles.container}
                value={sort} onChange={handleSort}>
                     <option value="-createdAt">Latest</option>
                     <option value="oldest">Oldest</option>
                     <option value="-sold">Trending</option>
                     <option value="-price">Price: High-Low</option>
                     <option value="price">Price: Low-High</option>

                </select>
            </div>


        </div>
    )
}

export default Filter
