import React, { useState } from "react";

function ToggleableList({ items }) {
  const [selectedItem, setSelectedItem] = useState("string");

  return(
       <>
       {items.map(item => ( 
           
       ))}
       </>
  )
}

export default ToggleableList;
