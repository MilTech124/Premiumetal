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
      <p className="py-10 ">
        Specjalizujemy się w tworzeniu wysokiej jakości garaży drewnopodobnych i
        akrylowych, które łączą w sobie zarówno estetykę, jak i funkcjonalność.
        Nasze realizacje są idealnym rozwiązaniem dla tych, którzy cenią sobie
        wytrzymałość, styl oraz indywidualne podejście do każdego projektu.
        Oferujemy również profesjonalne usługi w zakresie budowy wiat
        śmietnikowych, które są nie tylko praktyczne, ale i estetycznie
        dopasowane do otoczenia
      </p>

      <div className="flex gap-5 flex-wrap justify-between max-sm:justify-center">
        {data[0].acf.glowna.map((item) => {
          return <ItemRealization key={item.id} src={item.full_image_url} />;
        })}
      </div>
    </div>
  );
}

export default HomeRealization;
