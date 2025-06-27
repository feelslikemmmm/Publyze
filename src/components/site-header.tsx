'use client';

import { Button } from '@/components/ui/button';
import { IconInnerShadowTop } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const mainMenuItems = [
  {
    title: '게시물 작성',
    href: '/dashboard/posts',
    key: 'posts',
  },
  {
    title: '계정연결',
    href: '/dashboard/accounts',
    key: 'accounts',
  },
  {
    title: '분석 통계',
    href: '/dashboard/analytics',
    key: 'analytics',
  },
  {
    title: '캘린더',
    href: '/dashboard/calendar',
    key: 'calendar',
  },
];

export function SiteHeader() {
  const pathname = usePathname();

  const getActiveKey = () => {
    if (pathname.startsWith('/dashboard/posts')) return 'posts';
    if (pathname.startsWith('/dashboard/accounts')) return 'accounts';
    if (pathname.startsWith('/dashboard/analytics')) return 'analytics';
    if (pathname.startsWith('/dashboard/calendar')) return 'calendar';
    return '';
  };

  const activeKey = getActiveKey();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="flex h-16 items-center px-6">
        {/* 로고 */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="p-1.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-sm">
              <IconInnerShadowTop className="size-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Publyze
            </span>
          </Link>
        </div>

        {/* 메인 네비게이션 */}
        <nav className="flex items-center gap-1 ml-8">
          {mainMenuItems.map((item) => (
            <Link key={item.key} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  'h-10 px-4 py-2 text-sm font-medium transition-colors',
                  'hover:bg-blue-50 hover:text-blue-700',
                  activeKey === item.key
                    ? 'bg-blue-100 text-blue-800 shadow-sm'
                    : 'text-gray-600'
                )}
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </nav>

        {/* 우측 액션 버튼들 */}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            설정
          </Button>
          <Button size="sm">새 게시물</Button>
        </div>
      </div>
    </header>
  );
}
