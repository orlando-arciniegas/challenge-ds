/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React from 'react';

/*---- Declared component ----------*/
function TableList(props){
    return(
        <React.Fragment>
            <tbody>
                <tr>
	                <td>{props.name}</td>
	                <td>{props.capital}</td>
	                <td>{props.demonym}</td>
	                <td>{props.population}</td>
	                <td>{props.timezones}</td>
                </tr>
            </tbody>
        </React.Fragment>
    )
}
export default TableList;