import { useParams } from "react-router-dom";
import HeadProduct from "../../components/HeadProducts";

export const Products = () => {
    let { id } = useParams();
    return (
        <div>
            <HeadProduct idProducts = {id} />

        </div>
    );
};