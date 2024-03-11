import { useParams } from "react-router-dom";
import Head from "../../components/Head";

export const Products = () => {
    let { id } = useParams();
    return (
        <div>
            <Head idProducts = {id} />
        </div>
    );
};