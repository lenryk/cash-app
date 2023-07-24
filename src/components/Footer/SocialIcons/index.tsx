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
      <a href="https://www.twitch.tv/cashapp" target="_blank">
        <Icon name="twitch" inverted={inverted} />
      </a>
      <a href="https://twitter.com/CashApp" target="_blank">
        <Icon name="twitter" inverted={inverted} />
      </a>
      <a href="https://www.instagram.com/cashapp/" target="_blank">
        <Icon name="instagram" inverted={inverted} />
      </a>
    </SocialIconsWrapper>
  );
}
