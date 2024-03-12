import { useParams } from "react-router-dom";
import styles from './style.module.css';
import Head from "../../components/Head";
import FooterBlock from "../../components/FooterBlock";
import ProductMain from "../../components/ProductsMain";

// Здесь происходит апи-запрос к серверу по id
// Получаемый массив данных прокидывается в хедер и бади
// Отображение контента 

export const Products = () => {
    let { id } = useParams();
    return (
        <div>
            <Head idProducts = {id} />
            <div>
                <section className={styles.section__info}>
                    <span></span>
                    <span></span>
                </section>
            </div>
            {/* <ProductMain idProducts = {id} /> */}
            <FooterBlock />
        </div>
    );
};