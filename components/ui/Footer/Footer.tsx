import GitHub from '@/components/icons/GitHub';
import Logo from '@/components/icons/Logo';
import PopIn from '@/components/motions/popin';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedin, FaRedditAlien } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6  border-t border-t-zinc-800">
      <div className="grid grid-cols-1 gap-8 py-12 text-zinc-400 transition-colors duration-150  lg:grid-cols-12  ">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              <Image src="/bot.png" alt="Logo" width={40} height={40} />
            </span>
            <span>
              Learn AI{' '}
              <PopIn delay={0.1}>
                <span className="text-xs">
                  <sup>
                    <h1 className="relative top-0.5 text-transparent text-xs bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 via-[#02FCF1]  subpixel-antialiased">
                      Beta
                    </h1>
                  </sup>
                </span>
              </PopIn>
            </span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-zinc-400 transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-zinc-400 transition duration-150 ease-in-out hover:text-zinc-200"
              >
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-zinc-400 transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Careers
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-zinc-400 transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold text-zinc-400 transition duration-150 ease-in-out hover:text-zinc-200">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-zinc-400 transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-zinc-400 transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 text-zinc-400 lg:col-span-6 lg:justify-end">
          <div className="flex items-center h-10 space-x-6">
            <a aria-label="" href="">
              Lab AI
            </a>
          </div>
        </div>
      </div>
      <div className="flex  text-zinc-400 items-end justify-between pb-8  md:flex-row border-t border-t-zinc-800 ">
        {/* made with love */}

        <div className="text-zinc-200">
          <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
            Made with ❤️ in Mbarara, Ug
          </p>
          <span className="text-zinc-400">
            &copy; {new Date().getFullYear()} ACME, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center h-10 space-x-6">
            <a>
              <FaRedditAlien size={20} />
            </a>
            <a>
              <FaLinkedin size={20} />
            </a>
            <a>
              <FaFacebookF size={20} />
            </a>
            <a aria-label="Github Repository" href="https://github.com/kuyesu">
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
