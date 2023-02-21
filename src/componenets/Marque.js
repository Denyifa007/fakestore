import React from "react";
import Marquee from "react-fast-marquee";
const Marque = () => {
  let salesInfo = "🏃🏃‍♀️Flash Sales!!! 💍👕📺👟";
  return (
    <div>
    
        <Marquee
          speed={60}
          gradient={false}
          style={{ backgroundColor: "deepskyblue", color: "white", fontSize: "14px" }}
        >
          <h2>{salesInfo}</h2>
        </Marquee>
    
    </div>
  );
};

export default Marque;
