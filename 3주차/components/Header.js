import { useEffect, useState } from 'react';
import styles from '../styles/header.module.css';
import axios from 'axios';
import useStore from '@/libs/store';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
    // 페이지 이동을 위해서도 사용하지만 현재 페이지가 어딘지 파악하기 위해서도 사용
    const router = useRouter();
    const {changeCategory, selectedCategory} = useStore();
    // 전체 카테고리 목록
    const [categories, setCategories] = useState([]);
    // 헤더가 화면에 표시되면 카테고리 데이터 다운로드
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then((res)=>{
            // 카테고리 설정
            setCategories(res.data.slice(0, 6));
            // 초기 카테고리 설정 시 가장 처음에 있는 카테고리 활성화
            changeCategory(res.data[0]);
        })
    }, []); // 배열에 아무것도 없으면 1회만 수행
    return(
        <header className={styles.wrapper}>
            <div className={styles.container}>
                {/* 로고와 로그인 표시 */}
                <div className={styles.top}>
                    <Link href={{pathname: '/'}}>
                    <img src='/imgs/logo.png' 
                         className={styles.logo}/>
                    </Link>
                    <p className={styles.login}>로그인</p>
                </div>
                {/* 카테고리 목록 표시, 홈 화면에서만 표시됨 */}
                {router.pathname === '/'&&(
                    <div className={styles.bottom}>
                    {categories.map((category)=>(
                        <p key={category}
                           className={`${styles.item} ${category===selectedCategory && styles.active}`}
                           onClick={()=>changeCategory(category)} >
                            {category}
                            </p>
                    ))}
                </div>
                )}
            </div>
        </header>
    )
}

// 요거 무조건 해줘야됨
export default Header;