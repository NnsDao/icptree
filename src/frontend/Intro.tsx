import React, { useEffect, useState } from "react"
import { counter } from "canisters/counter"
import logo from "./assets/logo-dark.svg"
import tailwindlogo from "./assets/tailwindcss.svg"

export function Intro() {
  const [count, setCount] = useState<string>()

  const refreshCounter = async () => {
    const res = await counter.getValue()
    setCount(res.toString())
  }

  useEffect(() => {
    refreshCounter()
  }, [])

  const onIncrementClick = async () => {
    await counter.increment()
    refreshCounter()
  }

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="text-center text-2xl mt-5">Ready. Lets build the new web3.0 dApp , Vite + React + Motoko + Tailwind2</p>
       
        <button className="demo-button" onClick={onIncrementClick}>
          Count is: {count}
        </button>

        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src={tailwindlogo} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-blue-500 ">tailwindcss</div>
            <p className="text-gray-500">You have a ready!</p>
          </div>
        </div>


      </header>
    </>
  )
}