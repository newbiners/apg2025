import { Table } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { host } from "../../api";
import { useAtom } from "jotai";
import { loadingAtom } from "../../atom";
const TabSmsPa = () => {
  const [pangkalan, setPangkalan] = useState([]);
  const [_, setLoading] = useAtom(loadingAtom);
  const data = async () => {
    setLoading(true);
    const response = await axios.post(host + "/lomba/user", {
      gender: "PA",
      name: "MADING DAUR ULANG 3D",
    });
    setPangkalan(response.data);
    setLoading(false);
  };
  useEffect(() => {
    data();
  }, []);
  return <Table data={pangkalan} />;
};

export default TabSmsPa;
