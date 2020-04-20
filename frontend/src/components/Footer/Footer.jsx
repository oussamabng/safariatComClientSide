import React from "react";
import "./Footer.css";
import { Container, GridRow, GridColumn, Grid, Image } from "semantic-ui-react";
import FooterIcon from "../../assets/footer.png";

const Footer = () => {
  return (
    <footer className="_footer">
      <Container>
        <Grid columns={1} textAlign="center">
          <GridRow>
            <GridColumn className="_footer_padding">
              <a
                href="/temp"
                className="_button title default-color _footer_button border-radius-bg bold shadow"
              >
                join us{" "}
              </a>
            </GridColumn>
            <GridColumn className="_footer_padding_sm">
              <p className="large-title default-color">
                WE MAKE IT REALLY CLOSE
              </p>{" "}
            </GridColumn>
            <GridColumn>
              <p className="small default-color">
                travel agencies and travellers (guides and influencers) are not
                to be separated, which means that, one completes the other,
                travel agencies need travellers and tourism influencers, also
                travellers and tourism activists can’t stand alone without
                travel agencies and operators.
              </p>
            </GridColumn>
          </GridRow>
        </Grid>
        <Grid columns={3} className="_footer_navs_list">
          <GridRow className="_footer_padding">
            <GridColumn>
              <div className="flex flex-col _footer_navs">
                <p className="medium-text default-color bold m-0">contact us</p>
                <a href="/temp" className="small default-color">
                  +213 (0) 777 59 53 56
                </a>
                <a href="/temp" className="small default-color">
                  +213 (0) 777 59 53 56
                </a>
                <a href="/temp" className="small default-color">
                  contact@Safariatcom.com
                </a>
                <a href="/temp" className="small default-color">
                  adress: neighberhood ,algeirs , algeria{" "}
                </a>
              </div>
            </GridColumn>
            <GridColumn>
              <div className="flex flex-col _footer_navs">
                <p className="medium-text default-color bold m-0">support</p>
                <a href="/temp" className="small default-color">
                  help & support
                </a>
                <a href="/temp" className="small default-color">
                  Trust & safety
                </a>
                <a href="/temp" className="small default-color">
                  Support@Safariatcom.com
                </a>
              </div>
            </GridColumn>
            <GridColumn>
              <div className="flex flex-col _footer_navs">
                <a href="/temp" className="medium-text default-color bold m-0">
                  more
                </a>
                <a href="/temp" className="small default-color">
                  Language
                </a>
                <a href="/temp" className="small default-color">
                  Privacy
                </a>
                <a href="/temp" className="small default-color">
                  terms & conditions
                </a>
              </div>
            </GridColumn>
          </GridRow>
        </Grid>
        <Grid columns="equal" className="_footer_navs_list mobile">
          <GridRow>
            {" "}
            <GridColumn>
              <div className="flex flex-col _footer_navs">
                <p className="medium-text default-color bold m-0 whitespace-no-wrap">
                  contact us
                </p>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  +213 (0) 777 59 53 56
                </a>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  +213 (0) 777 59 53 56
                </a>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  contact@Safariatcom.com
                </a>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  adress: neighberhood ,algeirs , algeria{" "}
                </a>
              </div>
            </GridColumn>
          </GridRow>
          <GridRow>
            {" "}
            <GridColumn>
              <div className="flex flex-col _footer_navs">
                <p className="medium-text default-color bold m-0 whitespace-no-wrap">
                  support
                </p>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  help & support
                </a>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  Trust & safety
                </a>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  Support@Safariatcom.com
                </a>
              </div>
            </GridColumn>
          </GridRow>
          <GridRow>
            {" "}
            <GridColumn>
              <div className="flex flex-col _footer_navs">
                <a
                  href="/temp"
                  className="medium-text default-color bold m-0 whitespace-no-wrap"
                >
                  more
                </a>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  Language
                </a>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  Privacy
                </a>
                <a
                  href="/temp"
                  className="small default-color whitespace-no-wrap"
                >
                  terms & conditions
                </a>
              </div>
            </GridColumn>
          </GridRow>
        </Grid>
        <Grid columns={1} textAlign="center">
          <GridRow className="_footer_padding">
            <GridColumn>
              <p className="extra-small default-color ">
                Copyright © 2020 SafariatCom platform. All rights reserved.
              </p>
            </GridColumn>
          </GridRow>
        </Grid>
        <div className="flex footer-icon">
          <Image src={FooterIcon} alt="img" />
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
