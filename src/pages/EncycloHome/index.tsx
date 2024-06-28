import { useRequest } from "ahooks";
import "./styles.css";
import { reqDitto } from "../../api";
import React, { useEffect } from "react";
import Header from "../../components/Header";

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
     
      <Header />
      {/*  Featured Creature  one random */}
      
      {/*  Popular Creatures */}
      {/*  creature types */}
      {/*  creature locations */}
    </div>
  );
};

export default EncycloHome;
