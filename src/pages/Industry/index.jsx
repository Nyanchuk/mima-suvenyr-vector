import { useParams } from "react-router-dom";
import Head from "../../components/Head";

export const Industry = () => {
    let { id } = useParams();
    return (
        <div>
            Отрасли
            {/* <Head idProducts = {id} /> */}
        </div>
    );
};