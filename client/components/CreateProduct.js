import React from "react";
import { createProduct } from "../store/all-products";
import { connect } from "react-redux";

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 1,
      description: '',
      quantity: 1,
      imageUrl: '',
      category: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProduct({ ...this.state})
  }

  render() {
    const { name, price, description, quantity, imageUrl, category } =
      this.state;
    const { handleSubmit, handleChange } = this;
    return (
        <form id="product-create-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Product Name</label>
          <input
            className="create-product-input"
            name="name"
            onChange={handleChange}
            value={name}
          />

          <label htmlFor="price">Product Price</label>
          <input
            className="create-product-input"
            name="price"
            onChange={handleChange}
            value={price}
          />

          <label htmlFor="description">Product Description</label>
          <input
            className="create-product-input"
            name="description"
            onChange={handleChange}
            value={description}
          />

          <label htmlFor="quantity">Product Quantity</label>
          <input
            className="create-product-input"
            name="quantity"
            onChange={handleChange}
            value={quantity}
          />

          <label htmlFor="imageUrl">Product Image</label>
          <input
            className="create-product-input"
            name="imageUrl"
            onChange={handleChange}
            value={imageUrl}
          />

          <label htmlFor="category">Product Category</label>
          <input
            className="create-product-input"
            name="category"
            onChange={handleChange}
            value={category}
          />

          <button type="submit">Create this product!</button>
        </form>
    );
  }
}
const mapDispatchToProps = (dispatch, {history}) => ({
  createProduct: (product) => dispatch(createProduct(product, history))
})

export default connect(null, mapDispatchToProps)(CreateProduct)
