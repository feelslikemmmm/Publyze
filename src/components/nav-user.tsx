'use client';

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu className="px-2">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-blue-50/80 data-[state=open]:bg-blue-50/60 data-[state=open]:text-blue-700"
            >
              <Avatar className="h-8 w-8 rounded-lg border-2 border-white shadow-sm">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-gray-800">
                  {user.name}
                </span>
                <span className="truncate text-xs text-gray-500">
                  {user.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 text-gray-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg border border-gray-200/60 bg-white/95 backdrop-blur-sm shadow-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-3 py-3 text-left text-sm border-b border-gray-100/80">
                <Avatar className="h-10 w-10 rounded-lg border-2 border-white shadow-sm">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-gray-800">
                    {user.name}
                  </span>
                  <span className="truncate text-xs text-gray-500">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup className="py-1">
              <DropdownMenuItem className="px-3 py-2 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 hover:text-amber-700 transition-colors cursor-pointer">
                <Sparkles className="size-4 text-amber-500" />
                <span className="font-medium">Upgrade to Pro</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-gray-200/60" />
            <DropdownMenuGroup className="py-1">
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50/80 transition-colors cursor-pointer">
                <BadgeCheck className="size-4 text-gray-500" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50/80 transition-colors cursor-pointer">
                <CreditCard className="size-4 text-gray-500" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50/80 transition-colors cursor-pointer">
                <Bell className="size-4 text-gray-500" />
                <span>Notifications</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-gray-200/60" />
            <DropdownMenuItem className="px-3 py-2 hover:bg-red-50/80 hover:text-red-700 transition-colors cursor-pointer">
              <LogOut className="size-4 text-red-500" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
