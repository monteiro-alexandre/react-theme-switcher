import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 0;
  overflow: hidden;
  background: linear-gradient(
    42deg,
    ${props => props.theme.colors.backgroundLinearGradient.primary} 0%,
    ${props => props.theme.colors.backgroundLinearGradient.secondary} 100%
  );
`;

export const FaqList = styled.div`
  padding: 0 100px;

  ul {
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
    list-style: none;

    li {
      padding: 30px;
      background: ${props => props.theme.colors.faq.questionBackground};
      border-radius: 5px;
      position: relative;
      margin-top: 15px;

      & > div {
        transition: all 0.3s ease-in-out;
      }

      &:first-child {
        margin-top: 0 !important;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 0;
  }
`;

export const HelpIcon = styled.i`
  position: absolute;
  right: 0;
  left: 20px;
`;

export const Question = styled.a`
  color: ${props => props.theme.colors.faq.questionText};
  display: block;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 0 30px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

export const ArrowIcon = styled.i`
  position: absolute;
  right: 0;
  top: 0;
`;

export const CollapseContent = styled.p`
  margin-bottom: 0;
  padding: 10px 0 0 0;
`;
