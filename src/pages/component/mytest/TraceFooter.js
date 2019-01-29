import React from 'react';
export default class TraceFooter extends React.Component{
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" className="form-control" ref={ref=>this.name=ref}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">内容</label>
                    <textarea id="content" ref={ref=>this.content=ref} className="form-control" cols="30" rows="10"></textarea>
                </div>
                <div className="container">
                    <button className="btn-primary" type="submit">提交</button>
                </div>
            </form>
        );
    }
    handleSubmit=(event)=>{
        //阻止默认提交表单事件
        event.preventDefault();
        let name=this.name.value;
        let content=this.content.value;
        this.props.addTrace({name,content})
        this.content.value=''
        this.name.value=''
    }
}