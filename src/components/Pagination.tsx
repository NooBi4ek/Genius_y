import { Pagination as MuiPagination, styled } from '@mui/material';
import { FC, ChangeEvent } from 'react';

interface Props {
  count: number;
  variant: 'outlined' | 'text';
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
}

const Pagination: FC<Props> = ({ count, variant, onChange }) => {
  return (
    <StyledPagination onChange={onChange} count={count} variant={variant} />
  );
};
export default Pagination;

const StyledPagination = styled(MuiPagination)({
  margin: '0 auto',

  '.MuiPaginationItem-root': {
    color: '#fff',
    borderRadius: '1px solid #fff',
  },
  '.MuiPagination-ul': {
    justifyContent: 'center',
  },
});
