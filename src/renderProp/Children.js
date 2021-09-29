export const Children1 = ({ data }) => {
  return (
    <ul>
      {data.map((data) => {
        return <li key={data.username}>{data.username} </li>;
      })}
    </ul>
  );
};

export const Children2 = ({ data }) => {
  return (
    <ul>
      {data.map((data) => {
        return <li key={data.website}>{data.website} </li>;
      })}
    </ul>
  );
};
