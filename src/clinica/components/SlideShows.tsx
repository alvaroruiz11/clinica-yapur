
export const SlideShows = () => {
  return (
    <div className="swiper">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <img src="/assets/slide-1.jpeg" alt="1" style={{ width: "100%" }}/>
            </div>
            {/* <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div> */}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
    </div>
  )
}
