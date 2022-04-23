import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router"
import '../App.css'

export const GetSingleData = () => {

  const [data,setData] = useState([])
  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/pet_spec/${id}`)
    .then((res) => setData(res.data))
  },[id])

  return (
    <div className='App'>
    <br /><br /><br />
          <h5>Specifications : </h5>
          <div>
          <h2>{data.name}</h2>
          <h5>{data.city}</h5>
          <h2>{data.address}</h2>
          <h5>{data.capacity}</h5>
          <h2>{data.cost_per_day}</h2>
          <h5>{data.verified}</h5>
          <h2>{data.rating}</h2>
          </div>
        </div>
  )
}
