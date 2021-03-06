import { useState, useContext, useEffect } from 'react'
import styles from "./categories.module.scss";
import Link from "next/link";
import { FaHandsHelping } from "react-icons/fa"
import {useRouter} from 'next/router'


const CategoryItem =  ({ name, link, emoji }) => {
  return (
    <li className={styles.categoryItem}>
      <Link href={link || "/"}>
        <a>
          <span className={styles.emoji}>{emoji}</span>
          <span className={styles.categoryName}>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default function CategoriesBar () {
 
  const [category, setCategory] = useState('')



  const router = useRouter()

  const handleCategory = (e) => {
    setCategory(e.target.value)
    filterSearch({router, category: e.target.value})
}
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Services</h2>
      <ul className={styles.categories}>
      
        <CategoryItem name="Home" emoji="โก" link="/" is-active />
        <CategoryItem   name="Cleaning" emoji="๐งน" link="/?category=629baa8890eb1b1f339d4524" />
        <CategoryItem name="Mehndi" emoji="๐ง" link="/?category=629baa3e90eb1b1f339d451f" />
        <CategoryItem
          name="Photography"
          emoji="๐ท"
          link="/?category=629ba89990eb1b1f339d4519"
        />
        <CategoryItem
          name="Sofa"
          emoji="๐๏ธ"
          link="/?category=629b8a940cc29bc4533ef490"
        />
        <CategoryItem
          name="Furnishing and Repair"
          emoji="๐ช"
          link="/?category=62835561feab0226b0bbd278"
        />
        <CategoryItem
          name="Air Conditioner"
          emoji="๐"
          link="/?category=629e56ebe19e0a2f74b91edb"
        />
             <CategoryItem
          name="About Us"
          emoji="โน๏ธ"
          link="/"
        />
      </ul>
      <div className={styles.helpContainer}>
        <div className={styles.helpIcon}>
          <FaHandsHelping width={18} height={18} />
        </div>
        <span>Help Center</span>
      </div>
    </div>
  );
}
