import { useQuery } from "@apollo/client";
import CATEGORIES from "../graphql/categories";

const Categories = () => {
    const { loading, error, data } = useQuery(CATEGORIES);
    var categories;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data){
        categories = data.productCategories.nodes;
        return (
            <ul>
                {categories.map((e,i)=>(
                    <li key={i}>{e.name}</li>
                ))}
            </ul>
        );
    }
};
export default Categories;
