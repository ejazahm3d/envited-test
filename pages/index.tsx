import type { NextPage } from "next";
import { MainLayout } from "../src/layouts/main-layout";
import { HomePage } from "../src/pages/home/home";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};

export default Home;
