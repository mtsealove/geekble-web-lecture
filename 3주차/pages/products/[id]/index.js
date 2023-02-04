import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../../styles/product.detail.module.css';
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

function ProductPage() {
    // [id] 의 값 가져오기
    const router = useRouter();
    const {id} = router.query;
    const [product, setProduct] = useState(undefined);
    // 상품 데이터 조회
    useEffect(()=>{
        // id 값이 전달되었을 떄 수행됨
        if(id) {
            axios.get(`https://dummyjson.com/products/${id}`)
            .then((res)=>{
                console.log(res.data);
                setProduct(res.data);
            });
        }
    }, [id]);
    //  구매하기 버튼클릭
    function onBtnClick() {
        window.alert('팔아주셔서 감사합니다');
    }
    // 상품 데이터가 로드 되기 전까지 이거 안보여줌
    if(product) {
        return(
            <main className={styles.container}>
                {/* 상단 간단 설명 */}
                <div className={styles.top}>
                    <img src={product.thumbnail}
                    className={styles.thumbnail}
                        />
                    <div>
                        <h1>{product.title}</h1>
                        <p>${product.price.toLocaleString()}</p>
                        <p>{product.description}</p>
                        <button className={styles.btnPurchase}
                                onClick={onBtnClick}>
                            구매하기
                        </button>
                    </div>
                </div>
                {/* 여타 쇼핑몰처럼 이미지 배치 */}
                <div className={styles.bottom}>
                    {product.images.map((img)=>(
                        <img src={img}
                             alt=''
                             key={`img ${img}`}
                             className={styles.contentImg}
                              />
                    ))}
                </div>
            </main>
        )
    }
    return(
        <div>
            <p>로딩중이니 좀만 기다리셈</p>
        </div>
    )
};

export default ProductPage;