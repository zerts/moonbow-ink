import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/seo";
import "./index.css";
import * as css from "./index.module.css";

const IndexPage: React.FC = () => (
  <div>
    <Seo title="moonbow.ink" description="NFTs/tattoos/engineering" />
    <StaticImage
      src="../images/header.png"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Header background"
      style={{
        width: "100%",
        height: "25vh",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
    <div className={css.page}>
      <h1>moonbow.ink</h1>
      <h4>NFTs/tattoos/engineering</h4>
      will be soon...
    </div>
  </div>
);

export default IndexPage;
