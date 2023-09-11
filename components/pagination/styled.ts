import {styled} from '@mui/system'
import ReactPaginate from 'react-paginate'

export const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;

    li {
      display: inline-block;

      a {
        display: inline-block;
        color: #fe5f1e;
        font-weight: 600;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 16px;
        padding: 10px;
        border: 1px solid #fe5f1e;
        border-radius: 30px;
        cursor: pointer;
        &:hover {
          background-color: #fe5f1e;
          color: #fff;
        }
      }
    }
    .selected {
      a {
        background-color: #fe5f1e;
        color: #fff;
      }
    }
`
