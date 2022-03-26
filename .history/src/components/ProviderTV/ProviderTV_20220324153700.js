import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
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
              <img src={tmdbAPI.imagesOriginal(item.logo_path)} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProviderTV;
