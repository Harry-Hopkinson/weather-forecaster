import React from "react";
import cities from "../../lib/city.list.json";
import { getWeather } from "./weather";

export async function getServerSideProps(context) {
  const city = getCity(context.params.city);

  if (!city) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const slug = context.params.city;

  return {
    props: {
      slug: slug,
      data: data,
    },
  };
}

const getCity = (param) => {
  const cityParam = param.trim();
  // get the id of the city by splitting the API
  const splitCity = cityParam.split("-");
  const id = splitCity[splitCity.length - 1];

  if (!id) {
    return null;
  }
  // @ts-ignore
  const city = cities.find((city) => city.id.toString() == id);

  if (city) {
    return city;
  } else {
    return null;
  }
};

export default function City({ slug }) {
  slug = slug.split("-")[0];
  const weather: any = getWeather(slug);
  console.log(weather);
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
