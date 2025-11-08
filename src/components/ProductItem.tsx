import type { IProduct } from "../interfaces";
import Button from "./ui/Button";
import type { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/features/Cart/CartSlice";
import { useCallback } from "react";
const ProductItem = ({ product }: { product: IProduct }) => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const handleDispatch = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);
  return (
    <div key={product.title}>
      <img
        src={product.imageUrl}
        style={{ width: "200px", height: "200px" }}
        alt="product"
      />
      <h2>{product.title}</h2>
      <p>{product.desc}</p>{" "}
      <Button className="bg-indigo-500" onClick={handleDispatch}>
        Add To Cart (
        {cartItems.find((item) => item.id === product.id)?.qty ?? 0})
      </Button>
    </div>
  );
};

export default ProductItem;
