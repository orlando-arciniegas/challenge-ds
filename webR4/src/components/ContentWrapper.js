/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TopBar from './TopBar';
import Table from './Table';

/*---- Declared component ----------*/
function ContentWrapper(){

    return(
        <React.Fragment>

			{/* Main Content */}
			<div id="content-wrapper" className="d-flex flex-column">
                
                <div id="content">
                    <TopBar />
					<Switch>
                        <Route path="/table" component={Table} />
                    </Switch>
                    <h1 className="h3 text-gray-800 text-center">Here you can see the results on your database.</h1>
                </div>

            </div>    
            {/* End Main Content */}
            
        </React.Fragment>
    )

}
export default ContentWrapper;