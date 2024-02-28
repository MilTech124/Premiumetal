import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-black ">
        <div className="container flex flex-wrap  mx-auto text-white justify-center">
          <div className="md:pr-10">
            <img src="/PREMIUM.jpg" className="w-60" alt="logo" />
            <h4 className="font-bold pl-2 py-2 text-center text-red">
              Pracovný čas
            </h4>
            <ul className="flex pl-2 text-center flex-col  ">
              <li>Pon - Pi: 8:00 - 16:00</li>
              <li>So: 9:00 - 13:00</li>
            </ul>
          </div>
          <div className="flex gap-2  text-xl flex-col  pt-4 mr-auto">
            <div className="flex items-center gap-5 ">
              <img src="/images/red_mail.webp" className="w-16" alt="icon" />
              <Link
                className="hover:scale-105 transition-all"
                href="mailto:garaze@premiumetal.sk"
              >
                garaze@premiumetal.sk
              </Link>
            </div>
            <div className="flex items-center gap-5 ">
              <img src="/images/red_phone.webp" className="w-16" alt="icon" />
              <Link
                className="hover:scale-105 transition-all"
                href="tel:+421 948 764 913"
              >
                +421 948 764 913
              </Link>
            </div>

            {/* <div className="flex items-center gap-5 ">
              <img src="/images/red_adress.webp" className="w-16" alt="icon" />
              <div>
                <p className="font-semibold">Rupniów</p>
                <p>34-652 Nowe Rybie</p>
              </div>
            </div>
            <Link href="/polityka" className="flex items-center gap-5 hover:scale-105 ">
              <img src="/info.svg" className="w-16" alt="icon" />
              <div>
               Polityka prywatności
              </div>
            </Link> */}
          </div>
          <div>
            <div className="bg-white p-5 text-black">
              <h3 className="text-red text-xl">Napište nám</h3>
              <form
                className="max-w-lg pr-2"
                action="https://formspree.io/f/mayrjdgq"
                method="POST"
              >
                <textarea
                  name="message"
                  id=""
                  cols="10"
                  rows="1"
                  required
                  placeholder="Správa"
                  className="w-full bg-white p-2 my-2 border-4 border-red-900"
                ></textarea>
                <input
                  type="text"
                  id="name"
                  required
                  name="name"
                  placeholder="Meno a priezvisko"
                  className="w-full bg-white p-2  my-2 border-4 border-red-900"
                />
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="w-[45%] bg-white mr-5  p-2 my-2 border-4 border-red-900"
                />
                <input
                  type="tel"
                  id="phone"
                  required
                  name="phone"
                  placeholder="Tel. číslo"
                  className="w-1/2 bg-white p-2 my-2 border-4 border-red-900"
                />
                <br></br>
                <button
                  type="submit"
                  className="border-4 border-red-900 p-2 hover:bg-red-900"
                >
                  Odoslať
                </button>
              </form>
            </div>
            <div className="text-center py-2">
              <h4>PREMIUMetal</h4>
              <p>Mirosław Węgrzynowicz</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-red bg-primary text-3xl font-bold p-2">
        Rýchla dodacia lehota do 14 dní od objednania !!!
      </div>
      <div>
        <div className="bg-red">
          <div className="container mx-auto flex max-sm:text-xs max-sm:flex-wrap justify-evenly py-2 text-center text-white">
            <p>© 2021 Premiumetal. Všetky práva vyhraden.</p>
            <a href="https://www.mil-tech.pl">
              <p>Realizácia Mil-TECH</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
