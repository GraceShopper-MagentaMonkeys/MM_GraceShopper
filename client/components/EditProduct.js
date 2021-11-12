import React from "react";
import { updateProduct, deleteProduct } from "../store/all-products";
import { fetchSingleProduct } from "../store/single-product";
import { connect } from "react-redux";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.singleProduct.singleProductReducer.name,
      price: this.props.singleProduct.singleProductReducer.price,
      description: this.props.singleProduct.singleProductReducer.description,
      quantity: this.props.singleProduct.singleProductReducer.quantity,
      imageUrl: this.props.singleProduct.singleProductReducer.imageUrl,
      category: this.props.singleProduct.singleProductReducer.category,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { productId } = this.props.match.params;
    this.props.fetchSingleProduct(productId);
  }
  componentDidUpdate(previousProps) {
    if (
      previousProps.singleProduct.productId !==
      this.props.singleProduct.productId
    )
      this.setState({
        name: this.props.singleProduct.singleProductReducer.name,
        price: this.props.singleProduct.singleProductReducer.price,
        description: this.props.singleProduct.singleProductReducer.description,
        quantity: this.props.singleProduct.singleProductReducer.quantity,
        imageUrl: this.props.singleProduct.singleProductReducer.imageUrl,
        category: this.props.singleProduct.singleProductReducer.category,
      });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProduct({ ...this.props.singleProduct, ...this.state });
  }
  render() {
    const { name, price, description, quantity, imageUrl, category } =
      this.state;
    const { handleSubmit, handleChange } = this;
    console.log(this.props.singleProduct);
    return (
      <div className="edit-product-container">
        <form id="product-update-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Product Name</label>
          <input
            className="edit-product-input"
            name="name"
            onChange={handleChange}
            value={name}
          />

          <label htmlFor="price">Product Price</label>
          <input
            className="edit-product-input"
            name="price"
            onChange={handleChange}
            value={price}
          />

          <label htmlFor="description">Product Description</label>
          <input
            className="edit-product-input"
            name="description"
            onChange={handleChange}
            value={description}
          />

          <label htmlFor="quantity">Product Quantity</label>
          <input
            className="edit-product-input"
            name="quantity"
            onChange={handleChange}
            value={quantity}
          />

          <label htmlFor="imageUrl">Product Image</label>
          <input
            className="edit-product-input"
            name="imageUrl"
            onChange={handleChange}
            value={imageUrl}
          />

          <label htmlFor="category">Product Category</label>
          <input
            className="edit-product-input"
            name="category"
            onChange={handleChange}
            value={category}
          />

          <button type="submit">Submit these changes!</button>
          <button
            className="remove"
            onClick={() =>
              this.props.deleteProduct(
                this.props.singleProduct.singleProductReducer.id
              )
            }
            type="button"
          >
            X Delete This Product X
          </button>
        </form>
        <form onSubmit={(ev) => ev.preventDefault()} />
      </div>
    );
  }
}

const mapStatetoProps = (singleProduct) => {
  return { singleProduct };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  updateProduct: (product) => dispatch(updateProduct(product, history)),
  fetchSingleProduct: (productId) => dispatch(fetchSingleProduct(productId)),
  deleteProduct: (productId) => dispatch(deleteProduct(productId, history)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(EditProduct);
