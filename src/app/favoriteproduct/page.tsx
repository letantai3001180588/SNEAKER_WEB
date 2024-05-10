import FavoriteProduct from "@/components/FavoriteProduct";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Favorite Product",
  description: "Favorite Product",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Favorite Product"
      />
      <FavoriteProduct/> 
    </>
  );
};

export default Blog;
