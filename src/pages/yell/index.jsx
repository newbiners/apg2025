import { PagesContainer, Title } from "../../components";
import { Tabs } from "flowbite-react";
import TabSmsPa from "./tab_smspa";
import TabSmsPi from "./tab_smspi";
const Yell = () => {
  return (
    <PagesContainer>
      <div className="mt-40">
        <Title title="Juara Yell (Yell Competition)" />
        <Tabs aria-label="Default tabs" variant="default">
          <Tabs.Item active title="Putra">
            <TabSmsPa />
          </Tabs.Item>
          <Tabs.Item title="Putri">
            <TabSmsPi />
          </Tabs.Item>
        </Tabs>
      </div>
    </PagesContainer>
  );
};

export default Yell;
