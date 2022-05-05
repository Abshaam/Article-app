import '../css/home.css'
import pic from "../images/home.avif";
import pic1 from "../images/office.avif";

export default function Home() {
    return(
        <>
        <div className="home">

            <h1>INFO.COM</h1>

            <div className='home-content'>

               <div className='image-text'>
                  <h1>Welcome</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia ab est reprehenderit ad beatae impedit similique corporis, obcaecati repellendus illo amet quo debitis animi quidem, tempora iste? Itaque, eum!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, nisi perspiciatis aliquam voluptatem tenetur rem deleniti doloremque est minima? Dolorum explicabo sint nulla tenetur aperiam dolores velit asperiores cupiditate dolore.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore, cupiditate eum esse pariatur ea exercitationem asperiores in sapiente. Ab distinctio adipisci aliquid, reiciendis quae porro atque corporis sunt veritatis.</p>
               </div>

               <div className='home-imgs'>
                 <div className='image'>
                  <img src={pic} alt=''/>
                 </div>

                 <div className='image'>
                  <img src={pic1} alt=''/>
                 </div>

                </div>  
               

            </div>
            <h4>copyright Ushama@div 2022</h4>
        </div>
        </>
        
    )
}