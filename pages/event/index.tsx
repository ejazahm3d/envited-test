import type { NextPage } from "next";
import { MainLayout } from "../../src/layouts/main-layout";
import { EventPage } from "../../src/pages/event/event";

const Event: NextPage = () => {
  return (
    <MainLayout>
      <EventPage />
    </MainLayout>
  );
};

export default Event;
