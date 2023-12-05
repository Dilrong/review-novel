'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icons'
import supabase from '@/lib/utils/supabase'
import { useToast } from '@/components/ui/use-toast'
import { useTranslations } from 'next-intl'

function LoginForm() {
  const t = useTranslations()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    setIsLoading(true)

    if (data) {
      toast({
        title: t('login_success_toast_title'),
        description: t('login_success_toast_desc'),
      })

      setIsLoading(false)
    }

    if (error) {
      toast({
        title: t('login_fail_toast_title'),
        description: t('login_fail_toast_desc'),
      })

      setIsLoading(false)
    }
  }

  const handleKakaoLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
    })

    setIsLoading(true)

    if (data) {
      toast({
        title: t('login_success_toast_title'),
        description: t('login_success_toast_desc'),
      })

      setIsLoading(false)
    }

    if (error) {
      toast({
        title: t('login_fail_toast_title'),
        description: t('login_fail_toast_desc'),
      })

      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Novel<span className="ml-1 font-bold text-yellow-300">DucK</span>
        </h2>
        <p className="text-sm text-muted-foreground">{t('login_title')}</p>
      </div>
      <div className={cn('mt-4 grid gap-4')}>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={handleGoogleLogin}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}
          {t('login_google_button')}
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={handleKakaoLogin}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <div />
          )}{' '}
          {t('login_kakao_button')}
        </Button>
      </div>
    </>
  )
}

export default LoginForm
