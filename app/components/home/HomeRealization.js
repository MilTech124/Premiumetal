import Link from "next/link";

async function HomeRealization() {


  return (
    <div className="container pt-10 mx-auto px-2">
      <h2 className="md:text-6xl  text-4xl text-center text-red ">Vykonávame</h2>
      <p className="py-5 md:text-xl ">
      Špecializujeme sa na výrobu kvalitných drevených a acrylových garáží, ktoré v sebe spájajú estetiku aj funkčnosť. Naše realizácie sú ideálne pre tých, ktorí oceňujú trvanlivosť, štýl a individuálny prístup ku každému projektu. Ponúkame aj profesionálne prístrešky na odpadky, ktoré sú nielen praktické, ale aj estetické pre svoje okolie
      </p>
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
              <h3 className="text-4xl pb-2 ">Prémiová garáž</h3>
              <Link href="/galeria">
                <button className="btn bg-red">Viac</button>
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
              <h3 className="text-4xl pb-2 ">Prístrešky na odpadky</h3>
              <Link href="/smietniki">
                <button className="btn bg-red">Viac</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRealization;
