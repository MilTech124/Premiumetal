import Hero from "../components/galeria/Hero";
import axios from "axios";

// const https = require("https");

// const agent = new https.Agent({
//   rejectUnauthorized: false,
// });

    // ,{ httpsAgent: agent } do axiosa

const getData = async () => {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_HOST + "?slug=smietniki"
  );
  return res.data;
};

async function page() {
  const data = await getData();
  return (
    <div>
      <Hero title={"Přístřešek na popelnice"} />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
          <div className="col-span-2">
            <h2 className="text-4xl pb-2 font-semibold">Přístřešek na popelnice</h2>
            <p className="text-lg">
            je praktická konstrukce pro uložení odpadkových košů, jejich ochranu před povětrnostními vlivy a udržování
čistoty. Je vyrobena z materiálů odolných proti povětrnostním vlivům, může mít dvířka nebo branku, což omezuje
přístup zvířat a šíření zápachu. Jsou důležité na místech, kde pomáhají udržovat čistotu a estetický vzhled. Jejich
konstrukce vyžaduje zohlednění mnoha faktorů, včetně předpisů o nakládání s odpady. 

            </p>
          </div>
          <div className="col-span-2">
            <img
              src="/images/smietniki-hero.webp"
              className="rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {data[0].acf.photo_gallery.smietnik[0].map((item) => {
          return (
            <div key={item.id} className="md:w-1/3 w-full">
              <img
                src={item.full_image_url}
                className="w-full h-[400px]"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
