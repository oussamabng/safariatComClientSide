import React from "react";
import { Grid } from "semantic-ui-react";

const ProfileMenuAbout = () => {
  return (
    <div className="_profile_inf_about">
      <Grid columns={2} stackable>
        <Grid.Column>
          <div className="col">
            <h3 className="medium-text black-txt">Personal info</h3>
            <div className="row">
              <p className="small default-color">Full name</p>
              <p className="small default-color">Andrea piccabio</p>
            </div>
            <div className="row">
              <p className="small default-color">Birthday</p>
              <p className="small default-color">27 jan 1992</p>
            </div>
            <div className="row">
              <p className="small default-color">Gender</p>
              <p className="small default-color">Male</p>
            </div>
            <div className="row">
              <p className="small default-color">From</p>
              <p className="small default-color">Madrid, Spain</p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="col">
            <h3 className="medium-text black-txt">Other</h3>
            <div className="row">
              <p className="small default-color">Job</p>
              <p className="small default-color">Product designer</p>
            </div>
            <div className="row">
              <p className="small default-color">Phone number</p>
              <p className="small default-color">/</p>
            </div>
            <div className="row">
              <p className="small default-color">Email</p>
              <p className="small default-color">Andrea152@gmail.com</p>
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

export default ProfileMenuAbout;
