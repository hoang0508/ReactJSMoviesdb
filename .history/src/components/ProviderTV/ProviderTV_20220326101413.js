import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const ProviderTV = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/watch/providers/movie?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  if (!data) return null;
  const providers = data?.results || [];
  return (
    <>
      <div className="movie-list movie-list--provider">
        <Swiper
          modules={Autoplay}
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
          autoplay={true}
        >
          {providers &&
            providers.length > 0 &&
            providers.slice(0, 25).map((item) => (
              <SwiperSlide key={item.provider_id}>
                <div className="provider-img">
                  <img src={tmdbAPI.imagesOriginal(item.logo_path)} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProviderTV;
