import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';

 





export default function DataList(props) {
    const [rows, setrows] = useState([]);
    
    
    useEffect(() => {
        console.log('Setting rows..', props)
        setrows(props.rows)
    }, [props]);

    const columns = ()=>{ 
        if(props.rows.length >0)
       { var keys = Object.keys(props.rows[0]);  
         const colunmDetails =  keys.map(key=> {return {field: key, headerName: key}})  
         console.log(colunmDetails)
         return colunmDetails }
         return []
    }




  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns()}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
