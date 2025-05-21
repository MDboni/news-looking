import axios from "axios";

const BASEURL = 'https://basic-blog.teamrabbil.com/api/'

export async function PostCatagoris() {
    let res = await axios.get(BASEURL+'post-categories')

    if(res.status===200){
        return res.data
    }else{
        return []
    }
}


export async function BlogeCard() {
    let res = await axios.get(BASEURL+'post-newest')

    if(res.status===200){
        return res.data;
        
    }else{
        return []
    }
}

export async function ByCategoriLIst(id) {
    let res = await axios.get(BASEURL+'post-list/'+id)

    if(res.status===200){
        return res.data;
        
    }else{
        return []
    }
}


export async function DetailsiLIst(id) {
    let res = await axios.get(BASEURL+'post-details/'+id)

    if(res.status===200){
        return res.data;
        
    }else{
        return []
    }
}

