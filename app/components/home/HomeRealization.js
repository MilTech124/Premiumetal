import Link from "next/link";

async function HomeRealization() {


  return (
    <div className="container pt-10 mx-auto px-2">
      <h2 className="md:text-6xl text-4xl text-center text-red ">Kivitelezzük</h2>
      <p className="py-5 md:text-xl ">
      Szakterületünk a magas minőségű, esztétikus kivitelezésű akril és fahatású garázsok gyártása. Megvalósításaink mindazok számára jelentenek tökéletes megoldást, akik a tartósságot, a stílust, valamint projektek egyedi megközelítését értékelik. Stílusos szeméttároló fészereket is kínálunk, amelyek nem csak praktikusak, hanem esztétikusan illeszkednek a környezethez      </p>
      <div className="flex flex-col pb-5 gap-2">
        <div className="flex justify-around max-md:flex-wrap gap-5">
          <div className="flex  relative flex-col max-w-lg">
            <img
              src="/images/garaz_premium.webp"
              className="w-full h-full object-cover "
              alt="garaz"
            />
            {/* //centered title and button */}
            <div className="flex absolute inset-0 m-auto flex-col items-center justify-center">
              <h3 className="text-4xl pb-2 ">Prémium garázsok</h3>
              <Link href="/galeria">
                <button className="btn bg-red">Bővebben</button>
              </Link>
            </div>            
          </div>
          <div className="flex relative flex-col max-w-lg ">
            <img
              src="/images/segmentowa.jpeg"
              className="w-full h-full object-cover "
              alt="smietnik"
            />
            {/* //centered title and button */}
            <div className="flex absolute inset-0 m-auto flex-col items-center justify-center">
              <h3 className="text-4xl pb-2 text-center ">Garázsok szekcionált garázskapuval</h3>
              <Link href="/garaze-z-brama">
                <button className="btn bg-red">Bővebben</button>
              </Link>
            </div>
          </div>
          <div className="flex relative flex-col max-w-lg ">
            <img
              src="/images/smietniki-hero.webp"
              className="w-full h-full object-cover "
              alt="smietnik"
            />
            {/* //centered title and button */}
            <div className="flex absolute inset-0 m-auto flex-col items-center justify-center">
              <h3 className="text-4xl pb-2 ">Szeméttároló fészer</h3>
              <Link href="/smietniki">
                <button className="btn bg-red">Bővebben</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRealization;
