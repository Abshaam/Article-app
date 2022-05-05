import '../css/indexPage.css'
import pic from "../images/scroll.jpg";
import pic2 from "../images/browse.jpg";
import pic3 from "../images/news.jpg";
import pic4 from "../images/lapsmarta.jpg";




export default function indexPage () {

    return(
       <>
        <div className="index">
            <h1> INFO.COM Menu on sidebar</h1>
            <div className='imgs'>
               <div className='image'>
                 <img src={pic} alt=''/>
                 <p>Browse articles on smartphone</p>
               </div>
               <div className='image'>
                 <img src={pic2} alt=''/>
                 <p>Browse articles from pc</p>
               </div>
               <div className='image'>
                 <img src={pic3} alt=''/>
                 <p>Browse articles and news</p>
               </div>
               <div className='image'>
                 <img src={pic4} alt=''/>
                 <p>Browse articles dual</p>
               </div>
            </div>
            <h4>copyright Ushama@div 2022</h4>
        </div>
        
       </>
    )
}