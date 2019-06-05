import React from 'react';
import {BrowserRouter, Route, Link } from "react-router-dom";
import UpLoad from './UpLoad/Upload';
import { connect } from 'react-redux';
import { createSection } from './action/section-actions';

import Landing from './Landing/Landing';

class App extends React.Component {
    render() {
        return(
            <div>
                <UpLoad onComplete={this.props.mappedSectionCreate}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // Jerome - anything I return here will become props
    return {
        sections: state,
    }

};

const mapDispatchToProps = (dispatch) => {
    // Jerome - anything I return here will become props
    return {
        mappedSectionCreate: (section) => {
            dispatch(createSection(section.title));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




// export default class App extends React.Component{
//     render() {
//         const LANDING_ROUTE = '/';
//         return(
//             <main className="app">
//                 <BrowserRouter>
//                     <nav>
//                         <ul>
//                             <li><Link to={LANDING_ROUTE}>Landing</Link></li>
//                             <li><Link to="/upload">UpLoad</Link></li>
//                         </ul>
//                     </nav>
//                     <Route exact path={LANDING_ROUTE} component={Landing}></Route>
//                     <Route exact path="/upload" component={UpLoad}></Route>
//                 </BrowserRouter>
//             </main>
//         )
//     }
// }



