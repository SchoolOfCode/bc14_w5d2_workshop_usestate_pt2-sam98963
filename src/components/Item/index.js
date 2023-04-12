import React from 'react';

function Item(props, font){
return <li style={{fontFamily: `${font}`}}>{props.text}</li>
}

export default Item;