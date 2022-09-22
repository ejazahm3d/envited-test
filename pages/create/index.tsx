import type { NextPage } from "next";
import { MainLayout } from "../../src/layouts/main-layout";
import { CreateEventPage } from "../../src/pages/create-event/create-event";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <CreateEventPage />
    </MainLayout>
  );
};

export default Home;
