import React from 'react';
export default (props: any) => {
  console.log(props.children);

  return (<div >
    <div>{props.name} </div>
    <div>{props.children}</div>
  </div>

  )
}