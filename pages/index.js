
import styles from '@/styles/Home.module.css'
import PageLayout from '@/components/pageLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <PageLayout title='Home'>
      <div className='mt-12 lg:mt-24 flex justify-center'>
        <h1 className="text-4xl font-bold tracking-tight cursor-default">
          Dunk Shoes
        </h1>
      </div>
      <div className="mt-12  flex justify-center space-x-2 sm:space-y-1  flex-wrap">
        <div>
          <Image className='rounded-lg lg:h-full ml-1'
            src={'/img/jordan1.jpg'}
            width='600'
            height='600'
            alt='jordan'
            quality={100}
          ></Image>
          <Link href="./tienda" className="text-3xl relative bottom-16 left-8  rounded-lg bg-indigo-600 px-4 py-1.5  font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
            Ver Jordan
          </Link>
        </div>
        <div>
          <Image className='rounded-lg  lg:h-full'
            src={'/img/adidas1.jpg'}
            width='600'
            height='600'
            alt='adidas'
            quality={100}
          ></Image>
          <Link href="./tienda" className="text-3xl relative bottom-16 left-8  rounded-lg bg-indigo-600 px-4 py-1.5  font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
          Ver Adidas
          </Link>
        </div>
        <div>
          <Image className='rounded-lg  lg:h-full'
            src={'/img/nike1.jpg'}
            width='600'
            height='600'
            alt='nike'
            quality={100}
          ></Image>
          <Link href="./tienda" className="text-3xl relative bottom-16 left-8  rounded-lg bg-indigo-600 px-4 py-1.5  font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
          Ver Nike
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
