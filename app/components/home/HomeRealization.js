import Link from "next/link";

async function HomeRealization() {
  return (
    <div className="container pt-10 mx-auto px-2">
      <h2 className="md:text-6xl  text-4xl text-center text-red ">
        Realizujeme
      </h2>
      <p className="py-5 md:text-xl ">
        Specializujeme se na vytváření vysoce kvalitních dřevěných a
        akrylátových garáží, které kombinují jak estetiku, tak funkčnost. Naše
        projekty jsou ideálním řešením pro ty, kteří oceňují odolnost, styl a
        individuální přístup ke každému projektu. Nabízíme také profesionální
        služby přístřešků na popelnice, které jsou nejen praktické, ale i
        esteticky přizpůsobené okolí
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
              <h3 className="text-4xl pb-2 ">Garáže prémiové třídy</h3>
              <Link href="/galeria">
                <button className="btn bg-red">Více</button>
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
              <h3 className="text-4xl pb-2 ">Přístřešky na popelnice</h3>
              <Link href="/smietniki">
                <button className="btn bg-red">Více</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRealization;
