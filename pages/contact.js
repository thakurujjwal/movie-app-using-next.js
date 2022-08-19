import Link from 'next/link'
import Meta from './../components/Meta';



const contact = () => {
  return (
    <div className='text-center mt-20'>
      <Meta title="contact us"/>
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <Link href={"/" }>
        <button className='bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4'>Back To Home</button>
        
      </Link>

    </div>
  )
}

export default contact