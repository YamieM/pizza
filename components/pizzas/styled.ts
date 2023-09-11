import {styled} from '@mui/system'

export const StyledContent = styled('div')`
    .content__error-info {
      margin: 100px auto;
      width: 500px;
      text-align: center;
  
      h2 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 10px;
      }
  
      p {
        font-size: 20px;
      }
    }
  
    .content__title {
      font-weight: 800;
      font-size: 28px;
      margin-top: 30px;
      margin-bottom: 40px;
      @media (max-width: 900px) {
        font-size: 30px;
      }
    }
  
    .content__items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-column-gap: 15px;
      margin-top: 20px;
  
      @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
      }
  
      @media (max-width: 1060px) {
        grid-template-columns: repeat(2, 1fr);
      }
  
      @media (max-width: 730px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  
    .content__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
`
