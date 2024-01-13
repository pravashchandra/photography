import React,{useState} from 'react'
import Link from 'next/link'



const ServicesMenu = ({handleNavToggle}) => {
const [dropDown, setDropDown] = useState(false);

const Menulist =[
    {id:1, name: "Wedding", url: '/services/wedding'},
    {id:2, name: "Pre Wedding", url: '/services/prewedding'},
    {id:3, name: "Engagement", url: '/services/engagement'},
    {id:4, name: "Birthday", url: '/services/birthday'},
    {id:5, name: "Baby Shower", url: '/services/babyshower'},
    {id:6, name: "Annaprasanna", url: '/services/annaprasanna-shoot'},
    {id:7, name: "Anniversary", url: '/services/anniversary'},
    {id:8, name: "Baby Photoshoot", url: '/services/baby-photoshoot'},
    {id:9, name: "Corporate", url: '/services/corporate'},
    {id:10, name: "House Warming", url: '/services/housewarming'},
    {id:11, name: "Maternity", url: '/services/maternity'},
    {id:12, name: "Naming Ceremony", url: '/services/naming-ceremony'},
   
]

  return (
    <>
        <div className= {`text-white md:text-black md:bg-white relative md:absolute  md:top-[60px] flex flex-col transition-all ${dropDown ? 'hidden' : 'block'}`} onClick={()=>setDropDown(!dropDown)}>

            {Menulist.map((data)=>{return (
                <ul key={data.id} className=''>
                    <Link href={data.url}>
                        <li onClick={handleNavToggle} className='hover:bg-gold hover:text-white transition-all font-josefin px-5 md:px-8 py-3 md:py-2'>{data.name}</li>
                    </Link>
                    
                </ul>
                )})
            }
        </div>  
    </>
  )
}

export default ServicesMenu
