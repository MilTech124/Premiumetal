import Hero from "../components/galeria/Hero";
import axios from "axios";

// const https = require("https");

// const agent = new https.Agent({
//   rejectUnauthorized: false,
// });

// ,{ httpsAgent: agent } do axiosa

const getData = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_HOST + "?slug=smietniki");
  return res.data;
};

async function page() {
  const data = await getData();
  return (
    <div>
      <Hero title={"Prístrešok na odpadky"} />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
          <div className="col-span-2">
            <h2 className="text-4xl pb-2 font-semibold">
              Prístrešok na odpadky
            </h2>
            <p className="text-lg">
              je praktická konštrukcia na uskladnenie odpadkových košov, ich
              ochranu pred poveternostnými vplyvmi a udržiavanie čistoty. Je
              vyrobený z materiálov odolných voči poveternostným vplyvom, môže
              mať dvere alebo bránu, aby sa obmedzil prístup zvierat a šírenie
              zápachu. Sú dôležité na miestach, kde pomáhajú udržiavať čistotu a
              estetický vzhľad. Ich konštrukcia si vyžaduje zohľadnenie mnohých
              faktorov vrátane predpisov o nakladaní s odpadmi.
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
