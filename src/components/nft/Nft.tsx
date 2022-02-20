import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as css from "./Nft.module.css";

export interface NftProps {
  name: string;
  img: string;
  link: string;
  description: string;
}

export const Nft: React.FC<NftProps> = ({ name, img, link, description }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopenner noreferrer"
      className={css.card}
    >
      <div className={css.imgContainer}>
        <img src={img} alt={name} className={css.img} />
      </div>
      <div style={{ height: 16 }} />
      <div className={css.title}>{name}</div>
    </a>
  );
};
