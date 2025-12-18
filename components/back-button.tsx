'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <p>
      <button onClick={() => router.back()}>← Back to Portfolio</button>
    </p>
  )
}
