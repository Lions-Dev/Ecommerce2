
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CarouselPage() {

    const slide = [
        { id: 1, url: "/img/adidas1.jpg", marca: "Adidas", href:"./tienda" },
        { id: 2, url: "/img/jordan1.jpg", marca: "Jordan", href:"./tienda" },
        { id: 3, url: "/img/nike1.jpg", marca: "Nike", href:"./tienda" }

    ]

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='w-5/6 lg:h-[45rem] md:h-[35rem] h-[30rem] mt-10'
                style={{ '--swiper-theme-color': 'rgb(79 70 229)' }}
            >
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
                {slide.map(e => {

                    return <SwiperSlide key={e.id}>
                        <Image className='rounded-lg h-full'
                            src={e.url}
                            width={1920}
                            height={1080}
                            alt='/img/adidas1.jpg'
                            priority={true}
                            quality={100}
                        />
                        <div className='carouselTitulo'>
                            <Link href={e.href}><span className='carouselTituloText'>{e.marca}</span></Link>
                        </div>
                        
                    </SwiperSlide>
                })}

            </Swiper>
            <style jsx>{`
            .carouselTitulo {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0,0,0,0.7);
                color: white;
                padding: 1rem;
                font-weight:bold;
                font-size:2rem;
                }
            .swiper-button-prev,
            .swiper-button-next {
                color:rgb(79 70 229);
            }
            .carouselTituloText:hover {
                color: rgb(79 70 229);
            }
            `}</style>
        </>
    );
}


