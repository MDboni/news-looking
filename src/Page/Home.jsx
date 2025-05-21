import { useEffect, useState } from "react"
import Bloge from "../Component/Blog"
import Layout from "../Layout/Layout"
import { BlogeCard } from "../ApiReguest/ApiRequest"
import Loder from "../Skeleton/Loder"

const Home = () => {

    const [bloge,setBloge] = useState(null)

    useEffect(()=>{
        (async()=>{
           let res= await BlogeCard()
           setBloge(res)
        })()
    },[])

  return (
    <Layout>
        {
            bloge===null ? <Loder/> : <Bloge bloge={bloge}/>
        }
      
    </Layout>
  )
}

export default Home