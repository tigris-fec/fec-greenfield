import React from "react";

const Announcement = (props) => {
  return (
    <article className="message">
      <div
        className="message-header"
        style={{
          backgroundColor: "white",
          color: "black",
          justifyContent: "center",
          textTransform: "uppercase",
          fontWeight: "normal",
          fontSize: "13px",
          fontStyle: "italic"
        }}
      >
        SITE-WIDE ANNOUNCEMENT MESSAGE -- SALE / DISCOUNT OFFER -- NEW PRODUCT HIGHLIGHT
      </div>
    </article>
  );
};

export default Announcement;
