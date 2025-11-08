import type { IProduct } from "../interfaces";
import ProductItem from "./ProductItem";

const Products = () => {
  const products: IProduct[] = [
    {
      id: 1,
      imageUrl: "/hh.PNG",
      title: "title1",
      desc: "desc1",
    },
    {
      id: 2,
      imageUrl: "/hh.PNG",
      title: "title2",
      desc: "desc2",
    },
    {
      id: 3,
      imageUrl: "/hh.PNG",
      title: "title3",
      desc: "desc3",
    },
    {
      id: 4,
      imageUrl: "/hh.PNG",
      title: "title4",
      desc: "desc4",
    },
    {
      id: 5,
      imageUrl: "/hh.PNG",
      title: "title5",
      desc: "desc5",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {products.map((product: IProduct) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default Products;
