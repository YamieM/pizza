import { styled } from "@mui/system";

export const StyledHeader = styled("header")`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f6f6f6;
  padding: 40px 0;

  @media (max-width: 900px) {
    padding-bottom: 0;
  }
`;

export const StyledHeaderContainer = styled("div")`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
    width: 80%;

    @media (max-width: 900px) {
      width: 100%;
      margin-top: 40px;
      gap: 10px;
    }
  }
`;

export const StyledHeaderLogo = styled("div")`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  img {
    transform: rotate(30deg);

    @media (max-width: 700px) {
      width: 25px;
    }
  }

  .logo__text {
    display: flex;
    flex-direction: column;
    width: 130px;
    align-items: end;

    @media (max-width: 700px) {
      width: 110px;
    }

    h1 {
      color: #181818;
      font-size: 24px;
      letter-spacing: 1%;
      text-transform: uppercase;
      font-weight: 800;
      padding-right: 10px;

      @media (max-width: 700px) {
        font-size: 20px;
      }
    }

    p {
      color: #fe5f1e;
      margin-top: -10px;
      font-size: 16px;
      font-style: italic;
      font-weight: 700;

      @media (max-width: 700px) {
        font-size: 12px;
      }
    }
  }
`;
export const StyledSearchContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: 80%;
  max-width: 400px;
  margin: 0 20px;

  @media (max-width: 700px) {
    margin: 0 10px;
  }
  .search-input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 12px 20px;
    padding-left: 40px;
    width: 100%;
    border-radius: 10px;
    font-size: 16px;

    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.205);
    }

    @media (max-width: 700px) {
      padding-left: 30px;
    }
  }
  .search-icon {
    opacity: 0.3;
    position: absolute;
    margin: 0 10px;

    @media (max-width: 700px) {
      width: 15px;
    }
  }
  .clear-icon {
    opacity: 0.3;
    margin: 0 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    @media (max-width: 700px) {
      margin: 0 0;
      width: 20px;
    }
  }
`;
