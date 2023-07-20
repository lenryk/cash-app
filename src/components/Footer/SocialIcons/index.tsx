import Icon from "../../Icon";
import React from "react";
import styled from "styled-components";

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export default function SocialIcons({
  inverted = false,
}: {
  inverted?: boolean;
}) {
  return (
    <SocialIconsWrapper>
      <Icon name="twitch" inverted={inverted} />
      <Icon name="twitter" inverted={inverted} />
      <Icon name="instagram" inverted={inverted} />
    </SocialIconsWrapper>
  );
}
