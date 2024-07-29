import prewedding from '../../../../public/Images/Home/Services_Images/prewedding_service.png';
import Engagement from '../../../../public/Images/Home/Services_Images/Engagement.png';
import maternity from '../../../../public/Images/Home/Services_Images/maternity_service.png';
import baby_shhot from '../../../../public/Images/Home/Services_Images/babyphotoshoot.png';
import weddingservice from '../../../../public/Images/Home/Services_Images/Weeding_service.png';
import birthday_service from '../../../../public/Images/Home/Services_Images/birthday_service.png';


const Servicesdata = [
    {
        id: 1,
        image: Engagement,
        path:'/services/engagement',
        title: "Engagement"
    },
    {
        id: 2,
        image: prewedding,
        path:'/services/prewedding',
        title: "Prewedding"
    },
    {
        id: 3,
        image: weddingservice,
        path:'/services/wedding',
        title: "Wedding"
    },
    {
        id: 4,
        image: birthday_service,
        path:'/services/birthday',
        title: "Birthday"
    },
    
    {
        id: 5,
        image: maternity,
        path:'/services/maternity', 
        title: "Maternity"
    },
    {
        id: 6,
        image: baby_shhot,
        path:'/services/baby-photoshoot', 
        title: "Baby Shoot"
    }
    // {
    //     id: 7,
    //     image: birthday,
    //     title: "Birthday"
    // },
    // {
    //     id: 8,
    //     image: naming_ceremony,
    //     title: "Naming Ceremony"
    // },
]
export default Servicesdata;