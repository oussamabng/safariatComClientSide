import React, { useState } from "react";
import { Container, Input, Button, Dropdown } from "semantic-ui-react";

import { ReactComponent as Seetings } from "../../assets/icons/settings.svg";

//?import css
import "./SortTours.css";

const SortTours = () => {
  const [isLoading] = useState(false);
  const [isDropdow, setIsDrodown] = useState(false);

  const handleDropDownMobile = () => {
    setIsDrodown((prevState) => !prevState);
  };

  return (
    <div className=" set_tours ">
      <Container>
        <div className="_header" style={{ padding: "2rem 3rem" }}>
          <Input
            className="sort_inputs"
            size="large"
            icon="search"
            placeholder="Search..."
          />
          <Input
            className="sort_inputs"
            size="large"
            icon="location arrow"
            placeholder="Search..."
          />
          <Input
            size="large"
            icon="calendar alternate outline"
            placeholder="Search..."
            className="sort_inputs"
            type="date"
          />
          <Button
            loading={isLoading}
            className="_primary_button _offers_card_button _set_tours_btn"
          >
            Search
          </Button>
        </div>
        <div className="flex sort_swap">
          <div className="_header">
            <div className="_margin_horizontal_sm ">
              <Dropdown text="Activity">
                <Dropdown.Menu>
                  <Dropdown.Item text="New" />
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="_margin_horizontal_sm ">
              <Dropdown text="Difficulty">
                <Dropdown.Menu>
                  <Dropdown.Item text="New" />
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="_margin_horizontal_sm ">
              <Dropdown text="Price range">
                <Dropdown.Menu>
                  <Dropdown.Item text="New" />
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="sort_tours mobile">
          <div className="flex _margin_vertical_sm">
            <Input
              className="sort_inputs _margin_horizontal_sm"
              size="large"
              icon="search"
              placeholder="Destination..."
            />
            <Seetings className="pointer" onClick={handleDropDownMobile} />
          </div>
          <div
            className={
              isDropdow ? "sort_tours_drpdown " : "sort_tours_drpdown mobile"
            }
          >
            <Input
              className="sort_inputs"
              size="large"
              icon="location arrow"
              placeholder="Search..."
            />
            <Input
              size="large"
              icon="calendar alternate outline"
              placeholder="Search..."
              className="sort_inputs"
              type="date"
            />
          </div>
          <div
            className={
              isDropdow ? "flex sort_swap mobile show" : "flex sort_swap mobile"
            }
          >
            <div className="_header">
              <div className="_margin_horizontal_sm ">
                <Dropdown text="Activity">
                  <Dropdown.Menu>
                    <Dropdown.Item text="New" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="_margin_horizontal_sm ">
                <Dropdown text="Difficulty">
                  <Dropdown.Menu>
                    <Dropdown.Item text="New" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="_margin_horizontal_sm ">
                <Dropdown text="Price">
                  <Dropdown.Menu>
                    <Dropdown.Item text="New" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <Button
            loading={isLoading}
            className="_primary_button _offers_card_button _set_tours_btn"
          >
            Search
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default SortTours;
