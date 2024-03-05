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
      <Hero title={"Szemetes tárolók"} />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
          <div className="col-span-2">
            <h2 className="text-4xl pb-2 font-semibold">Szemetes tárolók</h2>
            <p className="text-lg">
              A szemetes tároló egy olyan praktikus konstrukció, amely a
              hulladékos kukák rendezett eltakarására szolgál, védve azokat a
              környezeti hatásoktól. A tároló tartós és az időjárási
              viszonyoknak ellenálló anyagokból készült. Zárható ajtóval vagy
              ráccsal lehet felszerelni, hogy a szemetestől távol tartsa a
              kisállatokat, a kellemetlen szagokat pedig nem engedi terjedni. A
              tárolók alkalmazhatósága fontos lehet a városokban is, ahol
              segíthenek fenntartani a rendezett tisztaságot a lakókörnyezetben.
              A tároló tervezésénél számos szempontot kell figyelembe venni,
              többek között a hulladéktárolásra vonatkozó helyi előírásokat.
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
