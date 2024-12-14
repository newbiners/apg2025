import { Table } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { host } from "../../api";
const TabSmsPI = () => {
  const [pangkalan, setPangkalan] = useState([]);

  const data = async () => {
    const response = await axios.post(host + "/lomba/user", {
      gender: "PI",
      name: "Yell Competition",
    });
    setPangkalan(response.data);
  };
  useEffect(() => {
    data();
  }, []);
  return <Table data={pangkalan} />;
};

export default TabSmsPI;
