import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/seo";
import "./index.css";
import * as css from "./index.module.css";
import { Links } from "../components/Links";
import { NftList } from "../components/NftList";

const IndexPage: React.FC = () => (
  <div>
    <Seo title="moonbow.ink" description="NFTs/tattoos/engineering" />
    <StaticImage
      src="../images/header.png"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Header background"
      imgStyle={{
        width: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
    <div className={css.page}>
      <h1>moonbow.ink</h1>
      <h4>NFTs/tattoos/engineering</h4>
      <div style={{ height: 100 }}></div>
      <Links />
      <div style={{ height: 100 }}></div>
      <NftList />
      <div style={{ height: 100 }}></div>
    </div>
  </div>
);

export default IndexPage;
