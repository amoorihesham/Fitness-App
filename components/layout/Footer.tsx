import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black-p'>
      <div className='bg-[url(/assets/images/follow-me.jpg)] bg-center bg-cover h-[275px] flex items-center justify-center h2 text-white capitalize gap-x-4'>
        follow me on
        <Link
          href={'#'}
          className='underline'>
          instagram
        </Link>
      </div>
      <div className='py-20'></div>
    </footer>
  );
};

export default Footer;
