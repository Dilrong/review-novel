'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Icons } from '@/components/ui/icons'
import sendSlackMessage from '@/lib/utils/slack'
import { useToast } from '@/components/ui/use-toast'

function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { toast } = useToast()

  const formSchema = z.object({
    content: z.string().min(20, {
      message: '20자 이상의 문의 내용을 써주세요',
    }),
    email: z.string().optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)

    toast({
      title: '담당자에게 내용을 전달했어요',
    })
    sendSlackMessage(
      'C06BZ5R7M6X',
      '노벨덕 알리미',
      '🐥',
      `
        🗣️ 노벨덕에 문의가 들어왔어요! \n\n• 이메일: *${values.email}*
        \n• 내용: ${values.content}`,
    )

    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid w-full gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="연락 받을 이메일을 입력해주세요."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Textarea
                    placeholder="문의 내용을 작성해주세요"
                    rows={4}
                    {...field}
                  />

                  <Button type="submit" disabled={isLoading}>
                    {isLoading && (
                      <Icons.spinner className="mr-4 h-4 w-4 animate-spin" />
                    )}
                    연락하기
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default ContactForm
