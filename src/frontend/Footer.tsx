import React, { useEffect, useState } from "react"

export function Footer() {

  return (
    <>
      <footer className="w-full bg-bgColor flex justify-center h-20 text-white absolute bottom-0">
        <div className="container max-w-3xl flex justify-between h-20 items-center">
          <div className="p-4">© NnsDAO Labs.</div>
          <nav>
            <ul className="flex justify-start">
              <li className="p-4 underline"><a href="https://github.com/NnsDao/icptree">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}