import React from "react";
import Twitter from "../../images/icons/twitter.svg";
import Twitch from "../../images/icons/twitch.svg";
import Instagram from "../../images/icons/instagram.svg";

const iconMap = {
  twitter: Twitter,
  twitch: Twitch,
  instagram: Instagram,
};

export default function Icon({ name }: { name: string }) {
  return (
    <>
      <img src={iconMap[name]} alt={name} />
    </>
  );
}
