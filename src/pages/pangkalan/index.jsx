import { Table, TablePangkalan, TablePangkalanDetail } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { host } from "../../api";
import { useAtom } from "jotai";
import { loadingAtom } from "../../atom";
import PagesContainer from "../../components/containers/pagesContainer";
import Title from "../../components/title";
import { Tabs } from "flowbite-react";
const Pangkalan = () => {
  const [pangkalan, setPangkalan] = useState([]);
  const [tab, setTab] = useState([]);
  const [Detail, setDetail] = useState([]);
  const [_, setLoading] = useAtom(loadingAtom);

  const data = async () => {
    setLoading(true);
    const { data } = await axios.post(host + "/juara-umum/get/pangkalan", {
      type: "pangkalan",
    });
    // type: "pangkalan",
    console.log(data, "data");
    setPangkalan(data.data_header);

    const key = Object.keys(data.data_detail);
    setDetail(data.data_detail);
    setTab(key);
    setLoading(false);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <PagesContainer>
      <div className="mt-14 sm:mt-40">
        <Title title="Juara Umum Pangkalan" />
      </div>
      <TablePangkalan data={pangkalan} />
      <h1 className="text-3xl mt-10 mb-6">Detail</h1>
      <Tabs aria-label="Default tabs" variant="default">
        {tab.map((item, index) => {
          return (
            <Tabs.Item active title={item}>
              {Detail[item] && <TablePangkalanDetail data={Detail[item]} />}
            </Tabs.Item>
          );
        })}
      </Tabs>
    </PagesContainer>
  );
};

export default Pangkalan;
