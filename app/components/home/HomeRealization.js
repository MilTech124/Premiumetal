import Link from "next/link";

async function HomeRealization() {


  return (
    <div className="container py-10 mx-auto px-2">
      <h2 className="text-6xl text-center text-red ">Realizujemy</h2>
      <p className="py-5 md:text-xl ">
        Specjalizujemy się w tworzeniu wysokiej jakości{" "}
        <strong>garaży drewnopodobnych i akrylowych</strong>, które łączą w
        sobie zarówno estetykę, jak i funkcjonalność. Nasze realizacje są
        idealnym rozwiązaniem dla tych, którzy cenią sobie wytrzymałość, styl
        oraz indywidualne podejście do każdego projektu. Oferujemy również
        profesjonalne usługi<strong> wiat śmietnikowych</strong>, które są nie
        tylko praktyczne, ale i estetycznie dopasowane do otoczenia
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
              <h3 className="text-4xl pb-2 ">Garaże Premium</h3>
              <Link href="/galeria">
                <button className="btn bg-red">Więcej</button>
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
              <h3 className="text-4xl pb-2 ">Wiaty Śmietnikowe</h3>
              <Link href="/smietniki">
                <button className="btn bg-red">Więcej</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRealization;
