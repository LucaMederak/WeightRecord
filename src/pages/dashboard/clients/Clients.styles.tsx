import styled, { css } from "styled-components";

const HeadingWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: ${breakpoints.xl};

    a {
      width: 100%;
    }

    h1 {
      color: ${colors.text.heading};
      font-size: ${typography.heading4.fontSize};
      font-weight: ${typography.heading4.fontWeight.bold};
    }

    ${up(breakpoints.xs)} {
      h1 {
        font-size: ${typography.heading3.fontSize};
        font-weight: ${typography.heading3.fontWeight.bold};
      }

      a {
        width: auto;
      }
    }

    ${up(breakpoints.sm)} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `
);

const AvailableTermsWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    display: block;
    border: 0.1rem solid ${colors.border.grey};
    border-radius: 0.8rem;
    width: 100%;
    max-width: ${breakpoints.xl};
    padding: 3.2rem 0;
    overflow-x: auto;
    background-size: 30px 30px;
    background-image: linear-gradient(to right, #efefef3a 1px, transparent 1px),
      linear-gradient(to bottom, #eeeeee2c 1px, transparent 1px);
  `
);

const TableWrapper = styled.table(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    width: 100%;
    border-collapse: collapse;
  `
);

const TableHeadWrapper = styled.thead(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    width: 100%;
    tr {
      width: 100%;
      border-bottom: 0.1rem solid ${colors.border.grey};

      th {
        padding-bottom: 1.6rem;
        padding-left: 2rem;
        text-align: left;
        font-size: ${typography.base.fontSize};
        font-weight: ${typography.base.fontWeight.semibold};
        color: ${colors.neutral[70]};
      }
    }
  `
);

const TableBodyWrapper = styled.tbody(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    width: 100%;
    background: ${colors.background.main};

    tr {
      border-bottom: 0.1rem solid ${colors.border.grey};
      cursor: pointer;
      transition: 0.2s ease;

      :hover {
        background: ${colors.background.contrast};
      }

      td {
        padding: 2rem;
        padding-left: 2rem;
        text-align: left;
        font-size: ${typography.base.fontSize};
        font-weight: ${typography.base.fontWeight.medium};
        color: ${colors.text.description};
        ul {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;

          li {
            display: flex;
            align-items: center;
            gap: 0.8rem;

            span {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
  `
);

export {
  HeadingWrapper,
  AvailableTermsWrapper,
  TableWrapper,
  TableHeadWrapper,
  TableBodyWrapper,
};
