import styles from '@/styles/product.module.css';
import Link from 'next/link';
/*
brand
: "Apple"
category: 
"smartphones"
description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ..."
discountPercentage: 17.94
id: 2
images: (4) ['https://i.dummyjson.com/data/products/2/1.jpg', 'https://i.dummyjson.com/data/products/2/2.jpg', 'https://i.dummyjson.com/data/products/2/3.jpg', 'https://i.dummyjson.com/data/products/2/thumbnail.jpg']
price
: 899
rating: 
4.44
stock: 34
thumbnail: 
"https://i.dummyjson.com/data/products/2/thumbnail.jpg"
title: 
"iPhone X"
*/

function Product({product}) {
    // 클릭하면 /products/[id]/index.js 파일로 이동
    return(
        <Link href={{pathname:`/products/${product.id}`}}>
        <div className={styles.container}>
            <img className={styles.thumbnail}
                 src={product.thumbnail} />
            <div className={styles.content}>
                <p className={styles.title}>{product.title}</p>
                <span>브랜드: {product.brand}</span>
                <p className={styles.price}>${product.price.toLocaleString()}</p>
            </div>
        </div>
        </Link>
    )
}

export default Product;