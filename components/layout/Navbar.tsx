'use client';
import Image from 'next/image';
import Link from 'next/link';
import ContentWrapper from '../shared/ContentWrapper';
import { navigations } from '@/CONSTANTS';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import BookClassButton from '../buttons/book-class';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='py-3'>
      <ContentWrapper className='h-full flex items-center justify-between'>
        <div>
          <Link href={'/'}>
            <Image
              src={'/assets/images/logo.png'}
              alt='gold"s gym logo'
              width={206}
              height={47}
              className='lg:w-[206px] lg:h-[47] w-[166px] h-[40px]'
            />
          </Link>
        </div>
        <Sheet>
          <SheetTrigger
            className='flex lg:hidden'
            asChild>
            <Button className='bg-primary hover:bg-primary'>
              <Menu className='size-6' />
            </Button>
          </SheetTrigger>
          <SheetContent className='bg-white border-secondary max-w-sm'>
            <SheetHeader>
              <SheetTitle className='sr-only'>Are you absolutely sure?</SheetTitle>
              <SheetDescription className='sr-only'>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <div className='flex flex-col items-center gap-y-6 mt-6'>
              {navigations.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className={cn(
                    'capitalize text-xl font-semibold font-lato px-4 text-black-shade/80',
                    pathname === link.href && 'text-bla-p'
                  )}>
                  {link.text}
                </Link>
              ))}
              <BookClassButton />
            </div>
          </SheetContent>
        </Sheet>
        <div className='hidden lg:flex items-center gap-x-6'>
          {navigations.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className={cn('capitalize text-xl font-semibold font-lato px-4 text-black-shade/80', pathname === link.href && 'text-bla-p')}>
              {link.text}
            </Link>
          ))}
          <BookClassButton />
        </div>
      </ContentWrapper>
    </nav>
  );
};

export default Navbar;
