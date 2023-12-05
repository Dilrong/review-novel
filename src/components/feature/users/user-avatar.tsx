'use client'

import React from 'react'

import supabase from '@/lib/utils/supabase'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUserStore } from '@/lib/store/zustand'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut } from 'lucide-react'
import { useTranslations } from 'next-intl'
import mixpanel from 'mixpanel-browser'

function UserAvatar() {
  const t = useTranslations()
  const { name, profile, deleteUser } = useUserStore()

  const logout = async () => {
    await supabase.auth.signOut()
    deleteUser()
    mixpanel.track('로그아웃')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        onClick={() => {
          mixpanel.track('아바타 클릭')
        }}
      >
        <Avatar onClick={logout}>
          <AvatarImage src={profile} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t('user_logout_button')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAvatar
