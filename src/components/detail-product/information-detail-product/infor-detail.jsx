import Manufacturer from "../../../assets/images/1.jpg";

const InformationTabDetailProduct = () => {
  return (
    <div className="info-tab-detail tab-pane">
      <div className="product-manufacturer">
        <a href="#">
          <img
            src={Manufacturer}
            className="img img-thumbnail manufacturer-logo"
            alt="manufacturer 1"
          />
        </a>
      </div>
      <div className="product-reference">
        <label className="label">Reference </label>
        <span itemProp="sku">demo_3</span>
      </div>
      <div className="product-quantities">
        <label className="label">In stock</label>
        <span data-stock="1200" data-allow-oosp="0">
          1200 Items
        </span>
      </div>
      <section className="product-features">
        <p className="h6">Data sheet</p>
        <dl className="data-sheet">
          <dt className="name">Composition</dt>
          <dd className="value">Cotton</dd>
          <dt className="name">Property</dt>
          <dd className="value">Long sleeves</dd>
        </dl>
      </section>
    </div>
  );
};
export default InformationTabDetailProduct;
