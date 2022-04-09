import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="text" placeholder="file path"/>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="name" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="enter a number" />
        </div>
        <div className="addProductItem">
          <label>Count</label>
          <input type="text" placeholder="enter a number" />
        </div>
        <div className="addProductItem">
          <label>Discount</label>
          <input type="text" placeholder="enter a number" />
        </div>
        <div className="addProductItem">
          <label>Descrtiption</label>
          <input type="text" placeholder="descrption" />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input type="text" placeholder="enter a color" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
