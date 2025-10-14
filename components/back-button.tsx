'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className='underline hover:no-underline mb-6 font-medium text-base py-2 -ml-1 touch-manipulation inline-block'
    >
      ← Back to Portfolio
    </button>
  )
}
