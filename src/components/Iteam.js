import React from 'react';

const Item = React.memo(({ item }) => {
  return <div>{item}</div>;
});

export default Item;
