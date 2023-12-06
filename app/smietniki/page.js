import Hero from "../components/galeria/Hero";
import axios from "axios";
const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const getData = async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  const res = await axios.get(
    process.env.NEXT_PUBLIC_HOST + "?slug=smietniki",
    { httpsAgent: agent }
  );
  return res.data;
};

async function page() {
  const data = await getData();
  return (
    <div>
      <Hero title={"Wiaty Śmietnikowe"} />
      <div className="container mx-auto md:-mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
          <div className="col-span-2">
            <h2 className="text-4xl font-semibold">Wiata Śmietnikowa</h2>
            <p className="text-lg">
              Wiata śmietnikowa to praktyczna konstrukcja do przechowywania
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
            <div key={item.id} className="w-1/3">
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
