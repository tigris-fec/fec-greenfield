import React, { Component } from "react";

class ProductStyles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: -1
    };
    this.handleSelectedStyle = this.handleSelectedStyle.bind(this);
  }
  componentDidMount() {
    console.log("ProductStyles", this.props);
  }
  handleSelectedStyle(selectedId) {
    this.setState({ selectedId });
  }
  render() {
    return (
      <>
        <p>
          <strong>STYLE</strong> >
          {this.props.defaultStyle ? this.props.defaultStyle : "N/A"}
        </p>

        <ul
          className="level"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "left",
            paddingTop: "2%"
          }}
        >
          {this.props.productStyles.map((style) => {
            return (
              <li
                style={{ margin: "1%", flex: "0 0 20%", listStyle: "none" }}
                key={style.style_id}
              >
                <figure className="image is-96x96">
                  {this.state.selectedId === style.style_id ? (
                    <div>
                      <i
                        className="far fa-check-circle fa-lg"
                        style={{
                          float: "right",
                          position: "absolute",
                          right: "0%",
                          top: "0%",
                          zIndex: "1",
                          backgroundColor: "#525252",
                          color: "white",
                          borderRadius: "50%"
                        }}
                      ></i>
                    </div>
                  ) : null}
                  <img
                    src={style.photos[style["default?"]].thumbnail_url}
                    alt={style.name}
                    style={{
                      borderRadius: "50%",
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      zIndex: "1000",
                      opacity: "85%"
                    }}
                    onClick={() => {
                      console.log("Clicked");
                      this.handleSelectedStyle(style.style_id);
                    }}
                  />
                </figure>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ProductStyles;
