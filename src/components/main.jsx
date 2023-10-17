import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

function Main() {
  // API Key
  const API_KEY = "d5c1e9fed270f6eb6f6c744e1a12e3ce";

  // UseStates
  const [search, setSearch] = useState("");
  const [Wth, setWth] = useState();

  // OnClick Fun
  const hand = async (a) => {
    a.preventDefault();

    const link = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
    const res = await fetch(link);
    const data = await res.json();
    console.log(data);
    setWth(data);
  };

  return (
    <>
      <div className="bg-blue-900 h-[100vh] flex items-center ">
        <div className="mx-auto w-80 ">
          <div className="bg-blue-600 h-[500px] rounded-lg py-8">
            <div className=" flex justify-center items-center">
              <input
                type="text"
                className="rounded-[20px] px-2 h-7 text-gray-500 outline-none"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                className="bg-white h-7 w-7 rounded-full relative ml-1 outline-none"
                onClick={hand}
              >
                <BiSearchAlt color="gray" size="20" className="mx-auto" />
              </button>
            </div>
            <div className="text-white ">
              {Wth && (
                <>
                  <div className="flex items-center py-3 flex-col space-y-2">
                    <div className="text-xl">
                      <h1>
                        {Wth.sys.country} {Wth.name}
                      </h1>
                    </div>
                    <h1>{Wth.weather.description}</h1>
                    <img src="img/w.png" className="w-24 h-24" alt="" />
                    <div>Temperature : {Wth.main.temp}</div>
                    <div className="flex">
                      <h1>Wind direction : {Wth.wind.deg}</h1>
                      
                    </div>
                    <div className="mx-1">
                      {" "}
                      Degs Speed : {Wth.wind.speed} km/h
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
