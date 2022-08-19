import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src={"/homeimg.png"} width={200} height={200} layout="responsive" />
      </div>
      <h1 className='text-2xl text-gray-700 uppercase font-bold'>Welcome Back</h1>
      <p className='text-gray-500'>Find here  T.V Shows , Films  And Many More</p>
      {/* <Link href={"/contact" }>
       <button className='bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4'>Contact Us</button>
  </Link>*/}
    </div>
  )
}

export default Hero