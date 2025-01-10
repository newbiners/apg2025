const TableDetailRegu = ({ data }) => {
  return (
    <table className="">
      <tr>
        <th>No .</th>
        <th>Nama Lomba</th>
        <th>Nama Regu</th>
        <th>poin</th>
        <th>Nilai</th>
      </tr>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name.name}</td>
            <td>{item.header.name}</td>
            <td>{item.poin}</td>
            <td>{item.nilai}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default TableDetailRegu;
