import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { useEffect, useState } from "react"
import { ByCategoriLIst } from "../ApiReguest/ApiRequest"
import Loder from "../Skeleton/Loder"
import Blog from "../Component/Blog"

const ByCategory = () => {
    const {BycategoryID} =useParams()

    const [bloge,setBloge] =useState(null)

    useEffect(()=>{
        (async()=>{
           const res= await ByCategoriLIst(BycategoryID)
           setBloge(res)
        })()
    },[BycategoryID])


  return (
    <Layout>
        {
            bloge===null ? <Loder/> : <Blog bloge={bloge}/>
        }
    </Layout>
  )
}

export default ByCategory