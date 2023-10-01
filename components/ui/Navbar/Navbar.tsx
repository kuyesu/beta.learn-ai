import s from './Navbar.module.css';
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Badge from '@/components/Badge';
import Logo from '@/components/icons/Logo';
import PopIn from '@/components/motions/popin';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/" className={clsx(s.logo, "outline-pink-600 border-pink-600 border rounded-full ")} aria-label="Logo">
              <Image src="/bot.png" alt="Logo" width={40} height={40} />
            </Link>
            <Link href="/" className={s.link}>
              Learn AI{' '}
              <PopIn delay={0.1}>
                <span className="text-xs">
                  <sup>
                    <h1 className="relative top-0.5 text-transparent text-xs bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 via-[#02FCF1]  subpixel-antialiased">
                      Aplha
                    </h1>
                  </sup>
                </span>
              </PopIn>
            </Link>
          </div>
          <div className="flex justify-end flex-1 space-x-8">
            <nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/prompt-template" className={s.link}>
                Templates
              </Link>
              <Link href="/pricing" className={s.link}>
                Pricing
              </Link>
              {user && (
                <Link href="/account" className={s.link}>
                  Account
                </Link>
              )}
            </nav>
            {user ? (
              <SignOutButton />
            ) : (
              <Link href="/signin" >
                <div
                  className={clsx(
                    'rounded-full bg-gradient-to-tl from-pink-600 to-[#A02BFE] via-[#02FCF1] p-[1px] subpixel-antialiased',
                    s.link
                  )}
                >
                  <p className="animate-border-pulse py group relative flex w-max cursor-pointer items-center gap-2 rounded-full bg-black px-4 py-2 text-xs text-white">
                    <span>Sign in</span>
                    <FaChevronRight
                      size={10}
                      className="font-thin text-gray-400 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
