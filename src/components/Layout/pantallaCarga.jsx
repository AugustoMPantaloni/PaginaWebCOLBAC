import styles from "../../sass/Layout/PantallaCarga.module.scss";

const PantallaCarga = () => {
    return (
        <div className={styles.backgroundLoading}>
            <div className={styles.ring}>Cargando
                <span className={styles.loaderSpan}></span>
            </div>
        </div>
    );
}

export default PantallaCarga;
