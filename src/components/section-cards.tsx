import {
  IconTrendingUp,
  IconUsers,
  IconChartBar,
  IconCalendar,
  IconEdit,
} from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function SectionCards() {
  return (
    <div className="space-y-8">
      {/* 대시보드 헤더 */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          대시보드
        </h1>
        <p className="text-lg text-gray-600">
          소셜미디어 관리 현황을 한눈에 확인하세요
        </p>
      </div>

      {/* 메트릭 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        <Card className="p-6 lg:p-8 bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <CardHeader className="p-0 space-y-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                총 게시물
              </CardDescription>
              <div className="p-2 bg-blue-50 rounded-lg">
                <IconEdit className="size-5 text-blue-600" />
              </div>
            </div>
            <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900">
              1,247
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                <IconTrendingUp className="size-3" />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="p-0 pt-4 flex-col items-start gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium text-gray-700">
              이번 달 증가 추세{' '}
              <IconTrendingUp className="size-4 text-green-500" />
            </div>
            <div className="text-gray-500">지난 6개월 대비 상승</div>
          </CardFooter>
        </Card>

        <Card className="p-6 lg:p-8 bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <CardHeader className="p-0 space-y-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                연결된 계정
              </CardDescription>
              <div className="p-2 bg-purple-50 rounded-lg">
                <IconUsers className="size-5 text-purple-600" />
              </div>
            </div>
            <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900">
              8
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200"
              >
                <IconTrendingUp className="size-3" />
                +2
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="p-0 pt-4 flex-col items-start gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium text-gray-700">
              새로운 계정 연결됨{' '}
              <IconTrendingUp className="size-4 text-blue-500" />
            </div>
            <div className="text-gray-500">Instagram, Facebook, X 활성화</div>
          </CardFooter>
        </Card>

        <Card className="p-6 lg:p-8 bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <CardHeader className="p-0 space-y-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                총 조회수
              </CardDescription>
              <div className="p-2 bg-orange-50 rounded-lg">
                <IconChartBar className="size-5 text-orange-600" />
              </div>
            </div>
            <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900">
              45.6K
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                <IconTrendingUp className="size-3" />
                +18.2%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="p-0 pt-4 flex-col items-start gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium text-gray-700">
              높은 참여율 유지{' '}
              <IconTrendingUp className="size-4 text-green-500" />
            </div>
            <div className="text-gray-500">목표치 초과 달성</div>
          </CardFooter>
        </Card>

        <Card className="p-6 lg:p-8 bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <CardHeader className="p-0 space-y-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                예약된 게시물
              </CardDescription>
              <div className="p-2 bg-indigo-50 rounded-lg">
                <IconCalendar className="size-5 text-indigo-600" />
              </div>
            </div>
            <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900">
              23
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200"
              >
                <IconTrendingUp className="size-3" />
                +5
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="p-0 pt-4 flex-col items-start gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium text-gray-700">
              체계적인 콘텐츠 관리{' '}
              <IconTrendingUp className="size-4 text-indigo-500" />
            </div>
            <div className="text-gray-500">다음 주 일정 준비 완료</div>
          </CardFooter>
        </Card>
      </div>

      {/* 최근 활동 섹션 */}
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          최근 활동
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <Card className="p-6 lg:p-8 bg-white border border-gray-200/60 shadow-sm cursor-pointer">
            <CardHeader className="p-0 space-y-4">
              <CardTitle className="text-lg font-semibold text-gray-900">
                최근 게시물 성과
              </CardTitle>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-sm text-gray-600">
                    Instagram 게시물
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    +1.2K 좋아요
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-sm text-gray-600">Facebook 게시물</span>
                  <span className="text-sm font-medium text-blue-600">
                    +856 반응
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-sm text-gray-600">X 게시물</span>
                  <span className="text-sm font-medium text-gray-600">
                    +234 리트윗
                  </span>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-6 lg:p-8 bg-white border border-gray-200/60 shadow-sm cursor-pointer">
            <CardHeader className="p-0 space-y-4">
              <CardTitle className="text-lg font-semibold text-gray-900">
                예정된 일정
              </CardTitle>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                  <span className="text-sm text-gray-700">
                    마케팅 캠페인 게시물
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    오늘 오후 3시
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                  <span className="text-sm text-gray-700">제품 소개 영상</span>
                  <span className="text-sm font-medium text-purple-600">
                    내일 오전 10시
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
                  <span className="text-sm text-gray-700">주간 업데이트</span>
                  <span className="text-sm font-medium text-orange-600">
                    금요일 오후 5시
                  </span>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
