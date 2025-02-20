import { Table, TableLomPangkalan } from "../../components";
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
      // gender: "PA",
      name: "Gita Galang",
    });
    setPangkalan(response.data);
    setLoading(false);
  };
  useEffect(() => {
    data();
  }, []);
  return <TableLomPangkalan data={pangkalan} />;
};

export default TabSmsPa;
