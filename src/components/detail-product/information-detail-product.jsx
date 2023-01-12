import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import DescriptionTabDetailProduct from "./information-detail-product/description-tab";
import ExtraTabDetailProduct from "./information-detail-product/extra-tab-detail-product";
import InformationTabDetailProduct from "./information-detail-product/infor-detail";
import ReviewTabDetailProduct from "./information-detail-product/review-tab-detail";

const InformationDetailProduct = ({data}) => {
  return (
    <div className="col-md-12 infortab">
      <div className="tabs">
        <Tabs>
          <div className="nav nav-tabs">
            <TabList>
              <Tab className="nav-item">Description</Tab>
              <Tab className="nav-item">Product details</Tab>
              <Tab className="nav-item">Extra tab</Tab>
              <Tab className="nav-item">Reviews</Tab>
            </TabList>
          </div>
          <TabPanel>
            <DescriptionTabDetailProduct data={data}/>
          </TabPanel>
          <TabPanel>
            <InformationTabDetailProduct />
          </TabPanel>
          <TabPanel>
            <ExtraTabDetailProduct />
          </TabPanel>
          <TabPanel>
            <ReviewTabDetailProduct />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
export default InformationDetailProduct;
