import React from 'react'
import { Button } from "react-bootstrap";

const But = ({stile,descript,color, connect}) => {
  return (
    <>
    <Button variant={color} href={connect} style={stile}>{descript}</Button>     
    </>
  )
}

export default But;