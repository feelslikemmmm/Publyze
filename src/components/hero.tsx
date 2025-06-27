import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="container relative mx-auto">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <Badge variant="outline" className="text-sm">
          스마트한 소셜미디어 통합 관리
        </Badge>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          소셜미디어 관리를
          <br className="hidden sm:inline" />더 쉽고 효율적으로
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Instagram, Facebook, X, LinkedIn까지 한 번에 관리하고,
          <br className="hidden sm:inline" />
          AI 분석으로 성과를 극대화하세요.
        </p>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Link href="/signup">
            <Button size="lg" className="cursor-pointer">
              무료로 시작하기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
