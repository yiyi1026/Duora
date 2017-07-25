import React from 'react';

class FeedList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className ="all-margin-30">
                <div className='row bottom-padding-10 bottom-boader'>
                    <span className="left-margin-30">Feeds</span> 
                    <span className="pull-right right-margin-60">
                        <a className="grey" href="#">
                            Edit
                        </a>
                        </span>
                </div>
                <div className="row">
                <ul className="nav nav-pills nav-stacked topic-list">
                    <li><a href="#">Topic 1</a></li>
                    <li><a href="#">Topic 2</a></li>
                    <li><a href="#">Topic 3</a></li>
                    <li><a href="#">Topic 4</a></li>
                </ul>
                </div>

            </div>

        )
    }
}

export default FeedList;