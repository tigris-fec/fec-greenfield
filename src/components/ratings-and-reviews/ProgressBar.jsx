import React, { Component } from "react";

class RatingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: [0, 0, 0, 0, 0],
      average: 0.0
    };
  }
  componentDidMount() {
    this.setState({
      rating: this.props.rating,
      average: this.props.average,
      count: this.props.count
    });
  }
  render() {
    const classes = this.props.classes;
    const rating = this.state.rating;
    const average = this.state.average;
    const count = this.state.count;
    return (
      <div className={classes.root}>
        <div className={classes.card}>
          <div className={classes.bigBox}>
            <div className={classes.outerAverageBox}>
              <div className={classes.averageBox}>
                <Typography className={classes.average}>{ratingAverage}</Typography>
                {getStars(classes, Math.round(ratingAverage))}
                <Typography className={classes.raterCount}>{raterCount} total</Typography>
                {/* <PersonIcon className={classes.greyPerson}/> */}
              </div>
            </div>
            <div className={classes.chart}>
              <RatingChart ratings={ratings} colors={colors} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
