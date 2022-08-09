import { NextPage } from "next";
import { ReactNode } from "react";

import Container from "@components/Container";

const BasicLayouts: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export { BasicLayouts };
export default BasicLayouts;
