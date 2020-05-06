import React from "react";
import { Grid, Rating } from "semantic-ui-react";

const ProfileMenuAboutAgency = () => {
  return (
    <div className="_profile_inf_about">
      <Grid columns={2} stackable>
        <Grid.Column>
          <div className="col">
            <h3 className="medium-text black-txt">General info</h3>
            <div className="row">
              <p className="small default-color">Full name</p>
              <p className="small default-color">Atlas voyage</p>
            </div>
            <div className="row">
              <p className="small default-color">Location</p>
              <p className="small default-color">Oran, ALgeria</p>
            </div>
            <div className="row">
              <p className="small default-color">CEO</p>
              <p className="small default-color">Kylob kith</p>
            </div>
            <div className="row">
              <p className="small default-color">Rate</p>
              <p className="small default-color">
                <Rating defaultRating={3} maxRating={5} disabled />
              </p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="col">
            <h3 className="medium-text black-txt">Contact info</h3>
            <div className="row">
              <p className="small default-color">Local number</p>
              <p className="small default-color">+213(0) 35 45 86 41</p>
            </div>
            <div className="row">
              <p className="small default-color">Phone number</p>
              <p className="small default-color">+213(0) 65 45 86 41</p>
            </div>
            <div className="row">
              <p className="small default-color">Email</p>
              <p className="small default-color">Atlasvoyage@gmail.com</p>
            </div>
            <div className="row">
              <p className="small default-color">Website</p>
              <p className="small default-color">Fb.com/Andrea.pib</p>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProfileMenuAboutAgency;
