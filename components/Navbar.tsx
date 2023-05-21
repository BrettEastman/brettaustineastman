import Image from 'next/image';
import Link from 'next/link';
import Headshot from '../public/docs/images/BrettHeadshot 2.jpg';

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full h-24 shadow-xl bg-white font-mono">
        <div className="flex justify-between items-center h-full w-full px-4 2xl: px-16">
          <Link href={'/'}>
            <Image
              src={Headshot}
              alt={'Brett Eastman headshot'}
              width="90"
              height="90"
              className='cursor-pointer'
            />
          </Link>
          <div>
            <ul className='hidden sm:flex'>
              <Link href={'/about'}>
                <li className='ml-10 uppercase hover:border-b text-xl'>About</li>
              </Link>
              <Link href={'/selected_works'}>
                <li className='ml-10 uppercase hover:border-b text-xl'>Selected Works</li>
              </Link>
              <Link href={'/production'}>
                <li className='ml-10 uppercase hover:border-b text-xl'>Production</li>
              </Link>
              <Link href={'/sound_design'}>
                <li className='ml-10 uppercase hover:border-b text-xl'>Sound Design</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
