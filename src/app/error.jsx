'use client'

import { VscErrorCompact } from "react-icons/vsc"

export default function Error() {
  return (
    <div className="flex justify-center text-center h-screen "><h1 className="font-bold text-2xl sm:text-3xl flex items-center gap-2 text-red-600 "><VscErrorCompact></VscErrorCompact> Something was wrong</h1></div>
  )
}