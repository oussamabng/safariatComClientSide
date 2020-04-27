import React, { useState, useEffect } from "react";
import { Image, Button, Rating, Icon, Container } from "semantic-ui-react";
import axios from "axios";

import "./TourCard.css";
import Img from "../../assets/recommended.png";

const TourCard = (props) => {
  const { best } = props;
  const [rate, setRate] = useState("");
  const [difficulty, setDiffuclty] = useState("");
  const [type, setType] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [from, setFrom] = useState(0);

  useEffect(() => {
    let url = best
      ? "http://localhost:3000/best_price_deal"
      : "http://localhost:3000/top_rated_offer";
    axios.get(url).then((res) => {
      setRate(res.data[0].rate);
      setDiffuclty(res.data[0].difficulty);
      setType(res.data[0].type);
      setTitle(res.data[0].title);
      setDescription(res.data[0].description);
      setTime(res.data[0].time);
      setFrom(res.data[0].from);
    });
  }, [best]);
  return (
    <div className="flex _margin_vertical tour_card_mobile">
      <Container>
        <div className="_tour_card">
          {props.title && <p className="title black-txt">{props.text}</p>}
          <div
            className="row"
            style={{ borderTop: `solid 3px ${props.color}`, padding: "1rem 0" }}
          >
            <div className="col">
              <Image src={Img} alt="img" />
              <div className="under_col">
                <div
                  className="flex titre"
                  style={{ justifyContent: "flex-start" }}
                >
                  <p className="small">{time}</p>
                  <div className="flex icon_tour mobile">
                    <Icon
                      name="share alternate"
                      className="pointer"
                      size="large"
                      style={{ margin: "0 10px" }}
                    />{" "}
                    <Icon
                      name="share alternate"
                      className="pointer"
                      size="large"
                      style={{ margin: "0 10px" }}
                    />
                  </div>
                </div>
                <p className="title black-txt" style={{ margin: "5px 0" }}>
                  {title}
                </p>
                <div className="flex" style={{ justifyContent: "flex-start" }}>
                  {type.map((elm) => (
                    <span className="extra-small">{elm}</span>
                  ))}
                </div>
                <p className="medium-text description default-color">
                  {description}
                </p>
                <div className="_tour_card_star">
                  <div className="flex">
                    <p className="medium-text default-color">Rate</p>
                    <Rating
                      icon="star"
                      rating={rate}
                      maxRating={5}
                      disabled
                      value="2"
                      size="large"
                    />
                  </div>
                  <div className="flex _diff">
                    <p className="medium-text default-color">Difficulty</p>
                    <Rating
                      icon="star"
                      rating={difficulty}
                      maxRating={5}
                      disabled
                      size="large"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="under_col center">
              <p className="black-txt large-title">From : {from} $</p>
              <div className="flex _margin_vertical_xs">
                <Button className="_primary_button _offers_card_button">
                  Explore
                </Button>
              </div>
              <div className="flex icon_tour ">
                <Icon
                  name="share alternate"
                  className="pointer"
                  size="large"
                  style={{ margin: "0 10px" }}
                />{" "}
                <Icon
                  name="share alternate"
                  className="pointer"
                  size="large"
                  style={{ margin: "0 10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default TourCard;
