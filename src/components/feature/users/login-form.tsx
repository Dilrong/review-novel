'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icons'
import supabase from '@/lib/utils/supabase'

function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (data) console.log(data)
    if (error) console.log(error)
  }

  const handleKakaoLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
    })

    if (data) console.log(data)
    if (error) console.log(error)
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
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
        )}{' '}
        구글로 로그인
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
        카카오톡으로 로그인
      </Button>
      {/*<div className="relative">*/}
      {/*  <div className="absolute inset-0 flex items-center">*/}
      {/*    <span className="w-full border-t" />*/}
      {/*  </div>*/}
      {/*  <div className="relative flex justify-center text-xs uppercase">*/}
      {/*    <span className="bg-background px-2 text-muted-foreground">*/}
      {/*      Or continue with*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default LoginForm
