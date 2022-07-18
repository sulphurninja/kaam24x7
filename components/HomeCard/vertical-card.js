import React from "react";

import styles from "./vertical.module.scss";

import Link from "next/link";

export default function VerticalCard() {
  return (

      <div
        className={styles.verticalCard}
        style={{border: 1 && "2px solid #eee",}}>
        
          <button className={styles.favContainer}>
           
          </button>
        
        <div className={styles.imageContainer}>
         <img className={styles.image} src="/assets/sofa.png" loading="lazy" />
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.brandText}>Sofa Repair</h4>
          
      
            <div className={styles.priceContainer}>
              <div className={styles.prices}>
                <span className={styles.priceText}>Rs. 500</span>
                <span className={styles.salePriceText}>Rs.200</span>
              </div>
            </div>
    
        </div>
      </div>

  );
}