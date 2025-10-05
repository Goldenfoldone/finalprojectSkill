import React from "react";
import styled from "styled-components";

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const MyLink = styled.a`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #029491;
  }
`;

export const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  return (
    <MyLink href={to} className={className}>
      {children}
    </MyLink>
  );
};
