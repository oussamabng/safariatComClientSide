import React, { useState } from "react";
import { Container, Input, Button, Dropdown } from "semantic-ui-react";

//?import css
import "./SortTours.css";

const SortTours = () => {
  const [isLoading] = useState(false);

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
      </Container>
    </div>
  );
};
export default SortTours;
