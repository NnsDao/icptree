import React, { useEffect, useState } from "react"
import {
    Link
  } from "react-router-dom";
import { counter } from "canisters/counter"
import { Auth } from "../component/Auth"
import logo from "../assets/logo-dark.svg"
import tailwindlogo from "../assets/tailwindcss.svg"

export function About() {
  const [count, setCount] = useState<string>()

//   const refreshCounter = async () => {
//     const res = await counter.getValue()
//     setCount(res.toString())
//   }

//   useEffect(() => {
//     refreshCounter()
//   }, [])

//   const onIncrementClick = async () => {
//     await counter.increment()
//     refreshCounter()
//   }

  return (
    <>
      <Auth />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="text-center text-2xl mt-5">Ready. Lets build the new web3.0 dApp , Vite + React + Motoko + Tailwind2</p>
       
        <button className="demo-button">
            React Router About
        </button>

        <button className="mt-5 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <Link to="/">Click Go Home</Link>
        </button>



      </header>
    </>
  )
}