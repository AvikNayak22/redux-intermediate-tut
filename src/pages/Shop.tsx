import ShopPageItem from "@/components/ShopPageItem";
import {
  fetchStoreItemsThunk,
  // updateProducts,
} from "@/redux/slices/storeSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch<AppDispatch>();
  const shopLoading = useSelector(
    (state: RootState) => state.storeSlice.loading
  );
  const storeItems = useSelector(
    (state: RootState) => state.storeSlice.products
  );

  // const [storeItems, setStoreItems] = useState<EcomItem[]>([]);
  // const [shopLoading, setShopLoading] = useState<boolean>(true);

  // const fetchStoreItems = async () => {
  //   setShopLoading(true);
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const responseJson = await response.json();
  //     dispatch(updateProducts(responseJson));
  //     // setStoreItems(responseJson);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setShopLoading(false);
  //   }
  // };

  useEffect(() => {
    // fetchStoreItems();
    dispatch(fetchStoreItemsThunk());
  }, []);

  return !shopLoading ? (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 p-3">
      {storeItems.map((item) => {
        return <ShopPageItem key={item.id} data={item} />;
      })}
    </div>
  ) : (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
      Loading Shop Items...
    </div>
  );
}
