const TablePangkalan = ({ data }) => {
  return (
    <table className="">
      <tr>
        <th>No .</th>
        <th>Nama Pangkalan</th>
        <th>Nilai</th>
      </tr>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name.name}</td>
            <td>{item.nilai}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default TablePangkalan;
