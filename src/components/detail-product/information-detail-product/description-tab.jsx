import { Markup } from "interweave";


const DescriptionTabDetailProduct = ({data}) => {
    return(
        <div className="tab-pane descriptab">
            <Markup content={data.description} />
        </div>
    )
}
export default DescriptionTabDetailProduct;