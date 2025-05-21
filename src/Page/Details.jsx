import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { useEffect, useState } from "react"
import { DetailsiLIst } from "../ApiReguest/ApiRequest"
import Loder from "../Skeleton/Loder"
import DetailComp from "../Component/DetailComp"

const Details = () => {

  const {Detailid} = useParams()

 const [list,setLIst]= useState(null)

 useEffect(()=>{
  (async()=>{
   const res = await DetailsiLIst(Detailid)
   setLIst(res)
  })()
 },[Detailid])

  return (
    <Layout>
    
    {
  list === null ? <Loder /> : <DetailComp list={list} />
}


    </Layout>
  )
}

export default Details