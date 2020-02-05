import React from "react";

const AnnouncementMessage = (props) => {
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
          fontSize: "12px"
        }}
      >
        SITE-WIDE ANNOUNCEMENT MESSAGE -- SALE / DISCOUNT <strong>OFFER</strong> -- NEW
        PRODUCT HIGHLIGHT
      </div>
    </article>
  );
};

export default AnnouncementMessage;
