import React from 'react'
import Chapter from '@/lib/types/Chapter'
import { Button } from '@/components/ui/button'
import { BookText, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

interface Props {
  chapter: Chapter
}

function ViewerSidebar({ chapter }: Props) {
  return (
    <section className="fixed bottom-0 z-50 w-full bg-secondary">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-2 py-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger>📚</SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <p className="text-sm text-muted-foreground">{chapter.title}</p>
        </div>
        <div>
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ViewerSidebar
