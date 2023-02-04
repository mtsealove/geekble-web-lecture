import Product from "@/components/Product";
import useStore from "@/libs/store"
import axios from "axios";
import { useEffect, useState } from "react";
import styles from '../styles/index.module.css';


export default function Home() {
  const {selectedCategory} = useStore();
  const [products, setProducts] = useState([]);
  // 카테고리 변경 시에 데이터 다운로드
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/${selectedCategory}`)
    .then((res)=>{
      console.log(res.data.products);
      // 상품 목록 변경
      setProducts(res.data.products);
    }).catch(()=>{
      // 데이터 다운 중 오류가 발생했을 때 수행
    });
  }, [selectedCategory]);
  return (
    <main className={styles.container}>
      {products.map((product)=>(
        <Product key={`product ${product.id}`}
                 product={product} />
      ))} 
    </main>
  )
}
