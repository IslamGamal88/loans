import { FC, Fragment } from "react";
import { Props } from "./types";

const Gate: FC<Props> = ({ gate, children }) => {
  return gate ? <Fragment>{children}</Fragment> : null;
};

export default Gate;
