import { useRequest } from "ahooks";
import "./styles.css";
import { reqDitto } from "../../api";
import React, { useEffect } from "react";

const EncycloHome: React.FC = () => {
  const { data, loading } = useRequest(reqDitto);

//   useEffect(() => {
//     if (data) {
//       console.log("Ditto data: ", data);
//     } else if (error) {
//       console.error("Error fetching Ditto data: ", error);
//     }
//   }, [data, error]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <h1>EncycloHome</h1>
      {data && <img src={data.sprites.front_default} alt="sprite"/>}

      {data && <h1>{JSON.stringify(data)}</h1>}
    </div>
  );
};

export default EncycloHome;
