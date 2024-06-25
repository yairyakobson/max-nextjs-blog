import Image from "next/image";

export default function Hero(){
  return(
    <section className="text-center bg-gradient-to-b from bg-zinc-700 to bg-zinc-800 p-8">
      <div>
        <Image src="/images/max.png"
        className="size-[300px] overflow-hidden rounded-full
        m-auto bg-zinc-700
        shadow-[0_1px_8px_rgba(255,255,255,1)]
        object-cover
        object-top"
        alt="Coding Central"
        width={300}
        height={300}/>
      </div>
      <h1 className="m-4 text-[4rem] text-zinc-400 font-bold">Hi, I'm Max</h1>
      <p className="text-[1.5rem] text-zinc-400 w-11/12 max-w-[40rem] m-auto">I blog about web developmet - especially frontend frameworks like Angular or React</p>
    </section>
  );
}