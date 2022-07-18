import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'
import CategoriesBar from './Categories.js'
import styles from './layout.module.scss'

function Layout({children, noCategories}) {
    return (
        <div className={styles.container}>
        <div className={styles.content}>
            <NavBar />
            <Notify />
            <Modal />
            <div className={styles.main}>
            {!noCategories && <CategoriesBar />}
            {children}
        </div>
        </div>
        </div>

    )
}

export default Layout
