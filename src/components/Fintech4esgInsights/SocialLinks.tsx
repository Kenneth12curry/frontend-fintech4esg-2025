import { faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-2 me-9">
        <a href="#" aria-label="X" className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
             <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="#" aria-label="LinkedIn"  className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#" aria-label="YouTube"  className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
             <FontAwesomeIcon icon={faYoutube} />
        </a>
    </div>
  );
}