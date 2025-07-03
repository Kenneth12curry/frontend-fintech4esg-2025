import { faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function SocialLinks() {
  return (
    <div className="flex gap-3 md:gap-4 mt-2 me-5">
        <a
            href="#"
            aria-label="X"
            className="bg-black text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center"
        >
            <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
            href="#"
            aria-label="LinkedIn"
            className="bg-black text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center"
        >
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
            href="#"
            aria-label="YouTube"
            className="bg-black text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center"
        >
            <FontAwesomeIcon icon={faYoutube} />
        </a>
    </div>

  );
}