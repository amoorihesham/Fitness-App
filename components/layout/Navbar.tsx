'use client';
import Image from 'next/image';
import Link from 'next/link';
import ContentWrapper from '../shared/ContentWrapper';
import { navigations } from '@/CONSTANTS';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='border-b py-3'>
      <ContentWrapper className='h-full flex items-center justify-between'>
        <div>
          <Link href={'/'}>
            <Image
              src={'/assets/images/logo.png'}
              alt='gold"s gym logo'
              width={52}
              height={72}
            />
          </Link>
        </div>
        <div className='flex items-center gap-x-6'>
          {navigations.map(({ href, Icon, id }) => (
            <Link
              href={href}
              key={id}
              className={cn(
                'capitalize text-lg font-medium text-muted-foreground group hover:bg-primary hover:text-background size-10 flex items-center justify-center rounded-full',
                pathname === href && 'bg-primary text-background'
              )}>
              <Icon />
            </Link>
          ))}
        </div>
      </ContentWrapper>
    </nav>
  );
};

export default Navbar;
