const TableRegu = ({ data }) => {
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
            <td>{item.name.name}</td>
            <td>{item.name.school.name}</td>
            <td>{item.nilai}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default TableRegu;
