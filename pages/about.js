import PageLayout from '@/components/pageLayout'
import Image from 'next/image'
export default function About() {
    return (
        <PageLayout title={'About'}>
            <div className='mt-12 lg:mt-24 flex justify-center '>
                <h1 className='text-4xl font-bold tracking-tight cursor-default'>About Us</h1>
            </div>
            <div className='flex mt-12 flex-wrap'>
                <Image className='rounded-lg flex-auto lg:max-h-screen max-h-96 sm:w-full md:w-72'
                    src={'/img/backgroudZapatillas.jpg'}
                    width='1000'
                    height='1000'
                    quality={100}
                    alt=''
                >
                </Image>
                <div className='mt-10 lg:mt-0  flex-auto px-5 w-28 sm:text-1xl lg:text-2xl flex items-center'>
                    <p>It isad a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors </p>
                </div>
            </div>

            <div className='flex items-center  justify-center     gap-x-48 mt-10 flex-wrap'>
                <iframe className='2xl:mr-52 rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26292.43446638064!2d-58.51449730000001!3d-34.539518199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb72c7515ba5f%3A0x5d0adaaf1b17d148!2sFlorida%20Oeste%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1674348632827!5m2!1ses!2sar" width="650" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <ul className='mt-14  2xl:mt-0 '>
                    <li className='font-bold tracking-tight'><span className=' text-indigo-700'>Phone:</span> 1132478516</li>
                    <li className='font-bold tracking-tight'><span className=' text-indigo-700'>Email:</span> Jack@gmail.com</li>
                    <li className='font-bold tracking-tight'><span className=' text-indigo-700'>Address:</span> General San Martin - Mexico 9021</li>
                </ul>
            </div>
        </PageLayout>
    )
}