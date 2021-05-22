/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React, {Component} from 'react';
import TableList from './TableList';

/*---- Declared component ----------*/
class Table extends Component{

    constructor(){
        super()
        this.state ={
       	countriesList : []
        }
    }
    
    /*---- To Receive data from the Api  & mount on the component ----------*/
    componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/regionalbloc/usan")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        this.setState({
            isLoaded: true,
            countriesList: result
        });
        },
        (error) => {
        this.setState({
            isLoaded: true,
            error
        });
        }
      )
    }

    /*---- Render component ----------*/
    render(){
    return(
        <React.Fragment>
				   
					{/*<!-- Table -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Country Name</th>
                                            <th>Capital</th>
                                            <th>Citizen</th>
                                            <th>Population</th>
                                            <th>Timezones</th>
										</tr>
									</thead>
                                    {/*---- For each to iterates over items in state ----------*/}
									{this.state.countriesList.map((country,index)=>{
                               		return <TableList {...country} key={index} />
                            		})} 	
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
        )
	}
}
export default Table;