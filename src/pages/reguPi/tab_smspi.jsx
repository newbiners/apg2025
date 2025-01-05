import { TableRegu, TableDetailRegu } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { host } from "../../api";
import { useAtom } from "jotai";
import { loadingAtom } from "../../atom";
import { Tabs } from "flowbite-react";
const TabSmsPa = () => {
  const [pangkalan, setPangkalan] = useState([]);
  const [tab, setTab] = useState([]);
  const [Detail, setDetail] = useState([]);
  const [_, setLoading] = useAtom(loadingAtom);

  const data = async () => {
    setLoading(true);
    var { data } = await axios.post(host + "/juara-umum/get/regu", {
      gender: "PI",
      type: "regu",
    });
    setPangkalan(data.data_header);
    setDetail(data.data_detail);

    const key = Object.keys(data.data_detail);
    setTab(key);
    console.log(data, "data_header", key);
    setLoading(false);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <TableRegu data={pangkalan} />
      <h1 className="text-3xl mt-10 mb-6">Detail</h1>
      <Tabs aria-label="Default tabs" variant="default">
        {tab.map((item, index) => {
          return (
            <Tabs.Item active title={item}>
              {Detail[item] && <TableDetailRegu data={Detail[item]} />}
            </Tabs.Item>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabSmsPa;
