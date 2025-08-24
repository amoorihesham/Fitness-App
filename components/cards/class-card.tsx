import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ClassCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <Image
        src={'/assets/images/card-image.jpg'}
        alt='card image'
        width={447}
        height={429}
        className='mb-6 w-full'
      />
      <div className='flex flex-col gap-y-2'>
        <h4 className='h4'>Pilates Training</h4>
        <p className='para max-w-[367px]'>containing Lorem Ipsum passages and more recently with </p>
        <Link
          href={'#'}
          className='font-semibold font-lato text-[22px] text-secondary capitalize hover:underline'>
          read more
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
