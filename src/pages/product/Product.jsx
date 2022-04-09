import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          {/* <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.name}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product.id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">price:</span>
                      <span className="productInfoValue">{product.price}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">count:</span>
                      <span className="productInfoValue">{product.count}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">color:</span>
                      <span className="productInfoValue">{product.color}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">descprition:</span>
                      <span className="productInfoValue">{product.description}</span>
                  </div>
              </div>
          </div> */}
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  {/* <label>Product Name</label>
                  <input type="text" placeholder={product.name} />
                  <label>Price</label>
                  <input type="text" placeholder={product.price} />
                  <label>Description</label>
                  <input type="text" placeholder={product.description} />
                  <label>Color</label>
                  <input type="text" placeholder={product.color} />
                  <label>Count</label>
                  <input type="text" placeholder={product.count} />
                  <label>Image</label>
                  <input type="text" placeholder={product.img} />
                  <label>Discount</label>
                  <input type="text" placeholder={product.discount} /> */}
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      {/* <img src={product.img} alt="" className="productUploadImg" /> */}
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
