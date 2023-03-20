import React from "react";

interface TokenCardProps {
  name: string;
  children: React.ReactNode;
}

function TokenCard({ name, children }: TokenCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>{children}</ul>
    </div>
  );
}

export default TokenCard;
