import { styled } from "@mui/system";

const lightGray = "#F9F9F9";

export const StyledPizzaBlock = styled("div")`
width: 280px;
text-align: center;
justify-self: center;
margin-bottom: 65px;
transition: all 0.2s ease-in-out;

.pizza-block__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  
  img {
    margin:0 5px;
  }
}
img {
  width:auto;
  height:auto;
}

.pizza-block__price {
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.015em;
    }
  
    &:hover {
      transform: scale(1.03);
    }
  
    &-wrapper {
      display: flex;
      justify-content: center;
    }
  
    
  
    h4{
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 20px;      
    }
  
   .pizza-block__selector {
      display: flex;
      background-color: ${lightGray};
      border-radius: 10px;
      flex-direction: column;
      padding: 6px;
  
      ul {
        display: flex;
        flex: 1;
  
        &:first-of-type {
          margin-bottom: 6px;
        }
  
        li {
          padding: 8px;
          flex: 1;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          &.active {
            background: #ffffff;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.034);
            border-radius: 5px;
            font-weight: 700;
          }
          &.disabled {
            background-color: #F2F2F2;
            color: #727272;
            border-radius: 5px;
            font-weight: 500;
            cursor: not-allowed;
          }
        }    
    }  
    
`;
