import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import birthdayone from '../../../../public/Images/Services/Birthday/birthdayone.png';
import birthdaytwo from '../../../../public/Images/Services/Birthday/birthdaytwo.png';
import birthdaythree from '../../../../public/Images/Services/Birthday/birthdaythree.png';
import birthdayfour from '../../../../public/Images/Services/Birthday/birthday4.png';
import birthdayfive from '../../../../public/Images/Services/Birthday/birthday5.png';
import birthdaysix from '../../../../public/Images/Services/Birthday/birthday6.png';
import birthdayseven from '../../../../public/Images/Services/Birthday/birthday7.png';
import birthdayeight from '../../../../public/Images/Services/Birthday/birthday8.png';
import birthdaynine from '../../../../public/Images/Services/Birthday/birthday9.png';
import birthdayten from '../../../../public/Images/Services/Birthday/birthday10.png';
import birthdayeleven from '../../../../public/Images/Services/Birthday/birthday11.png';
import birthdaytwelve from '../../../../public/Images/Services/Birthday/birthday12.png';
import birthdaythirteen from '../../../../public/Images/Services/Birthday/birthday13.png';
import birthdayfourteen from '../../../../public/Images/Services/Birthday/birthday14.png';
import birthdayfifteen from '../../../../public/Images/Services/Birthday/birthday15.png';
import birthdaysixteen from '../../../../public/Images/Services/Birthday/birthday16.png';
import birthdayseventeen from '../../../../public/Images/Services/Birthday/birthday17.png';
import birthdayeightteen from '../../../../public/Images/Services/Birthday/birthday18.png';
import birthdayninteen from '../../../../public/Images/Services/Birthday/birthday19.png';
import birthdaytwenty from '../../../../public/Images/Services/Birthday/birthday20.png';
import birthdaytwentyone from '../../../../public/Images/Services/Birthday/birthday21.png';
import birthdaytwentytwo from '../../../../public/Images/Services/Birthday/birthday22.png';
import birthdaytwentythree from '../../../../public/Images/Services/Birthday/birthdaytwentythree.png';
import birthdaytwentyfour from '../../../../public/Images/Services/Birthday/birthdaytwentyfour.png';
import birthdaytwentyfive from '../../../../public/Images/Services/Birthday/birthdaytwentyfive.png';
import birthdaytwentysix from '../../../../public/Images/Services/Birthday/birthdaytwentysix.png';
import birthdaytwentyseven from '../../../../public/Images/Services/Birthday/birthdaytwentyseven.png';
import birthdaytwentyeight from '../../../../public/Images/Services/Birthday/birthdaytwentyeight.png';
import birthdaytwentynine from '../../../../public/Images/Services/Birthday/birthdaytwentynine.png';
import birthdaythirty from '../../../../public/Images/Services/Birthday/birthdaythirty.png';
import birthdaythirtyone from '../../../../public/Images/Services/Birthday/birthdaythirtyone.png';
import birthdaythirtytwo from '../../../../public/Images/Services/Birthday/birthdaythirtytwo.png';
import birthdaythirtythree from '../../../../public/Images/Services/Birthday/birthdaythirtythree.png';
import birthdaythirtyfour from '../../../../public/Images/Services/Birthday/birthdaythirtyfour.png';
import birthdaythirtyfive from '../../../../public/Images/Services/Birthday/birthdaythirtyfive.png';
import birthdaythirtysix from '../../../../public/Images/Services/Birthday/birthdaythirtysix.png';
import birthdaythirtyseven from '../../../../public/Images/Services/Birthday/birthdaythirtyseven.png';
import birthdaythirtyeight from '../../../../public/Images/Services/Birthday/birthdaythirtyeight.png';
import birthdaythirtynine from '../../../../public/Images/Services/Birthday/birthdaythirtynine.png';
import birthdayfourty from '../../../../public/Images/Services/Birthday/birthdayfourty.png';
import birthdayfourtyone from '../../../../public/Images/Services/Birthday/birthdayfourtyone.png';
import birthdayfourtytwo from '../../../../public/Images/Services/Birthday/birthdayfourtytwo.png';
import birthdayfourtythree from '../../../../public/Images/Services/Birthday/birthdayfourtythree.png';
import birthdayfourtyfive from '../../../../public/Images/Services/Birthday/birthdayfourtyfive.png';
import birthdayfourtysix from '../../../../public/Images/Services/Birthday/birthdayfourtysix.png';
import birthdayfourtyseven from '../../../../public/Images/Services/Birthday/birthdayfourtyseven.png';
import birthdayfourtyeight from '../../../../public/Images/Services/Birthday/birthdayfourtyeight.png';
import birthdayfourtynine from '../../../../public/Images/Services/Birthday/birthdayfourtynine.png';
import birthdayfifty from '../../../../public/Images/Services/Birthday/birthdayfifty.png';
import birthdayfiftyone from '../../../../public/Images/Services/Birthday/birthdayfiftyone.png';
import birthdayfiftytwo from '../../../../public/Images/Services/Birthday/birthdayfiftytwo.png';
import birthdayfiftythree from '../../../../public/Images/Services/Birthday/birthdayfiftythree.png';
import birthdayfiftyfour from '../../../../public/Images/Services/Birthday/birthdayfiftyfour.png';
import birthdayfiftyfive from '../../../../public/Images/Services/Birthday/birthdayfiftyfive.png';
import birthdayfiftysix from '../../../../public/Images/Services/Birthday/birthdayfiftysix.png';
import birthdayfiftyseven from '../../../../public/Images/Services/Birthday/birthdayfiftyseven.png';
import birthdayfiftyeight from '../../../../public/Images/Services/Birthday/birthdayfiftyeight.png';
import birthdayfiftynine from '../../../../public/Images/Services/Birthday/birthdayfiftynine.png';
import birthdaysixty from '../../../../public/Images/Services/Birthday/birthdaysixty.png';
import birthdaysixtyone from '../../../../public/Images/Services/Birthday/birthdaysixtyone.png';
import birthdaysixtytwo from '../../../../public/Images/Services/Birthday/birthdaysixtytwo.png';
import birthdaysixtythree from '../../../../public/Images/Services/Birthday/birthdaysixtythree.png';
import birthdaysixtyfour from '../../../../public/Images/Services/Birthday/birthdaysixtyfour.png';~``
import birthdaysixtyseven from '../../../../public/Images/Services/Birthday/birthdaysixtyseven.png';
import birthdaysixtyeight from '../../../../public/Images/Services/Birthday/birthdaysixtyeight.png';
import birthdaysixtynine from '../../../../public/Images/Services/Birthday/birthdaysixtynine.png';
import birthdayseventy from '../../../../public/Images/Services/Birthday/birthdayseventy.png';
import birthdayseventyone from '../../../../public/Images/Services/Birthday/birthdayseventyone.png';
import birthdayseventytwo from '../../../../public/Images/Services/Birthday/birthdayseventytwo.png';
import birthdayseventythree from '../../../../public/Images/Services/Birthday/birthdayseventythree.png';
import birthdayseventyfour from '../../../../public/Images/Services/Birthday/birthdayseventyfour.png';
import birthdayseventyfive from '../../../../public/Images/Services/Birthday/birthdayseventyfive.png';
import birthdayseventysix from '../../../../public/Images/Services/Birthday/birthdayseventysix.png';
import birthdayseventyseven from '../../../../public/Images/Services/Birthday/birthdayseventyseven.png';
import birthdayseventyeight from '../../../../public/Images/Services/Birthday/birthdayseventyeight.png';
import birthdayseventynine from '../../../../public/Images/Services/Birthday/birthdayseventynine.png';
import birthdayeighty from '../../../../public/Images/Services/Birthday/birthdayeighty.png';
import birthdayeightyone from '../../../../public/Images/Services/Birthday/birthdayeightyone.png';
import birthdayeightytwo from '../../../../public/Images/Services/Birthday/birthdayeightytwo.png';
import birthdayeightythree from '../../../../public/Images/Services/Birthday/birthdayeightythree.png';
import birthdayeightyfour from '../../../../public/Images/Services/Birthday/birthdayeightyfour.png';
import birthdayeightyfive from '../../../../public/Images/Services/Birthday/birthdayeightyfive.png';
import birthdayeightysix from '../../../../public/Images/Services/Birthday/birthdayeightysix.png';
import birthdayeightyseven from '../../../../public/Images/Services/Birthday/birthdayeightyseven.png';
import birthdayeightynine from '../../../../public/Images/Services/Birthday/birthdayeightynine.png';
import birthdaynintey from '../../../../public/Images/Services/Birthday/birthdaynintey.png';
import birthdayninteyone from '../../../../public/Images/Services/Birthday/birthdayninteyone.png';
import birthdayninteytwo from '../../../../public/Images/Services/Birthday/birthdayninteytwo.png';
import birthdayninteythree from '../../../../public/Images/Services/Birthday/birthdayninteythree.png';
import birthdayninteyfour from '../../../../public/Images/Services/Birthday/birthdayninteyfour.png';
import birthdayninteyfive from '../../../../public/Images/Services/Birthday/birthdayninteyfive.png';
import birthdayninteysix from '../../../../public/Images/Services/Birthday/birthdayninteysix.png';
import birthdayninteyseven from '../../../../public/Images/Services/Birthday/birthdayninteyseven.png';
import birthdayninteyeight from '../../../../public/Images/Services/Birthday/birthdayninteyeight.png';
import birthdayninteynine from '../../../../public/Images/Services/Birthday/birthdayninteynine.png';
import birthdayhundred from '../../../../public/Images/Services/Birthday/birthdayhundred.png';
import birthdayhundredone from '../../../../public/Images/Services/Birthday/birthdayhundredone.png';
import birthdayhundredtwo from '../../../../public/Images/Services/Birthday/birthdayhundredtwo.png';
import birthdayhundredthree from '../../../../public/Images/Services/Birthday/birthdayhundredthree.png';
import birthdayhundredfour from '../../../../public/Images/Services/Birthday/birthdayhundredfour.png';
import birthdayhundredfive from '../../../../public/Images/Services/Birthday/birthdayhundredfive.png';
import birthdayhundredsix from '../../../../public/Images/Services/Birthday/birthdayhundredsix.png';


const Birthdaycard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const birthdaydata =[
        {id:1, img: birthdayone},
        {id:2, img: birthdaytwo},
        {id:3, img: birthdaythree},
        {id:4, img: birthdayfour},
        {id:5, img: birthdayfive},
        {id:6, img: birthdaysix},
        {id:7, img: birthdayseven},
        {id:8, img: birthdayeight},
        {id:9, img: birthdaynine},
        {id:10, img: birthdayten},
        {id:11, img: birthdayeleven},
        {id:12, img: birthdaytwelve},
        {id:13, img: birthdaythirteen},
        {id:14, img: birthdayfourteen},
        {id:15, img: birthdayfifteen},
        {id:16, img: birthdaysixteen},
        {id:17, img: birthdayseventeen},
        {id:18, img: birthdayeightteen},
        {id:19, img: birthdayninteen},
        {id:20, img: birthdaytwenty},
        {id:21, img: birthdaytwentyone},
        {id:22, img: birthdaytwentytwo},
        {id:23, img: birthdaytwentythree},
        {id:24, img: birthdaytwentyfour},
        {id:25, img: birthdaytwentyfive},
        {id:26, img: birthdaytwentysix},
        {id:27, img: birthdaytwentyseven},
        {id:28, img: birthdaytwentyeight},
        {id:29, img: birthdaytwentynine},
        {id:30, img: birthdaythirty},
        {id:31, img: birthdaythirtyone},
        {id:32, img: birthdaythirtytwo},
        {id:33, img: birthdaythirtythree},
        {id:34, img: birthdaythirtyfour},
        {id:35, img: birthdaythirtyfive},
        {id:36, img: birthdaythirtysix},
        {id:37, img: birthdaythirtyseven},
        {id:38, img: birthdaythirtyeight},
        {id:39, img: birthdaythirtynine},
        {id:40, img: birthdayfourty},
        {id:41, img: birthdayfourtyone},
        {id:42, img: birthdayfourtytwo},
        {id:43, img: birthdayfourtythree},
        {id:45, img: birthdayfourtyfive},
        {id:46, img: birthdayfourtysix},
        {id:47, img: birthdayfourtyseven},
        {id:48, img: birthdayfourtyeight},
        {id:49, img: birthdayfourtynine},
        {id:50, img: birthdayfifty},
        {id:51, img: birthdayfiftyone},
        {id:52, img: birthdayfiftytwo},
        {id:53, img: birthdayfiftythree},
        {id:54, img: birthdayfiftyfour},
        {id:55, img: birthdayfiftyfive},
        {id:56, img: birthdayfiftysix},
        {id:57, img: birthdayfiftyseven},
        {id:58, img: birthdayfiftyeight},
        {id:59, img: birthdayfiftynine},
        {id:60, img: birthdaysixty},
        {id:61, img: birthdaysixtyone},
        {id:62, img: birthdaysixtytwo},
        {id:63, img: birthdaysixtythree},
        {id:64, img: birthdaysixtyfour}, 
        {id:67, img: birthdaysixtyseven},
        {id:68, img: birthdaysixtyeight},
        {id:69, img: birthdaysixtynine},
        {id:70, img: birthdayseventy},
        {id:71, img: birthdayseventyone},
        {id:72, img: birthdayseventytwo},
        {id:73, img: birthdayseventythree},
        {id:74, img: birthdayseventyfour},
        {id:75, img: birthdayseventyfive},
        {id:76, img: birthdayseventysix},
        {id:77, img: birthdayseventyseven},
        {id:78, img: birthdayseventyeight},
        {id:79, img: birthdayseventynine},
        {id:80, img: birthdayeighty},
        {id:81, img: birthdayeightyone},
        {id:82, img: birthdayeightytwo},
        {id:83, img: birthdayeightythree},
        {id:84, img: birthdayeightyfour},
        {id:85, img: birthdayeightyfive},
        {id:86, img: birthdayeightysix},
        {id:87, img: birthdayeightyseven},
        {id:89, img: birthdayeightynine},
        {id:90, img: birthdaynintey},
        {id:91, img: birthdayninteyone},
        {id:92, img: birthdayninteytwo},
        {id:93, img: birthdayninteythree},
        {id:94, img: birthdayninteyfour},
        {id:95, img: birthdayninteyfive},
        {id:96, img: birthdayninteysix},
        {id:97, img: birthdayninteyseven},
        {id:98, img: birthdayninteyeight},
        {id:99, img: birthdayninteynine},
        {id:100, img: birthdayhundred},
        {id:101, img: birthdayhundredone},
        {id:102, img: birthdayhundredtwo},
        {id:103, img: birthdayhundredthree},
        {id:104, img: birthdayhundredfour},
        {id:105, img: birthdayhundredfive},
        {id:106, img: birthdayhundredsix}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {birthdaydata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Birthday' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true" />
                </div>
            )})}
        </div>
    </>
  )
}

export default Birthdaycard