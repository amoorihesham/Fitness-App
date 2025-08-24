import { Button } from '@/components/ui/button';
import ContentWrapper from '@/components/shared/ContentWrapper';
import ClassCard from '@/components/cards/class-card';
import LineBanner from './_components/line-banner';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Diamond, Heart, Play, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className=' h-[calc(100dvh-95px)] bg-[url(/assets/images/hero.jpg)] bg-center bg-cover bg-no-repeat flex items-center justify-center '>
        <ContentWrapper className='flex flex-col items-center justify-center gap-y-8'>
          <h1 className='h1 text-center hero-shadow'>
            Keep Your Body <br />
            Fit <span className='text-primary'>&</span> Strong
          </h1>

          <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-x-6 gap-y-6'>
            <Button className='capitalize px-[50px] py-5 bg-primary rounded-none text-[22px] font-semibold font-lato hover:bg-transparent hover:text-white border border-primary hover:border-white'>
              start today
            </Button>
            <Button className='capitalize px-[50px] py-5 bg-transparent rounded-none font-semibold font-lato hover:bg-primary hover:text-black-p border border-white text-white text-[22px]  hover:border-primary'>
              about me
            </Button>
          </div>
        </ContentWrapper>
      </header>

      <ContentWrapper className='py-10 lg:py-30'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-secondary  lg:text-xl font-semibold font-inter uppercase tracking-[4px] lg:tracking-[8px]'>
              OUR FITNESS TRAINING
            </p>
            <h2 className='h2'>Upcoming Classes</h2>
          </div>
          <div className='hidden lg:flex'>
            <Button className='capitalize px-[50px] py-5 bg-black-p rounded-none text-[22px] text-white-p font-semibold font-lato hover:bg-black-shade'>
              More Class
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-14'>
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </ContentWrapper>
      <LineBanner />

      <ContentWrapper className='py-10 lg:py-30'>
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between gap-y-10'>
          <div>
            <p className='text-secondary text-xl font-semibold font-inter uppercase tracking-[4px] lg:tracking-[8px]'>About</p>
            <h2 className='h2'>
              Respect Your Body,
              <br /> It’s the Only One You Get
            </h2>
            <p className='para max-w-[569px] mt-8 mb-12'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              point of using Lorem Ipsum is
            </p>
            <div className='flex flex-col gap-y-5'>
              <div className='bg-white-p p-8 flex flex-col lg:flex-row gap-y-6 items-center justify-between gap-x-10'>
                <div className='flex flex-col gap-y-[13px]'>
                  <h4 className='h4'>Motivation</h4>
                  <p className='para max-w-[311px]'>It is a long established fact that a reader will be distracted </p>
                </div>
                <div>
                  <Image
                    src={'/assets/images/motivation.jpg'}
                    alt='motivation story'
                    width={246}
                    height={191}
                    className='w-full'
                  />
                </div>
              </div>
              <div className='bg-white-p p-8 flex flex-col lg:flex-row gap-y-6 items-center justify-between gap-x-10'>
                <div>
                  <Image
                    src={'/assets/images/inspire.jpg'}
                    alt='inspire story'
                    width={246}
                    height={191}
                    className='w-full'
                  />
                </div>
                <div className='flex flex-col gap-y-[13px]'>
                  <h4 className='h4'>Inspire</h4>
                  <p className='para max-w-[311px]'>will be distracted by readable content using Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <Image
              src={'/assets/images/about-image.png'}
              alt='about image'
              width={645}
              height={784}
              className='w-full'
            />
            <Button className='lg:px-[50px] px-6 bg-white-p py-5 absolute bottom-5 lg:bottom-10 left-20 lg:left-40 rounded-none font-semibold font-lato text-lg lg:text-[22px] capitalize'>
              Get Started
            </Button>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper className='py-10 lg:py-20 border-y border-white-muted/30 flex flex-col lg:flex-row gap-y-8 items-center justify-between'>
        <div className='px-[10px] py-2 bg-white-p flex items-center gap-x-5 w-[270px]'>
          <span className='size-[44px] bg-black-p flex items-center justify-center text-white text-xl font-semibold font-inter'>01</span>
          <p className='text-[22px] font-medium font-lato text-black-p capitalize'>Fitnes Taining</p>
        </div>
        <div className='px-[10px] py-2 bg-white-p flex items-center gap-x-5 w-[270px]'>
          <span className='size-[44px] bg-black-p flex items-center justify-center text-white text-xl font-semibold font-inter'>02</span>
          <p className='text-[22px] font-medium font-lato text-black-p capitalize'>Regular Routine</p>
        </div>
        <div className='px-[10px] py-2 bg-white-p flex items-center gap-x-5 w-[270px]'>
          <span className='size-[44px] bg-black-p flex items-center justify-center text-white text-xl font-semibold font-inter'>03</span>
          <p className='text-[22px] font-medium font-lato text-black-p capitalize'>Deit Maintenance</p>
        </div>
        <div>
          <Image
            src={'/assets/images/google-review.png'}
            alt='google review rating'
            width={298}
            height={68}
          />
        </div>
      </ContentWrapper>

      <div className='py-10 lg:py-30 bg-black-p mt-20'>
        <ContentWrapper>
          <div className='flex flex-col items-center'>
            <p className='text-primary text-xl font-semibold font-inter uppercase tracking-[8px]'>Time table</p>
            <h2 className='h2 text-white'>Working Schedule</h2>
          </div>
          <div className='mt-14'>
            <ul className='hidden lg:flex items-center justify-between max-w-[1067px] mx-auto'>
              <li>
                <Button
                  variant={'ghost'}
                  className='text-white-muted text-xl font-normal font-lato capitalize hover:text-primary'>
                  Sunday
                </Button>
              </li>
              <li>
                <Button
                  variant={'ghost'}
                  className='text-white-muted text-xl font-normal font-lato capitalize hover:text-primary'>
                  Monday
                </Button>
              </li>
              <li>
                <Button
                  variant={'ghost'}
                  className='text-white-muted text-xl font-normal font-lato capitalize hover:text-primary'>
                  Tuesday
                </Button>
              </li>
              <li>
                <Button
                  variant={'ghost'}
                  className='text-white-muted text-xl font-normal font-lato capitalize hover:text-primary'>
                  Wednesday
                </Button>
              </li>
              <li>
                <Button
                  variant={'ghost'}
                  className='text-white-muted text-xl font-normal font-lato capitalize hover:text-primary'>
                  Thursday
                </Button>
              </li>
              <li>
                <Button
                  variant={'ghost'}
                  className='text-white-muted text-xl font-normal font-lato capitalize hover:text-primary'>
                  Friday
                </Button>
              </li>
              <li>
                <Button
                  variant={'ghost'}
                  className='text-white-muted text-xl font-normal font-lato capitalize hover:text-primary'>
                  Saturday
                </Button>
              </li>
            </ul>
            <table className='max-w-[1400px] bg-red-500'></table>
          </div>
        </ContentWrapper>
      </div>

      <div className='py-10 lg:py-20 mt-10 lg:mt-20 relative overflow-hidden h-[726px] lg:h-[612px]'>
        <div className=''>
          <Carousel>
            <CarouselContent className=' gap-x-8'>
              <CarouselItem className='lg:ps-[53px] py-12 px-8 lg:pe-[100px] lg:py-[66px] bg-white-p flex flex-col lg:flex-row items-center lg:items-start gap-y-[22px] basis-full lg:basis-[940px]'>
                <div className='relative lg:pe-[43px] pb-[43px] border-b lg:border-e border-white-muted/40'>
                  <Image
                    src={'/assets/images/review-image.png'}
                    alt='review image'
                    width={192}
                    height={192}
                  />
                  <span
                    className='absolute size-[52px] lg:size-[71px] text-white text-[34px] lg:text-[60px] font-bold font-lato rounded-full bg-secondary flex items-center justify-center top-0
                   lg:-top-5 left-0'>
                    “
                  </span>
                </div>
                <div className='ps-8 lg:ps-[43px] lg:max-w-[507px] w-full'>
                  <h5 className='h5 text-black-p lg:mb-[5px]'>Nattasha</h5>
                  <span className='text-white-muted text-lg font-normal font-lato'>Athletics /Trainer</span>
                  <div className='flex items-center gap-x-1 mt-2 mb-4 lg:mt-4 lg:mb-6'>
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                  </div>
                  <p className='para'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className='lg:ps-[53px] py-12 px-8 lg:pe-[100px] lg:py-[66px] bg-white-p flex flex-col lg:flex-row items-center lg:items-start gap-y-[22px] basis-full lg:basis-[940px]'>
                <div className='relative lg:pe-[43px] pb-[43px] border-b lg:border-e border-white-muted/40'>
                  <Image
                    src={'/assets/images/review-image.png'}
                    alt='review image'
                    width={192}
                    height={192}
                  />
                  <span
                    className='absolute size-[52px] lg:size-[71px] text-white text-[34px] lg:text-[60px] font-bold font-lato rounded-full bg-secondary flex items-center justify-center top-0
                   lg:-top-5 left-0'>
                    “
                  </span>
                </div>
                <div className='ps-8 lg:ps-[43px] lg:max-w-[507px] w-full'>
                  <h5 className='h5 text-black-p lg:mb-[5px]'>Nattasha</h5>
                  <span className='text-white-muted text-lg font-normal font-lato'>Athletics /Trainer</span>
                  <div className='flex items-center gap-x-1 mt-2 mb-4 lg:mt-4 lg:mb-6'>
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                  </div>
                  <p className='para'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className='lg:ps-[53px] py-12 px-8 lg:pe-[100px] lg:py-[66px] bg-white-p flex flex-col lg:flex-row items-center lg:items-start gap-y-[22px] basis-full lg:basis-[940px]'>
                <div className='relative lg:pe-[43px] pb-[43px] border-b lg:border-e border-white-muted/40'>
                  <Image
                    src={'/assets/images/review-image.png'}
                    alt='review image'
                    width={192}
                    height={192}
                  />
                  <span
                    className='absolute size-[52px] lg:size-[71px] text-white text-[34px] lg:text-[60px] font-bold font-lato rounded-full bg-secondary flex items-center justify-center top-0
                   lg:-top-5 left-0'>
                    “
                  </span>
                </div>
                <div className='ps-8 lg:ps-[43px] lg:max-w-[507px] w-full'>
                  <h5 className='h5 text-black-p lg:mb-[5px]'>Nattasha</h5>
                  <span className='text-white-muted text-lg font-normal font-lato'>Athletics /Trainer</span>
                  <div className='flex items-center gap-x-1 mt-2 mb-4 lg:mt-4 lg:mb-6'>
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                    <Star className='text-amber-400 fill-amber-400' />
                  </div>
                  <p className='para'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='top-[calc(100%+30px)] lg:top-[calc(100%+80px)] left-[34%] lg:left-[36%] size-[52px] lg:size-[76px] bg-black-p text-white' />
            <CarouselNext className='top-[calc(100%+30px)] lg:top-[calc(100%+80px)] right-[34%] lg:right-[36%] size-[52px] lg:size-[76px] bg-secondary text-white' />
          </Carousel>
        </div>
        <h1 className='hidden lg:flex text-[209px] font-black font-inter uppercase text-nowrap stroke-black-text text-transparent absolute -bottom-18 z-[-1]'>
          clients say about me
        </h1>
      </div>

      <ContentWrapper className='py-10 lg:pt-30 lg:pb-20'>
        <div className='flex flex-col items-center'>
          <p className='text-secondary text-xl font-semibold font-inter uppercase tracking-[8px]'>Our Trainers</p>
          <h2 className='h2'>We Trained You to Gain</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-6 lg:mt-14'>
          <div>
            <Image
              src={'/assets/images/card-image.jpg'}
              alt='card image'
              width={447}
              height={429}
              className=' w-full'
            />
            <div className='flex flex-col gap-y-2 bg-black-p p-6 lg:p-[44px]'>
              <h4 className='font-semibold font-inter text-[25px] text-white flex items-center justify-between'>
                Amanda{' '}
                <span className='flex items-center text-lg font-normal font-inter'>
                  <Star className='text-amber-400 fill-amber-400 size-4' />
                  /5
                </span>
              </h4>
              <hr className='border-white-muted/40 my-4 lg:my-6' />
              <h6 className='text-xl font-bold font-lato text-white'>Specialisations :</h6>
              <p className='para max-w-[367px]'>containing Lorem Ipsum passages and more recently with </p>
              <div className='flex items-center lg:gap-x-4 gap-x-2 mt-4 lg:mt-8'>
                <Link href={'#'}>
                  <Image
                    src={'/assets/icons/instagram.png'}
                    alt='instagram icon'
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href={'#'}>
                  <Image
                    src={'/assets/icons/facebook.png'}
                    alt='facebook icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={'/assets/images/card-image.jpg'}
              alt='card image'
              width={447}
              height={429}
              className=' w-full'
            />
            <div className='flex flex-col gap-y-2 bg-black-p p-6 lg:p-[44px]'>
              <h4 className='font-semibold font-inter text-[25px] text-white flex items-center justify-between'>
                Amanda{' '}
                <span className='flex items-center text-lg font-normal font-inter'>
                  <Star className='text-amber-400 fill-amber-400 size-4' />
                  /5
                </span>
              </h4>
              <hr className='border-white-muted/40 my-4 lg:my-6' />
              <h6 className='text-xl font-bold font-lato text-white'>Specialisations :</h6>
              <p className='para max-w-[367px]'>containing Lorem Ipsum passages and more recently with </p>
              <div className='flex items-center lg:gap-x-4 gap-x-2 mt-4 lg:mt-8'>
                <Link href={'#'}>
                  <Image
                    src={'/assets/icons/instagram.png'}
                    alt='instagram icon'
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href={'#'}>
                  <Image
                    src={'/assets/icons/facebook.png'}
                    alt='facebook icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={'/assets/images/card-image.jpg'}
              alt='card image'
              width={447}
              height={429}
              className=' w-full'
            />
            <div className='flex flex-col gap-y-2 bg-black-p p-6 lg:p-[44px]'>
              <h4 className='font-semibold font-inter text-[25px] text-white flex items-center justify-between'>
                Amanda{' '}
                <span className='flex items-center text-lg font-normal font-inter'>
                  <Star className='text-amber-400 fill-amber-400 size-4' />
                  /5
                </span>
              </h4>
              <hr className='border-white-muted/40 my-4 lg:my-6' />
              <h6 className='text-xl font-bold font-lato text-white'>Specialisations :</h6>
              <p className='para max-w-[367px]'>containing Lorem Ipsum passages and more recently with </p>
              <div className='flex items-center lg:gap-x-4 gap-x-2 mt-4 lg:mt-8'>
                <Link href={'#'}>
                  <Image
                    src={'/assets/icons/instagram.png'}
                    alt='instagram icon'
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href={'#'}>
                  <Image
                    src={'/assets/icons/facebook.png'}
                    alt='facebook icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>

      <div className='py-10 lg:py-30 bg-secondary mt-10 lg:mt-20'>
        <ContentWrapper>
          <div className='flex flex-col lg:flex-row items-start justify-between gap-y-8'>
            <div className='relative h-[666px] lg:h-[951px]'>
              <p className='text-white text-xl font-semibold font-inter uppercase tracking-[8px]'>Gym AMENITIES</p>
              <h2 className='h2 text-white'>The Unique Standard</h2>
              <p className='para max-w-[569px] mt-8 mb-12 text-white'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                point of using Lorem Ipsum is
              </p>
              <div className='relative h-[441px] lg:h-[692px]'>
                <Image
                  src={'/assets/images/standars.jpg'}
                  alt='about image'
                  width={550}
                  height={692}
                />
                <Button className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 size-[100px] rounded-full bg-primary flex items-center justify-center group hover:bg-primary'>
                  <Play className='size-8 fill-black-p group-hover:fill-white group-hover:text-white transition-colors duration-300' />
                </Button>
              </div>
              <h3 className='hidden lg:flex text-[250px] uppercase stroke-white-text text-transparent absolute bottom-[-153px] left-[-471]'>
                benefits
              </h3>
            </div>
            <div className='w-full lg:w-[718px]'>
              <div className='py-8 border-t border-white'>
                <div className='lg:px-5 px-4 py-2 lg:py-2 bg-black-p flex items-center gap-x-2 lg:text-xl font-bold font-lato text-white w-fit'>
                  <Image
                    src={'/assets/icons/correct.png'}
                    alt='correct icon'
                    width={18}
                    height={18}
                  />
                  LOCKERS
                </div>
                <p className='text-xl font-medium last: text-white mt-[10px] max-w-[300px] lg:max-w-[562px]'>
                  Secure lockers that work by you choosing a four digit code.
                </p>
              </div>
              <div className='py-8 border-t border-white'>
                <div className='lg:px-5 px-4 py-2 lg:py-2 bg-black-p flex items-center gap-x-2 lg:text-xl font-bold font-lato text-white w-fit'>
                  <Image
                    src={'/assets/icons/correct.png'}
                    alt='correct icon'
                    width={18}
                    height={18}
                  />
                  CHANGING ROOMS
                </div>
                <p className='text-xl font-medium last: text-white mt-[10px] max-w-[300px] lg:max-w-[562px]'>
                  Delicious, protein-packed gourmet shakes that come in chocolate, fruit, vanilla and more. Water and snacks too.
                </p>
              </div>
              <div className='py-8 border-t border-white'>
                <div className='lg:px-5 px-4 py-2 lg:py-2 bg-black-p flex items-center gap-x-2 lg:text-xl font-bold font-lato text-white w-fit'>
                  <Image
                    src={'/assets/icons/correct.png'}
                    alt='correct icon'
                    width={18}
                    height={18}
                  />
                  FUEL BAR
                </div>
                <p className='text-xl font-medium last: text-white mt-[10px] max-w-[300px] lg:max-w-[562px]'>
                  Mini towels for class and lovely big towels for showers after class. *Amenities may not be available at all studios
                </p>
              </div>
              <div className='py-8 border-t border-white'>
                <div className='lg:px-5 px-4 py-2 lg:py-2 bg-black-p flex items-center gap-x-2 lg:text-xl font-bold font-lato text-white w-fit'>
                  <Image
                    src={'/assets/icons/correct.png'}
                    alt='correct icon'
                    width={18}
                    height={18}
                  />
                  COMPLIMENTARY TOWELS
                </div>
                <p className='text-xl font-medium last: text-white mt-[10px] max-w-[300px] lg:max-w-[562px]'>
                  Secure lockers that work by you choosing a four digit code.
                </p>
              </div>
              <div className='py-8 border-t border-white'>
                <div className='lg:px-5 px-4 py-2 lg:py-2 bg-black-p flex items-center gap-x-2 lg:text-xl font-bold font-lato text-white w-fit'>
                  <Image
                    src={'/assets/icons/correct.png'}
                    alt='correct icon'
                    width={18}
                    height={18}
                  />
                  WIFI & RESTROOMS
                </div>
                <p className='text-xl font-medium last: text-white mt-[10px] max-w-[300px] lg:max-w-[562px]'>
                  Secure lockers that work by you choosing a four digit code.
                </p>
              </div>
              <div className='py-8 border-y  border-white'>
                <div className='lg:px-5 px-4 py-2 lg:py-2 bg-black-p flex items-center gap-x-2 lg:text-xl font-bold font-lato text-white w-fit'>
                  <Image
                    src={'/assets/icons/correct.png'}
                    alt='correct icon'
                    width={18}
                    height={18}
                  />
                  HOT SHOWERS & HAIR CARE
                </div>
                <p className='text-xl font-medium last: text-white mt-[10px] max-w-[300px] lg:max-w-[562px]'>
                  what your body craves in the morning, you're not alone. The majority of people crank the handle all the way up.
                </p>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>

      <ContentWrapper className='py-10 lg:py-30'>
        <div className='flex flex-col items-center'>
          <p className='text-secondary text-xl font-semibold font-inter uppercase tracking-[8px]'>Our Plan</p>
          <h2 className='h2'>Choose the Program</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-6 lg:mt-14'>
          <div className='py-[54px] px-8 group bg-white-p shadow-sm'>
            <div>
              <h3 className='h3 capitalize flex items-center gap-x-2'>
                <Heart className='text-red-500 fill-red-500 size-8' />
                basic
              </h3>
              <hr className='my-8 border-white-muted/40' />
              <div className='flex flex-col items-center gap-y-2'>
                <p className='h4'>$25 / month</p>
                <span className='text-xl font-bold font-lato'>30% Off for Beginners</span>
              </div>
              <hr className='my-8 border-white-muted/40' />
              <div className='items-center flex flex-col gap-y-5'>
                <p className='text-xl font-bold font-lato text-secondary'>1 Day Free Trial</p>
                <ul className='text-xl font-medium font-lato text-white-muted text-center space-y-6 group-hover:text-black-p transition-colors duration-300'>
                  <li>20 minutes of heart-pumping spin</li>
                  <li>20 minutes of strength training</li>
                  <li>50 Class Times Available</li>
                  <li>20 minutes of invigorating yoga</li>
                </ul>
                <Button
                  className='bg-black-p py-5
               px-[50px] capitalize text-white text-[22px] font-semibold font-lato rounded-none hover:bg-black-shade mt-6'>
                  get started
                </Button>
              </div>
            </div>
          </div>
          <div className='py-[54px] px-8 group bg-white-p shadow-sm'>
            <div>
              <h3 className='h3 capitalize flex items-center gap-x-2'>
                <Star className='text-secondary fill-secondary size-8' />
                Standard
              </h3>
              <hr className='my-8 border-white-muted/40' />
              <div className='flex flex-col items-center gap-y-2'>
                <p className='h4'>$35 / month</p>
                <span className='text-xl font-bold font-lato'>30% Off for Beginners</span>
              </div>
              <hr className='my-8 border-white-muted/40' />
              <div className='items-center flex flex-col gap-y-5'>
                <p className='text-xl font-bold font-lato text-secondary'>1 Day Free Trial</p>
                <ul className='text-xl font-medium font-lato text-white-muted text-center space-y-6 group-hover:text-black-p transition-colors duration-300'>
                  <li>20 minutes of heart-pumping spin</li>
                  <li>20 minutes of strength training</li>
                  <li>50 Class Times Available</li>
                  <li>20 minutes of invigorating yoga</li>
                </ul>
                <Button
                  className='bg-black-p py-5
               px-[50px] capitalize text-white text-[22px] font-semibold font-lato rounded-none hover:bg-black-shade mt-6'>
                  get started
                </Button>
              </div>
            </div>
          </div>
          <div className='py-[54px] px-8 group bg-white-p shadow-sm'>
            <div>
              <h3 className='h3 capitalize flex items-center gap-x-2'>
                <Diamond className='text-orange-500 fill-orange-400 size-8' />
                Premium
              </h3>
              <hr className='my-8 border-white-muted/40' />
              <div className='flex flex-col items-center gap-y-2'>
                <p className='h4'>$25 / month</p>
                <span className='text-xl font-bold font-lato'>30% Off for Beginners</span>
              </div>
              <hr className='my-8 border-white-muted/40' />
              <div className='items-center flex flex-col gap-y-5'>
                <p className='text-xl font-bold font-lato text-secondary'>1 Day Free Trial</p>
                <ul className='text-xl font-medium font-lato text-white-muted text-center space-y-6 group-hover:text-black-p transition-colors duration-300'>
                  <li>20 minutes of heart-pumping spin</li>
                  <li>20 minutes of strength training</li>
                  <li>50 Class Times Available</li>
                  <li>20 minutes of invigorating yoga</li>
                </ul>
                <Button
                  className='bg-black-p py-5
               px-[50px] capitalize text-white text-[22px] font-semibold font-lato rounded-none hover:bg-black-shade mt-6'>
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper className='py-10 lg:py-30'>
        <h2 className='h2'>Articles & News</h2>

        <div className='mt-14 max-w-[950px] mx-auto space-y-5'>
          <div className='lg:py-16 py-6 px-5 lg:px-20 bg-white-p'>
            <p
              className='text-xl text-black-p font-normal font-lato flex items-center gap-x-4 mb-4
             lg:mb-8'>
              <span className='text-secondary font-medium font-lato'>March 23, 2022</span> Fitness
            </p>
            <h3 className='h4 mb-2 lg:mb-4'>The 10 best exercises to do in your park</h3>
            <p className='para mb-4 lg:mb-8'>
              There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Habitasse .
            </p>
            <Button
              className='bg-transparent border border-black-p py-4 lg:py-5
                px-10 lg:px-[50px] capitalize text-black-p lg:text-[22px] font-semibold font-lato rounded-none hover:bg-black-shade hover:text-white mt-6'>
              get started
            </Button>
          </div>
          <div className='lg:py-16 py-6 px-5 lg:px-20 bg-white-p'>
            <p
              className='text-xl text-black-p font-normal font-lato flex items-center gap-x-4 mb-4
             lg:mb-8'>
              <span className='text-secondary font-medium font-lato'>March 23, 2022</span> Fitness
            </p>
            <h3 className='h4 mb-2 lg:mb-4'>The 10 best exercises to do in your park</h3>
            <p className='para mb-4 lg:mb-8'>
              There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Habitasse .
            </p>
            <Button
              className='bg-transparent border border-black-p py-4 lg:py-5
                px-10 lg:px-[50px] capitalize text-black-p lg:text-[22px] font-semibold font-lato rounded-none hover:bg-black-shade hover:text-white mt-6'>
              get started
            </Button>
          </div>
          <div className='lg:py-16 py-6 px-5 lg:px-20 bg-[url(/assets/images/news-image.jpg)] bg-cover bg-center bg-no-repeat'>
            <p
              className='text-xl text-white font-normal font-lato flex items-center gap-x-4 m mb-4
            blg:-8'>
              <span className='font-medium font-lato'>March 23, 2022</span> Fitness
            </p>
            <h3 className='h4 mb-2 lg:mb-4 text-white'>The 10 best exercises to do in your park</h3>
            <p className='para mb-4 lg:mb-8 text-white'>
              There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Habitasse .
            </p>
            <Button
              className='bg-primary py-4 lg:py-5
                px-10 lg:px-[50px] capitalize text-black-p lg:hover:bg-primary text-[22px] font-semibold font-lato rounded-none mt-6'>
              get started
            </Button>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
