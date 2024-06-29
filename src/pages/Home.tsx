import { BlogsHome } from "../components/Blogs/BlogsHome";
import { Makers } from "../components/DressMakers/Makers";
import { MostPopular } from "../components/Dresses/MostPopular";
import { OnSale } from "../components/Dresses/OnSale";
import { RecomendedDresses } from "../components/Dresses/RecomendedDresses";
import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <RecomendedDresses/>
      <MostPopular/>
      <OnSale/>
      <Makers/>
      <BlogsHome/>
    </>
  );
};
