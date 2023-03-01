import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-mdb-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/1323859203/photo/music-shop-interior-and-large-collection-of-classic-acoustics-guitars-for-sale.jpg?b=1&s=170667a&w=0&k=20&c=T07ILI43_t_ALyuVvQ42VvGaBI0gyu_k8PbRgkV6yQg="
            class="d-block w-100"
            alt="Wild Landscape"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.parkgrandkensington.co.uk/blog/wp-content/uploads/2017/09/Guitar-shop.jpg"
            className="d-block w-100"
            alt="Camera"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
