import React from "react";
const ProductItem = ({ user }) => {
  console.log(user);

  return (
    <div>
       <h1>{user.id}</h1>
    </div>
  );
};

export default ProductItem;
