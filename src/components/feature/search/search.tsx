'use client'

import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export function Search() {
  const t = useTranslations()
  const router = useRouter()

  const formSchema = z.object({
    keyword: z.string().min(2, {
      message: t('search_keyword_error_title'),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(`/search/keyword/${values.keyword}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="keyword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder={t('search_placeholder_title')}
                    {...field}
                  />
                  <Button type="submit" variant="outline" size="icon">
                    <SearchIcon className="h-4 w-4" />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  )
}
