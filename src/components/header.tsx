import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-10">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Publyze</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="#features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              기능
            </Link>
            <Link
              href="#use-cases"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              활용사례
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              요금제
            </Link>
            <Link
              href="#testimonials"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              후기
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link
              href="/"
              className="mr-6 flex items-center space-x-2 md:hidden"
            >
              <span className="font-bold">Publyze</span>
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm" className="cursor-pointer">
                로그인
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="cursor-pointer">
                무료 시작하기
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
