import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function cn(...inputs: ClassValue[]) {
  return (
    twMerge(clsx(inputs))
  )
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
