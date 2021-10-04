import React, { useEffect, useState } from "react"
import { Footer } from "./Footer"
import Card  from "./Card"
// import { counter } from "canisters/counter"
import logo from "./assets/nnsdao-logo-1024.png"

export function Intro() {
  // const [count, setCount] = useState<string>()

  // const refreshCounter = async () => {
  //   const res = await counter.read()
    // setCount(res.toString())
  //   console.log(res.toString())
  // }

  // useEffect(() => {
  //   refreshCounter()
  // }, [])

  // const onIncrementClick = async () => {
  //   await counter.read()
  //   refreshCounter()
  // }

  const linkList = [
    { id: 'https://nnsdao.org/', name: "NnsDAO Website" },
    { id: 'https://sznps-4aaaa-aaaah-qab2a-cai.ic0.app/', name: "Icpscan" },
    { id: 'https://lm5fh-ayaaa-aaaah-aafua-cai.ic0.app/', name: "ICTexas" },
    { id: 'https://dscvr.ic0.app/user/nnsdao', name: "Dscvr" },
    { id: 'https://nnsdao.substack.com/', name: "Substack" },
    { id: 'https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/nnsdaos', name: "Distrikt" },
    { id: 'https://t.me/NnsDaos', name: "Telegram" },
    { id: 'https://twitter.com/NnsDaos', name: "Twitter" },
    { id: 'https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_Boundaryless_Autonomous_Organization.pdf', name: "White Paper" },
  ];

  return (
    <>
      <div className="relative  pb-20 font-mono text-cyan-900">

        <div className="w-full bg-white rounded-lg p-5 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src={logo} alt="photo" />
                <p className="text-center mt-2" >@NnsDAO</p>
            </div>
            <div className="text-center">
                <p className="text-base text-gray-400 font-normal" >A link to your Web 3.0 application.</p>
            </div>
        </div>

        <div className="flex justify-center py-5">
          <div className="container max-w-3xl p-4">
              {linkList.map((link) => (
                <Card name={link.name} url={link.id}  key={link.id} />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}