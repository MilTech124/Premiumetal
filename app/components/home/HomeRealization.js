import Link from "next/link";
import ItemRealization from "./ItemRealization";
import axios from "axios";
const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const Data = async () => {
  try {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    const data = await axios.get(
      process.env.NEXT_PUBLIC_HOST + "?slug=glowna",
      { httpsAgent: agent }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

async function HomeRealization() {
  const data = await Data();

  return (
    <div className="container py-10 mx-auto px-2">
      <h2 className="text-5xl">Realizujemy</h2>
      <p className="pt-10 ">
        Specjalizujemy się w tworzeniu wysokiej jakości <strong>garaży drewnopodobnych i
        akrylowych</strong>, które łączą w sobie zarówno estetykę, jak i funkcjonalność.
        Nasze realizacje są idealnym rozwiązaniem dla tych, którzy cenią sobie
        wytrzymałość, styl oraz indywidualne podejście do każdego projektu.
        Oferujemy również profesjonalne usługi<strong> wiat
        śmietnikowych</strong>, które są nie tylko praktyczne, ale i estetycznie
        dopasowane do otoczenia
      </p>
      <div className="flex flex-col pb-5 gap-2">
      {/* //arrow */}

      <Link className="underline hover:text-red-500 hover:font-bold" href="/galeria">Przejdz do Garaży</Link>
      <Link className="underline hover:text-red-500 hover:font-bold" href="/smietniki">Przejdz do Wiat Śmietnikowych</Link>
      </div>
    

      <div className="flex gap-5 flex-wrap justify-between max-sm:justify-center">
        {data[0].acf.glowna.map((item) => {
          return <ItemRealization key={item.id} src={item.full_image_url} />;
        })}
      </div>
    </div>
  );
}

export default HomeRealization;
