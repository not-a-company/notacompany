'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className='underline hover:no-underline mb-6 font-medium'
    >
      ← Back to Portfolio
    </button>
  )
}
