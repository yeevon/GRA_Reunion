import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/atlanta-sky-line.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>GRA, Ikeja</h1>
            <h2>Reunion</h2>
            <h3>Location:&nbsp;
              <a href="https://goo.gl/maps/xaUodxUGJa5HVNo99" target="_blank">
                Atlanta, GA&nbsp;
                <i class="fa fa-map-marker" />
              </a>
            </h3>
            <h3>Date: Summer 2020</h3>
            <h4>Additional Details to Follow </h4>
            <br />
            <div className="buttons">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="delimajm@gmail.com" />
            <input type="hidden" name="item_name" value="testbutton for website" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>   
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
