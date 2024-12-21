const Table = ({ data }) => {
  return (
    <table className="">
      <tr>
        <th>No .</th>
        <th>Name Regu</th>
        <th>Name Pangkalan</th>
        <th>Nilai</th>
      </tr>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.regu.name}</td>
            <td>{item.pangkalan.name}</td>
            <td>{item.total_nilai}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
