'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Features',
      link: '/features',
    },
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Product',
      link: '/product',
    },
    {
      name: 'Contact Us',
      link: '/contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 flex w-full items-center transition-all duration-150 justify-between px-14 py-2 z-[10] ${
        scrolled ? 'bg-[#FAF9F4] shadow-2xl ' : 'border-b-[0.8px]'
      }`}
    >
      <Link href='/' className='flex items-center gap-2'>
        <Image
          src='/logo.png'
          alt=''
          height={200}
          width={200}
          className='w-[7.5dvw]'
        />
        <p
          className={`${
            scrolled ? 'text-black' : 'text-white'
          } text-[2.5dvw] tracking-tighter`}
        >
          SolarBreeze
        </p>
      </Link>
      <nav className='gap-[2dvw] flex'>
        {navLinks.map((link, index) => (
          <Link href={link.link} key={index}>
            <p
              className={`text-[1.5dvw] ${
                scrolled ? 'text-slate-900 hover:text-slate-600' : 'text-white'
              }`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </nav>
    </header>
  );
}
