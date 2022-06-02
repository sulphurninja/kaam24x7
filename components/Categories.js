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
      
        <CategoryItem name="Home" emoji="⚡" link="/" is-active />
        <CategoryItem   name="Men" emoji="👚" link="/?category=6288f106efb8cf1edc9c57fd" />
        <CategoryItem name="Women" emoji="👠" link="/?category=6288f113efb8cf1edc9c57fe" />
        <CategoryItem
          name="Electronics"
          emoji="👜"
          link="/?category=6288f11defb8cf1edc9c57ff"
        />
        <CategoryItem
          name="Household"
          emoji="🤸"
          link="/?category=6288f126efb8cf1edc9c5800"
        />
        <CategoryItem
          name="Massage & Spa"
          emoji="🎁"
          link="/category/gifts_and_living"
        />
        <CategoryItem
          name="About Us"
          emoji="💎"
          link="/category/inspiration"
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
