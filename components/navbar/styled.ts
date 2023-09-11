import { mediaSize } from "@/util/helpers/screen-size";
import { styled } from "@mui/system";

const orange = `#fe5f1e`;

export const StyledTopContent = styled("div")`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  ${mediaSize.forDesktopXlOnly} {
    flex-wrap: wrap;
  }
`;
export const StyledCategories = styled("div")`
  display: flex;
  margin-top: 20px;
  ul {
    display: flex;

    li {
      background-color: #f9f9f9;
      padding: 13px 30px;
      border-radius: 30px;
      margin-right: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: darken(#f9f9f9, 2%);
      }

      &:active {
        background-color: darken(#f9f9f9, 5%);
      }

      &.active {
        background-color: #282828;
        color: #fff;
      }
      ${mediaSize.forDesktopXlOnly} {
        padding: 10px 20px;
        margin: 10px 0;
      }
    }
  }
  @media (max-width: 775px) {
    overflow-x: scroll;
    scroll-padding: 0 50%;
    scroll-snap-type: x mandatory;
  }
  .categories::-webkit-scrollbar {
    width: 0;
  }
`;
export const StyledSort = styled("div")`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items:center;

  img {
      margin-right: 8px;
    }
  .sort__label {
    display: flex;
    align-items: center; 
    b {
      margin-right: 8px;
      white-space: nowrap;
    }
    span {
      color: ${orange};
      border-bottom: 1px dashed ${orange};
      cursor: pointer;
    }
    ${mediaSize.forDesktopXlOnly} {
      display: flex;
    }

`;
export const StyledPopup = styled("div")`
  position: absolute;
  right: 0;
  top: 10px;
  margin-top: 25px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;

  ul {
    overflow: hidden;
    li {
      padding: 12px 20px;
      cursor: pointer;

      .active,
      &:hover {
        background: rgba(254, 95, 30, 0.05);
      }
    }
    .active {
      font-weight: bold;
      color: ${orange};
    }
  }
`;
