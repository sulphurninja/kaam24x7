import React, {useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaAlignRight, FaSearch, FaAngleDown } from 'react-icons/fa'
import Cookie from 'js-cookie';
import styles from "./header.module.scss";
import { DataContext } from "../store/GlobalState";
import {HiOutlineShoppingCart} from 'react-icons/hi'
import filterSearch from '../utils/filterSearch';





import { useRouter } from "next/router";
import error from "mongoose/lib/error";


export default function NavBar() {
  const [showHeader, setShowHeader] = useState({
    transform: "translate3d(100vw, 0, 0)",
  });
  const [input, setInput] = useState(null);
  const [search, setSearch] = useState('')
  const {state, dispatch} = useContext(DataContext);
  const router = useRouter()
    const { auth, cart } = state


    const isActive = (r) => {
        if(r === router.pathname){
            return " active"
        }else{
            return ""
        }
    }


  const handleLogout = () => {
    Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
    return router.push('/')
}

const adminRouter = () => {
  return(
      <>
      <Link href="/users">
          Users
      </Link>
      <Link href="/create">
          <a className={styles.searchInput}>Products</a>
      </Link>
      <Link href="/categories">
          <a className="dropdown-item">Categories</a>
      </Link>
      </>
  )
}
const loggedRouter = () => {
  return(
      <div className={styles.profileContainer}>
       <img src={auth.user.avatar} className={styles.profilePhoto} alt={auth.user.avatar} 
              style={{
                  borderRadius: '50%', width: '30px', height: '30px',
                  transform: 'translateY(-3px)', marginRight: '3px'
              }} /> {auth.user.name}
          <a className={styles.profilePhoto} >
             
          </a>

          <div className={styles.rightMenu} >
              <Link href="/profile">
                  <a className={styles.menuContent}>Profile</a>
              </Link>
              {
                  auth.user.role === 'admin' && adminRouter()
              }
              <div className="dropdown-divider"></div>
              <button className={styles.menuContent} onClick={handleLogout}>Logout</button>
          </div>
      </div>
  )
}

useEffect(() => {
  filterSearch({router, search: search ? search.toLowerCase() : 'all'})
},[search])




  return (
    <div>

    <ul className={styles.headersocialcontainer}>

      <li>
        <a href="#" className={styles.sociallink}>
         
        </a>
      </li>

      <li>
        <a href="#" className={styles.sociallink}>
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" className={styles.sociallink}>
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" className={styles.sociallink}>
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>

    </ul>

    <div className={styles.headeralertnews}>
      
        <b> Not Just "Urban" Serving every Household!</b>
       
       
      
       
    
    </div>

    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.logo}><img src="/assets/logo.png" width={150} height={60}/></a>
        </Link>
        <div className={styles.rightContentMobile}>
          <Link href="/cart">
            <div className={styles.cartContainer}>
              <HiOutlineShoppingCart className={styles.cartIcon + isActive('/cart')} />
              {cart.length}
              <div>
                
              </div>
            </div>
          </Link>
          <div className={styles.profileContainer}>
            <FaAlignRight
              width={30}
              height={30}
              className={styles.menuIcon}
              onClick={() =>
                setShowHeader({ transform: "translate3d(0vw, 0, 0)" })
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuContent} style={showHeader}>
         
            <>
              <Link href="/account">My Account</Link>
              <Link href="/order/">My Orders</Link>
              
              
            </>
       
            <>
            
              <Link href="/register">Register</Link>
              <Link href="/signin">Login</Link>
              <a onClick={handleLogout}>Logout</a>
            </>
          )
        </div>
        <div
          className={styles.background}
          style={showHeader}
          onClick={() =>
            setShowHeader({ transform: "translate3d(100vw, 0, 0)" })
          }
        />
      </div>
      <div className={styles.searchContainer}>
       
      <form autoComplete="off" className="mt-2 col-md-8 px-0">
                <input type="text" className="form-control" list="title_product"
                value={search.toLowerCase()} onChange={e => setSearch(e.target.value)} />
            </form>

        {/* <a className={styles.searchInput} onClick={handleLogout}>Logout</a> */}
      </div>
      <div className={styles.rightContent}>
        <Link href="/cart">
          <div className={styles.cartContainer}>
            <HiOutlineShoppingCart width={100} height={250} className={styles.cartIcon + isActive('/cart')} />
            {cart.length}
          </div>
        </Link>
          
        <Link href="/profile">
          <div className={styles.profileContainer}>
            <img
              src={"https://res.cloudinary.com/kaam-24x7/image/upload/v1652708159/user_tmpyi7.png" }
             
              className={styles.profilePhoto}
              loading="lazy"
            />
            <span>
              Hello{" "}
              <span style={{ fontWeight: "normal" }}>
                {"User"}
              </span>
            </span>
            <FaAngleDown width={10} height={10} className={styles.arrowIcon} />
            <div className={styles.dropdown}>
              <div className={styles.arrowUp} />
              <div className={styles.dropdownMenu}>
              
                  <>
                    <Link href="/profile">My Account</Link>
                    <Link href="/order/">My Orders</Link>
                   
                  </>
               
                  <>
                  
                    <Link href="/register">Register</Link>
                    {
                        Object.keys(auth).length === 0 
                        ? <li className={styles.menuContent}>
                            <Link href="/signin">
                                <a className={styles.menuContent + isActive('/signin')}>
                                    Sign in
                                </a>
                            </Link>
                        </li>
                        : loggedRouter()
                    }
                    
                  </>
                
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
    </div>
  );
}