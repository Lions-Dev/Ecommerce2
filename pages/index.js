
import styles from '@/styles/Home.module.css'
import PageLayout from '@/components/pageLayout'
import Image from 'next/image'
import Link from 'next/link'
import CarouselPage from '../components/carousel'
import Cards from '@/components/cards'

export default function Home() {
  return (
    <PageLayout title='Home'>
      <div className='mt-12 lg:mt-24 flex justify-center'>
        <h1 className="text-4xl font-bold tracking-tight cursor-default">
          Dunk Shoes
        </h1>
      </div>
      <CarouselPage/>
      <Cards/>
    </PageLayout>
  )
}
