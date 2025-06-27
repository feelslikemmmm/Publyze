import type React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">회원가입</CardTitle>
          <CardDescription>
            계정을 생성하여 소셜미디어 관리를 시작하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">비밀번호 확인</Label>
                <Input id="confirm-password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  <a href="#" className="underline underline-offset-4">
                    이용약관
                  </a>
                  및
                  <a href="#" className="underline underline-offset-4">
                    개인정보 처리방침에
                  </a>
                  동의합니다
                </Label>
              </div>
              <Button type="submit" className="w-full">
                회원가입
              </Button>
              <Button variant="outline" className="w-full">
                Google로 회원가입
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              계정이 있으신가요?{' '}
              <a href="/login" className="underline underline-offset-4">
                로그인
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
