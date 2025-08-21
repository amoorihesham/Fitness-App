import ContentWrapper from '@/components/shared/ContentWrapper';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
export default function Home() {
  return (
    <>
      <header className=' h-[calc(100dvh-77px)] flex items-center justify-center'>
        <ContentWrapper className='flex flex-col items-center justify-center gap-y-8'>
          <h1 className='text-2xl lg:text-3xl xl:text-5xl font-semibold '>
            Keep Your Body Fit <span className='text-primary'>&</span> Strong
          </h1>
          <div className='flex items-center justify-between gap-x-6'>
            <button className='text-background bg-primary rounded-md w-[170px] h-[62px] flex items-center justify-center text-xl uppercase font-medium cursor-pointer hover:bg-primary/90 transition-colors duration-300'>
              start today
            </button>
            <button className='text-foreground bg-transparent border border-primary rounded-md w-[170px] h-[62px] flex items-center justify-center text-xl uppercase font-medium cursor-pointer hover:bg-primary hover:text-background transition-colors duration-300'>
              about us
            </button>
          </div>
        </ContentWrapper>
      </header>

      <ContentWrapper className='py-10 lg:py-20'>
        <div className='flex items-center justify-between'>
          <h2 className='text-5xl text-primary uppercase font-semibold'>Upcoming Classes</h2>
          <Link
            href={'/up-coming'}
            className='text-lg font-thin text-muted-foreground hover:text-foreground transition-colors duration-300 underline capitalize'>
            see all
          </Link>
        </div>
        <Carousel className='mt-6 lg:mt-10'>
          <CarouselContent>
            <CarouselItem className='basis-1/4'>
              <Card className='bg-background-shade border-primary shadow-lg pt-0 overflow-hidden'>
                <CardHeader className='p-0'>
                  <Image
                    src='/assets/images/hero.jpg'
                    alt='card image'
                    width={700}
                    height={376}
                    className='w-full h-full'
                  />
                </CardHeader>
                <CardContent>
                  <h3 className='text-xl font-bold text-foreground'>Aerobic Training</h3>
                  <p className='text-lg font-thin text-muted-foreground line-clamp-2'>
                    containing Lorem Ipsum passagesand more recently with
                  </p>
                </CardContent>
                <CardFooter className='flex-col gap-y-3'>
                  <button className='bg-primary text-background w-full transition-colors duration-300 hover:bg-primary/90  cursor-pointer rounded-md py-2 capitalize font-semibold text-xl'>
                    join
                  </button>
                  <button className='bg-transparent border border-primary text-foreground hover:bg-primary hover:text-background cursor-pointer transition-colors duration-300 w-full rounded-md py-2 capitalize font-semibold text-xl'>
                    join
                  </button>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className='basis-1/4'>
              <Card className='bg-background-shade border-primary shadow-lg pt-0 overflow-hidden'>
                <CardHeader className='p-0'>
                  <Image
                    src='/assets/images/hero.jpg'
                    alt='card image'
                    width={700}
                    height={376}
                    className='w-full h-full'
                  />
                </CardHeader>
                <CardContent>
                  <h3 className='text-xl font-bold text-foreground'>Aerobic Training</h3>
                  <p className='text-lg font-thin text-muted-foreground line-clamp-2'>
                    containing Lorem Ipsum passagesand more recently with
                  </p>
                </CardContent>
                <CardFooter className='flex-col gap-y-3'>
                  <button className='bg-primary text-background w-full transition-colors duration-300 hover:bg-primary/90  cursor-pointer rounded-md py-2 capitalize font-semibold text-xl'>
                    join
                  </button>
                  <button className='bg-transparent border border-primary text-foreground hover:bg-primary hover:text-background cursor-pointer transition-colors duration-300 w-full rounded-md py-2 capitalize font-semibold text-xl'>
                    join
                  </button>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className='basis-1/4'>
              <Card className='bg-background-shade border-primary shadow-lg pt-0 overflow-hidden'>
                <CardHeader className='p-0'>
                  <Image
                    src='/assets/images/hero.jpg'
                    alt='card image'
                    width={700}
                    height={376}
                    className='w-full h-full'
                  />
                </CardHeader>
                <CardContent>
                  <h3 className='text-xl font-bold text-foreground'>Aerobic Training</h3>
                  <p className='text-lg font-thin text-muted-foreground line-clamp-2'>
                    containing Lorem Ipsum passagesand more recently with
                  </p>
                </CardContent>
                <CardFooter className='flex-col gap-y-3'>
                  <button className='bg-primary text-background w-full transition-colors duration-300 hover:bg-primary/90  cursor-pointer rounded-md py-2 capitalize font-semibold text-xl'>
                    join
                  </button>
                  <button className='bg-transparent border border-primary text-foreground hover:bg-primary hover:text-background cursor-pointer transition-colors duration-300 w-full rounded-md py-2 capitalize font-semibold text-xl'>
                    join
                  </button>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className='basis-1/4'>
              <Card className='bg-background-shade border-primary shadow-lg pt-0 overflow-hidden'>
                <CardHeader className='p-0'>
                  <Image
                    src='/assets/images/hero.jpg'
                    alt='card image'
                    width={700}
                    height={376}
                    className='w-full h-full'
                  />
                </CardHeader>
                <CardContent>
                  <h3 className='text-xl font-bold text-foreground'>Aerobic Training</h3>
                  <p className='text-lg font-thin text-muted-foreground line-clamp-2'>
                    containing Lorem Ipsum passagesand more recently with
                  </p>
                </CardContent>
                <CardFooter className='flex-col gap-y-3'>
                  <button className='bg-primary text-background w-full transition-colors duration-300 hover:bg-primary/90  cursor-pointer rounded-md py-2 capitalize font-semibold text-xl'>
                    join
                  </button>
                  <button className='bg-transparent border border-primary text-foreground hover:bg-primary hover:text-background cursor-pointer transition-colors duration-300 w-full rounded-md py-2 capitalize font-semibold text-xl'>
                    join
                  </button>
                </CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ContentWrapper>

      <ContentWrapper className='py-10 lg:py-20'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col items-start gap-y-2'>
            <span className='text-xl font-bold text-primary uppercase tracking-[5px]'>welcome</span>
            <h2 className='text-5xl text-foreground uppercase font-semibold'>Upcoming Classes</h2>
            <p className='font-thin text-muted-foreground max-w-md text-lg'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              point of using Lorem Ipsum is
            </p>
          </div>
          <div>
            <h4 className='text-[220px] font-bold uppercase text-transparent drop-shadow-[0_0_10px_#F0B100] stroke-black'>story</h4>
          </div>
        </div>
        <div className='flex items-center justify-between gap-x-6'>
          <div className='p-4 bg-background-shade rounded-md w-1/2'>
            <p className='text-xl font-medium text-muted-foreground tracking-wider'>
              Story It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
              layout.point of using Lorem Ipsum. Story It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout.point of using Lorem Ipsum.
            </p>
          </div>
          <div className='flex flex-col gap-y-6 w-1/2'>
            <div className='p-4 bg-muted-foreground/20 rounded-md w-full'>
              <p className='text-xl font-medium text-primary tracking-wider'>
                Story It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                layout.point of using Lorem Ipsum. Story It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.point of using Lorem Ipsum.
              </p>
            </div>
            <div className='p-4 bg-secondary-foreground rounded-md w-full'>
              <p className='text-xl font-medium text-foreground tracking-wider'>
                Story It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                layout.point of using Lorem Ipsum. Story It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.point of using Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
