import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
const ProviderTV = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/watch/providers/movie?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  if (!data) return null;
  const providers = data?.results || [];
  return (
    <>
      <div className="Movie-list">
        {/* <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>

    </Swiper> */}
        {providers &&
          providers.length > 0 &&
          providers.slice(0, 25).map((item) => (
            <div key={item.id}>
              <img
                src="https://media.istockphoto.com/photos/television-streaming-multimedia-wall-concept-picture-id1287677376?b=1&k=20&m=1287677376&s=170667a&w=0&h=wvu0lKn4WbfHtKId83KzrHvGmBP7zn7ZwGEWmU99HWE="
                alt=""
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProviderTV;
