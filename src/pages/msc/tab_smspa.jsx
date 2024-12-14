import { Table } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { host } from "../../api";
const TabSmsPa = () => {
  const [pangkalan, setPangkalan] = useState([]);

  const data = async () => {
    const response = await axios.post(host + "/lomba/user", {
      gender: "PA",
      name: "MSC (Master Scout Chef)",
    });
    setPangkalan(response.data);
  };
  useEffect(() => {
    data();
  }, []);
  return <Table data={pangkalan} />;
};

export default TabSmsPa;
