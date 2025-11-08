import { useSelector } from "react-redux";
import Button from "./ui/Button";
import type { RootState } from "../app/store";
 

const Navbar = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <ul className="flex justify-around py-2">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>
        <Button className="bg-indigo-500" width="w-fit">
          Cart {cartItems.length}
        </Button>
      </li>
    </ul>
  );
};

export default Navbar;
