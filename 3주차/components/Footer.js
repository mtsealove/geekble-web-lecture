import styles from '../styles/footer.module.css';

function Footer () {
    return(
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.name}>긱블샵</p>
                <ul className={styles.list}>
                    <li>개인정보처리방침</li>
                    <li>서비스이용약관</li>
                    <li>CX: rani@geekble.kr</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;