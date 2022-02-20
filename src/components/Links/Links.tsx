import React from "react";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";
import OpenseaIcon from "../../assets/opensea.svg";
import FoundationIcon from "../../assets/foundation.svg";
import * as css from "./Links.module.css";

const Link: React.FC<{ href: string; icon: JSX.Element; title: string }> = ({
  href,
  icon,
  title,
}) => {
  return (
    <a
      className={css.link}
      target="_blank"
      rel="noopenner noreferrer"
      href={href}
    >
      {icon}
      <div className={css.linkTitle}>{title}</div>
    </a>
  );
};

export const Links = () => {
  return (
    <div className={css.container}>
      <Link
        href="https://www.instagram.com/moonbow.ink/"
        title="instagram"
        icon={<InstagramIcon />}
      />
      <Link
        href="https://twitter.com/mary__fisher"
        title="twitter"
        icon={<TwitterIcon />}
      />
      <Link
        href="https://opensea.io/moonbow_ink"
        title="opensea"
        icon={<OpenseaIcon />}
      />
      <Link
        href="https://foundation.app/@moonbow.ink"
        title="foundation"
        icon={<FoundationIcon />}
      />
    </div>
  );
};
