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
      <Hero title={"Přístřešky na popelnice"} />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
          <div className="col-span-2">
            <h2 className="text-4xl pb-2 font-semibold">Wiata Śmietnikowa</h2>
            <p className="text-lg">
               to praktyczna konstrukcja do przechowywania
              pojemników na odpady, chroniąca je przed czynnikami zewnętrznymi i
              utrzymująca porządek. Wykonana z materiałów odpornych na
              warunki atmosferyczne, może mieć drzwi lub bramę, ograniczając
              dostęp zwierząt i rozprzestrzenianie się zapachów. Są ważne w
              miastach, gdzie pomagają utrzymać czystość i estetykę. Ich
              projektowanie wymaga uwzględnienia wielu czynników, w tym
              przepisów dotyczących gospodarowania odpadami.
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
