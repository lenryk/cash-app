import React from "react";
import Twitter from "../../../static/icons/twitter.svg";
import Twitch from "../../../static/icons/twitch.svg";
import Instagram from "../../../static/icons/instagram.svg";
import Apple from "../../../static/icons/apple.svg";
import Playstore from "../../../static/icons/playstore.svg";

const iconMap = {
  twitter: Twitter,
  twitch: Twitch,
  instagram: Instagram,
  apple: Apple,
  playstore: Playstore,
};

export default function Icon({ name }: { name: string }) {
  return (
    <>
      <img src={iconMap[name]} alt={name} />
    </>
  );
}
