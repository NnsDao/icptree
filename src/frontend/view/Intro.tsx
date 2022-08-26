import React from "react"
import Card from "../component/Card"
import { Footer } from "../component/Footer"
// import { counter } from "canisters/counter"
import logo from "../assets/nnsdao-logo-1024.png"

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
    { id: "https://nnsdao.org/", name: "NnsDAO Website" },
    { id: "https://twitter.com/NnsDaos", name: "Twitter" },
    {
      id: "https://h637e-ziaaa-aaaaj-aaeaa-cai.raw.ic0.app/",
      name: "Nomos Platform",
    },
    { id: "https://sznps-4aaaa-aaaah-qab2a-cai.ic0.app/", name: "Icpscan" },
    { id: "https://icmarket.app/", name: "ICmarket" },
    { id: "https://lm5fh-ayaaa-aaaah-aafua-cai.ic0.app/", name: "ICTexas" },
    { id: "https://t.me/NnsDaos", name: "Telegram" },
    { id: "https://discord.gg/UTZvcDkeDr", name: "Discord" },
    {
      id: "https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_Boundaryless_Autonomous_Organization.pdf",
      name: "White Paper",
    },
    {
      id: "https://syunduel.medium.com/nnsdao-whitepaper-japanese-translation-922c47e3840b",
      name: "White Paper Japanese",
    },
    {
      id: "https://github.com/demianDAO/internetcomputer.guide/blob/main/static/whitepaper/NnsDAO_Boundaryless_Autonomous_Organization_kkdemian.pdf",
      name: "White Paper Chinese",
    },
    {
      id: "https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_DAOs_To_Earn.pdf",
      name: "Contribution to earn",
    },
  ]

  return (
    <>
      <div className="relative  pb-20 font-mono text-cyan-900">
        <div className="w-full bg-white rounded-lg p-5 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src={logo}
              alt="photo"
            />
            <p className="text-center mt-2">@NnsDAO</p>
          </div>
          <div className="text-center">
            <p className="text-base text-gray-400 font-normal">
              A link to your Web 3.0 application.
            </p>
          </div>
        </div>

        <div className="flex justify-center py-5">
          <div className="container max-w-3xl p-4">
            {linkList.map((link) => (
              <Card name={link.name} url={link.id} key={link.id} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
