import styled, { css } from "styled-components";

import { IAutocompleteProps } from "../Autocomplete.interfaces";

const AutocompletePopupWrapper = styled.div<
  Pick<IAutocompleteProps, "fullWidth">
>(
  ({ theme: { colors, typography }, fullWidth }) => css`
    display: flex;
    flex-direction: column;
    width: 40rem;
    background: ${colors.background.main};
    box-shadow: 0px 4px 22px rgba(172, 172, 172, 0.26);
    padding: 1.2rem;
    border-radius: 0.4rem;
    position: absolute;
    top: 110%;
    left: 0;
    max-height: 18rem;
    overflow-y: auto;
    z-index: 1;

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `
);

const AutocompletePopupItem = styled.li(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.6rem;
    width: 100%;
    cursor: pointer;
    transition: 0.2s ease-out;

    :not(:last-child) {
      border-bottom: 0.1rem solid ${colors.border.grey};
    }

    :hover {
      background: ${colors.neutral[20]};
    }

    color: ${colors.text.heading};
    font-size: ${typography.large.fontSize};
    font-weight: ${typography.small.fontWeight.regular};
  `
);

export { AutocompletePopupWrapper, AutocompletePopupItem };
