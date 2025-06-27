'use client';

import * as React from 'react';
import {
  Frame,
  PieChart,
  Map,
  Calendar,
  BarChart3,
  Users,
  Edit3,
  Instagram,
  Facebook,
  Twitter,
  Plus,
  TrendingUp,
  CalendarDays,
  Clock,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

import { NavUser } from '@/components/nav-user';

// 각 섹션별 하위 메뉴 데이터
const sectionMenus = {
  posts: {
    title: '게시물 작성',
    icon: Edit3,
    items: [
      {
        title: '모든 플랫폼',
        url: '/dashboard/posts',
        icon: Edit3,
      },
      {
        title: 'Instagram',
        url: '/dashboard/posts/instagram',
        icon: Instagram,
      },
      {
        title: 'Facebook',
        url: '/dashboard/posts/facebook',
        icon: Facebook,
      },
      {
        title: 'X (Twitter)',
        url: '/dashboard/posts/x',
        icon: Twitter,
      },
    ],
  },
  accounts: {
    title: '계정연결',
    icon: Users,
    items: [
      {
        title: '연결된 계정',
        url: '/dashboard/accounts',
        icon: Users,
      },
      {
        title: '새 계정 연결',
        url: '/dashboard/accounts/connect',
        icon: Plus,
      },
    ],
  },
  analytics: {
    title: '분석 통계',
    icon: BarChart3,
    items: [
      {
        title: '전체 분석',
        url: '/dashboard/analytics',
        icon: BarChart3,
      },
      {
        title: '성과 분석',
        url: '/dashboard/analytics/performance',
        icon: TrendingUp,
      },
    ],
  },
  calendar: {
    title: '캘린더',
    icon: Calendar,
    items: [
      {
        title: '월별 보기',
        url: '/dashboard/calendar',
        icon: Calendar,
      },
      {
        title: '주별 보기',
        url: '/dashboard/calendar/weekly',
        icon: CalendarDays,
      },
      {
        title: '예약된 게시물',
        url: '/dashboard/calendar/scheduled',
        icon: Clock,
      },
    ],
  },
};

const projects = [
  {
    name: 'Design Engineering',
    url: '/dashboard/projects/design',
    icon: Frame,
  },
  {
    name: 'Sales & Marketing',
    url: '/dashboard/projects/marketing',
    icon: PieChart,
  },
  {
    name: 'Travel',
    url: '/dashboard/projects/travel',
    icon: Map,
  },
];

const userData = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '/avatars/shadcn.jpg',
};

export function AppSidebar() {
  const pathname = usePathname();

  // 현재 활성화된 섹션 결정
  const getCurrentSection = () => {
    if (pathname.startsWith('/dashboard/posts')) return 'posts';
    if (pathname.startsWith('/dashboard/accounts')) return 'accounts';
    if (pathname.startsWith('/dashboard/analytics')) return 'analytics';
    if (pathname.startsWith('/dashboard/calendar')) return 'calendar';
    return 'posts'; // 기본값
  };

  const currentSection = getCurrentSection();
  const currentMenu = sectionMenus[currentSection as keyof typeof sectionMenus];

  return (
    <div className="w-64 min-h-[calc(100vh-4rem)] border-r border-gray-200/60 bg-white/95 backdrop-blur-sm flex flex-col">
      {/* 헤더 */}
      <div className="border-b border-gray-100/80 bg-gray-50/30 p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-sm">
            <currentMenu.icon className="size-4 text-white" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              {currentMenu.title}
            </h2>
            <p className="text-xs text-gray-500">하위 메뉴</p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="bg-white/50 p-2 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {currentMenu.items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <div key={item.url}>
                <a
                  href={item.url}
                  className={`w-full flex items-center justify-start gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-100 text-blue-800 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="size-4" />
                  <span className="text-sm font-medium">{item.title}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* 프로젝트 섹션 */}
        <div className="mt-6 px-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            프로젝트
          </h3>
          <div className="space-y-1">
            {projects.map((project) => (
              <div key={project.url}>
                <a
                  href={project.url}
                  className="w-full flex items-center justify-start gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  <project.icon className="size-4" />
                  <span className="text-sm font-medium">{project.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="border-t border-gray-100/80 bg-gray-50/30">
        <NavUser user={userData} />
      </div>
    </div>
  );
}
