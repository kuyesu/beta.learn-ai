import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';
import Image from 'next/image';
import PopIn from '@/components/motions/popin';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 border-t border-t-zinc-800">
      <div className="flex flex-col text-zinc-400 items-center justify-between py-8 space-y-4 md:flex-row ">
        {/* made with love */}

        <div className='text-zinc-200'>
          <p>Made with ❤️ in Mbarara, Ug</p>
          <span className='text-zinc-400'>
            &copy; {new Date().getFullYear()} ACME, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center h-10 space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/kuyesu"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
