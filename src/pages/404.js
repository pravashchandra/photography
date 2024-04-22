// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-gold min-h-[550px] text-white'>
        <h1 className='text-[25px] md:text-[30px] font-coromont'>404 - Page Not Found</h1>
        <Link href="/" className='font-josefin uppercase mt-[50px] border border-white px-[30px] py-[10px] text-[12.5px] tracking-[1px]'>
                Go back home
        </Link>
    </div>
  </>
  )
  
}