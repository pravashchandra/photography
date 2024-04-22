import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Annaparsanacard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Annaparsanadata =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584581/annaprasanna-shoot/Anna8_zxv0fl.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584579/annaprasanna-shoot/Anna6_awvobr.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584576/annaprasanna-shoot/Anna4_bz0pe7.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584580/annaprasanna-shoot/Anna7_wpjaos.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584578/annaprasanna-shoot/Anna5_hleikr.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584574/annaprasanna-shoot/Anna2_kelxrp.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584575/annaprasanna-shoot/Anna3_ujjvn3.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584573/annaprasanna-shoot/Anna1_iwcqfx.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584570/annaprasanna-shoot/Anna10_kvuhem.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584571/annaprasanna-shoot/Anna13_svb9gp.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584570/annaprasanna-shoot/Anna12_f1poes.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584569/annaprasanna-shoot/Anna11_vgkiqm.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707584569/annaprasanna-shoot/Anna9_hdyssl.png'}
    ]

  return (
    <>
        <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Annaparsanadata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Annaparsana' width={400} height={450} data-aos='zoom-in' data-aos-delay="200" data-aos-once="true" />
                </div>
            )})}
        </div>
    </>
  )
}

export default Annaparsanacard