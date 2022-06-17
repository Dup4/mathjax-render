import { NextPage } from "next";

import Link from "next/link";

import { Grid } from "@nextui-org/react";

import styles from "./headNav.module.css";

interface HeadNavProps {
  currentTab?: string;
}

const tabList = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Reference",
    route: "/reference",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeadNav: NextPage<HeadNavProps> = (props) => {
  return (
    <Grid.Container gap={1} className={styles.navbar}>
      {tabList.map((tab) => (
        <Grid key={tab.title}>
          <Link href={tab.route}>{tab.title}</Link>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export { HeadNav };
export default HeadNav;
