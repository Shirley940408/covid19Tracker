import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, active, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${
        active && props.casesType && `infoBox--${props.casesType}`
      }`}
    >
      {/* "--"for a modified className  */}
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* +120k Number of cases */}
        <h2
          className={`infoBox__increasedCases ${
            props.casesType && `infoBox__cases--${props.casesType}`
          }`}
        >
          {cases}
        </h2>
        {/* 1.2M Total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
