import { useEffect, useState } from "react"
import { PostCatagoris } from "../ApiReguest/ApiRequest"
import { NavLink, useParams } from "react-router-dom"

const Layout = (props) => {

    const [categori,setCategori] = useState([])
    const { BycategoryID } = useParams();

    useEffect(()=>{
        (async()=>{
            let res =await PostCatagoris()
            setCategori(res)
        })()
    },[])

  return (
    <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li><NavLink to={'/'}>Home</NavLink></li>
                  {
                    categori.map((item,i)=>{
                        return <li key={i}><NavLink to={`/ByCategory/${item.id}`}>{item.name}</NavLink></li> 
                    })
                  }
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">News</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    {
                    categori.map((item,i)=>{
                        return <li key={i}><NavLink to={`/ByCategory/${item.id}`}>{item.name}</NavLink></li> 
                    })
                  }
                </ul>
            </div>
            
        </div>

        {props.children}
    </>
  )
}

export default Layout