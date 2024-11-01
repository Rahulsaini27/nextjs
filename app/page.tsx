"use client";

import { useEffect, useState } from 'react';
import AcmeLogo from '@/app/ui/acme-logo';
import { inter } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className={`${inter.className} text-xl text-gray-800 md:text-3xl mx-6 md:leading-normal`}>
        <strong>Welcome to Acme.</strong> This is the example for the{' '}
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course
        </a>, brought to you by Vercel.
      </div>

      {isClient && <AcmeLogo />}

      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Dashboard project showing desktop version"
          priority
        />
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="hidden md:block"
          alt="Dashboard project showing mobile version"
        />
      </div>
    </>
  );
}
