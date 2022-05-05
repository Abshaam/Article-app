import { useParams, } from "react-router-dom"
import React from "react";
import {getData} from '../data'
import '../css/article.css'
import Articles from '../pages/Articles'
import Comment from '../pages/comment'

export default function Article (){
  
    const param = useParams()

   

    const data = getData(+param.articleId)

    // console.log(param.invoiceId);

    console.log('param', param)
     
    return(
        // <h1>{param.invoiceId}</h1>
    
        <main style={{ padding: "1rem"}}>
            <div className="src" >{data.src}</div>
            <h2>
                Author: {data.author}
            </h2>
            <h3>
                {data.title}
            </h3>
            <p>
                {data.description}
            </p>            

           <Comment/>
            <Articles/>

         </main>
    )
}