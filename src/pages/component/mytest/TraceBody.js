import React from 'react';
import TraceList from './body/TraceList'
export default class TraceBody extends React.Component{
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.traces.map(
                        (
                            (trace,index)=>(
                                <TraceList trace={trace} key={index} removeTrace={this.props.removeTrace}/>
                            )
                        )
                    )
                }

            </ul>
        );
    }
}