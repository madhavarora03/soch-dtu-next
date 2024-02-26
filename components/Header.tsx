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
      className={`fixed top-0 flex w-full items-center justify-between px-24 py-2 z-[10] ${
        scrolled ? 'bg-[#FAF9F4] shadow-2xl ' : 'border-b-[0.8px]'
      }`}
    >
      <Link href='/'>
        <Image
          src='/logo.png'
          alt=''
          height={200}
          width={200}
          className='w-[7.5dvw]'
        />
      </Link>
      <nav className='gap-[2dvw] flex'>
        {navLinks.map((link, index) => (
          <Link href={link.link} key={index}>
            <p
              className={`${
                scrolled
                  ? 'text-slate-900 text-[1.5dvw] hover:text-slate-600'
                  : 'text-white'
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
