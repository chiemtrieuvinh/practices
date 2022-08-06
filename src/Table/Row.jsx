import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import List from './List'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding:5,
    margin:5  
},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
}));


export default function Row({data,dep}) {
  const [open,setOpen] = React.useState(false)
  const newDep = React.useMemo(() => dep+1,[dep])
  const handleOpen = React.useCallback(() => {
    setOpen((prevState) => !prevState)
  },[])
  const hasChildren = React.useMemo(()=> data.children  && data.children.length > 0,[])
  const customStyled = (isRotate) => {
    return {
        transform: `rotate(${isRotate ? '0deg' : '-90deg'})`,
        transition: 'all 0.3s ease'
    }
 }
  return (
    <React.Fragment>
        {
            <StyledTableRow key={data.name}>
                    <StyledTableCell component="th" scope="row">
                        <span 
                        style={{display:'flex', flexDirection:'row', alignItems:'center',paddingLeft: `${dep * 25}px `}}
                        >
                            <span
                             style={{
                                width:20, height: 20, marginRight:5, ...customStyled(open)
                            }}
                            >
                                {
                                    hasChildren && <span onClick={handleOpen}><ExpandMoreIcon /></span>
                                }
                            </span>
                           
                        {data.name}
                        </span>
                    </StyledTableCell>
            </StyledTableRow>
        }
        {
            open && <List list={data.children} dep={newDep}/>
        }
    </React.Fragment>

  );
}