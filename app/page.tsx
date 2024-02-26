import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='h-dvh flex items-center justify-between bg-hero-pattern bg-fixed bg-cover px-14'>
        <h1 className='tracking-tighter text-[8.5dvw] text-white leading-[1] mt-[7.5dvw]'>
          Powering Innovation
          <p className='text-base tracking-[0.3rem] mt-8'>
            Redefining Innovative Energy Solutions
          </p>
        </h1>
        <Image
          src='/hawa.jpeg'
          alt=''
          width={1000}
          height={1000}
          className='w-[40dvw] mt-[calc(7.5dvw+0.5rem)]'
        />
      </div>
      <div className='h-[calc(100dvh-7.5dvw-0.5rem+0.8px)]'></div>
    </main>
  );
}
