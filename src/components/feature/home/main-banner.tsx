'use client'

import Banner from '@/lib/types/Banner'
import BannerItem from '@/components/feature/home/banner-item'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
  bannerList: Banner[]
}

function MainBanner({ bannerList }: Props) {
  return (
    <div className="flex justify-center">
      <Carousel
        className="w-full max-w-7xl"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {bannerList.map((banner: Banner) => (
            <CarouselItem key={banner.id}>
              <BannerItem
                link={banner.link}
                image={banner.image_pc}
                name={banner.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default MainBanner
