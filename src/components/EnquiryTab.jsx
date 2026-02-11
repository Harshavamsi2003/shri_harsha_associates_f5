
import React from "react";

/*
  EnquiryTab Component
  --------------------
  Shows on ALL devices - Desktop, Tablet, Mobile
  Side tab for opening enquiry form
*/

export default function EnquiryTab({ onOpen }) {
  return (
    <div className="enquiry-tab" onClick={onOpen}>
      ENQUIRY
    </div>
  );
}