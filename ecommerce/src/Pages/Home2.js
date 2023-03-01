import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Slideshow from "../Components/Slideshow";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Slideshow />
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://www.musicavenue.com.cy/wp-content/uploads/2020/11/shop_photos_-11.jpg')",
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <Link to="/Faq">
                  <Button variant="contained">FAQ</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
