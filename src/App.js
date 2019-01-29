import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TraceHeder from './pages/component/mytest/TraceHeder'
import TraceBody  from './pages/component/mytest/TraceBody'
import TraceFooter  from './pages/component/mytest/TraceFooter'
class App extends Component {
   constructor(props){
       super(props);
       this.state= {
           traces: [
               {id: 1, name: "wwj", content: "哈哈哈哈哈", createAt: new Date()}
               ]
       }
   };
    addTrace=(trace)=>{
       let traces=this.state.traces;
       trace.id=traces.length>0?traces[traces.length-1].id+1:1;
       trace.createAt=new Date();
       traces.push(trace);
       this.setState({
           traces
       })
    };
    removeTrace=(id)=>{
        let traces=this.state.traces;
        traces=traces.filter(trace=>trace.id!==id);
        this.setState({
            traces
        })
    };
    render() {
        return (
            <div className="panel-default">
                <div className="panel-heading">
                    <TraceHeder/>
                </div>
                <div className="panel-body">
                    <TraceBody traces={this.state.traces} removeTrace={this.removeTrace}/>
                </div>
                <div className="panel-footer">
                    <TraceFooter addTrace={this.addTrace}/>
                </div>
          {/*<p>
            <button type="button" className="btn btn-lg btn-default">Default</button>
            <button type="button" className="btn btn-lg btn-primary">Primary</button>
            <button type="button" className="btn btn-lg btn-success">Success</button>
            <button type="button" className="btn btn-lg btn-info">Info</button>
            <button type="button" className="btn btn-lg btn-warning">Warning</button>
            <button type="button" className="btn btn-lg btn-danger">Danger</button>
            <button type="button" className="btn btn-lg btn-link">Link</button>
          </p>
          <input type="text" className="text-primary" value="我是你爸爸"/>*/}

            </div>


       );
    }
}

export default App;
