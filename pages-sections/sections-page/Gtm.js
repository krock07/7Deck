import React from "react";
import Chart from "assets/img/gtm.png";
import styles from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/gtmStyle.module.css";

const Gtm = () => {
  return (
    <div>
      <div>
        <h1
          style={{
            color: "#FD9A2F",
            textDecoration: "none",
            fontWeight: "700",
            marginTop: "30px",
            marginBottom: "-2px",
            minHeight: "32px",
            fontFamily: `'Poppins', sans-serif;`,
          }}
        >
          GTM Efforts
        </h1>
        <small>Omnichannel approach to attracting community builders</small>
      </div>
      <div className={styles.wrapper}>
        <div className={`${styles.box} ${styles.a}`}>
          COMMUNITY GROWTH INITIATIVES{" "}
        </div>
        <div className={`${styles.box} ${styles.b}`}>OUTCOMES</div>
        <div className={`${styles.box} ${styles.c}`}>
          Cultural Architect Program
        </div>
        <div className={`${styles.box} ${styles.d}`}>
          To seed and reach creator/professionals we are partnering with voices
          across the culture. We will be where the community already is & build
          with the community leaders.{" "}
        </div>
        <div className={`${styles.box} ${styles.e}`}>
          College Ambassador Program
        </div>
        <div className={`${styles.box} ${styles.f}`}>
          To seed and reach students we are building a team of ambassadors
          across campuses to attract student clubs/groups during Spring and
          Fall.
        </div>
        <div className={`${styles.box} ${styles.g}`}>Events</div>
        <div className={`${styles.box} ${styles.h}`}>
          To reach creators and professionals we will be feet on the ground
          building community across LA + ATL. We will host 3 events/month for
          each city. People fall in love with us when they experience us. So we
          need to bring 7th Ave to them
        </div>
        <div className={`${styles.box} ${styles.i}`}>NFTs</div>
        <div className={`${styles.box} ${styles.j}`}>
          A $1.5M revenue opportunity, to reach the rapidly growing crypto
          community we are launching our own NFT project and driving them to the
          app instead of Discord. We will create buzz and value through
          providing utility and access to an exclusive community through our
          NFT’s.
        </div>
        <div className={`${styles.box} ${styles.k}`}>Target community list</div>
        <div className={`${styles.box} ${styles.l}`}>
          To reach students, professionals, and creators we will launch a sales
          initiative to target, hunt, and close on high valued groups. We will
          provide a whiteglove experience to help provide immediate value.
        </div>
        <div className={`${styles.box} ${styles.m}`}>Community content</div>
        <div className={`${styles.box} ${styles.n}`}>
          Community content To reach students, professionals, and creators we
          will provide direct value to the community through 1st party content.
          7th Ave will become synonymous with education. NFT’s.
        </div>
      </div>
    </div>
  );
};

export default Gtm;
