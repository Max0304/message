import React from 'react'
export default class TraceList extends React.Component{
    render() {
        let {trace}=this.props;
        return (
            <li className="list-group-item">
                {trace.name}：{trace.content}
                <button className={"btn btn-danger btn-xs"} onClick={()=>this.props.removeTrace(trace.id)}>删除</button>
                <span className="pull-right">{trace.createAt.toLocaleString()}</span>
            </li>
        );
    }
}