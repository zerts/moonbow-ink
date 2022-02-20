import { graphql } from "gatsby";
import React from "react";
import { NftProps, Nft } from "../nft/nft";
import * as css from "./NftList.module.css";

const nfts: NftProps[] = [
  {
    name: "No signal",
    link: "https://foundation.app/@moonbow.ink/mnbw/1",
    description:
      "While the amount of information is growing day by day, it’s becoming increasingly difficult to listen to yourself and trust your inner feelings.",
    img: "https://f8n-production-collection-assets.imgix.net/0x839863f141EbEd31e8e8E305D79d04302790eE32/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
  },
  {
    name: "Differences",
    link: "https://foundation.app/@moonbow.ink/foundation/132646",
    description: "Each person is one of a kind.",
    img: "https://f8n-production-collection-assets.imgix.net/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405/132646/QmUXXEvc1TjiMomqt6TTbweotey5TcmGHoJEZmu9k1ghtz/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
  },
  {
    name: "Individuality",
    link: "https://foundation.app/@moonbow.ink/foundation/131611",
    description:
      "A reminder that it is important to maintain individuality within yourself.",
    img: "https://f8n-production-collection-assets.imgix.net/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405/131611/QmeKhfFn2GafgELo34UomHpy4G1W5BZR2VxPLCcq7Zuitr/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
  },
  {
    name: "Mediocrity",
    link: "https://foundation.app/@moonbow.ink/foundation/131615",
    description:
      "A reminder that something may seem mediocre on the surface, but it's actually can be unique inside.",
    img: "https://f8n-production-collection-assets.imgix.net/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405/131615/QmNcJZdkNruMkwR7Xe3cFwg23mHy5o7UptZAsiukgGs9jB/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
  },
  {
    name: "Panic",
    link: "https://foundation.app/@moonbow.ink/mnbw/2",
    description:
      "A reminder to stop, look around and take a deep breath when feeling anxious, insecure or having bad thoughts taking over.",
    img: "https://f8n-production-collection-assets.imgix.net/0x839863f141EbEd31e8e8E305D79d04302790eE32/2/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
  },
];

export const NftList = React.memo(() => {
  return (
    <div className={css.container}>
      <h2>NFTs</h2>
      <div className={css.list}>
        {nfts.map(nft => (
          <Nft key={nft.name} {...nft} />
        ))}
      </div>
    </div>
  );
});
