import { useQuery } from "@apollo/client";
import CATEGORIES from "../graphql/categories";
import PRODUCTS from "../graphql/products";

const Categories = () => {
    const { data: dataR, error: errorR, loading: landingR } = useQuery(CATEGORIES);
    const { data: dt, error: ler, loading: ld } = useQuery(PRODUCTS)


    if (ld) return <p>Loading...</p>;
    if (ler) return <p>Error : {ler.message}</p>;
    if (dt) {
        // console.log(dt);
    }


    var categories;
    if (landingR) return <p>Loading...</p>;
    if (errorR) return <p>Error : {errorR.message}</p>;
    if (dataR) {
        categories = dataR.productCategories.nodes;
        // console.log(dataR);
        return (
            <ul>
                {categories.map((e, i) => (
                    <li key={i}>{e.name}</li>
                ))}
            </ul>
        );
    }
};
export default Categories;
