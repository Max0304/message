/**
 * 文件名称: routes/route.js
 *
 * 文件描述: react-router中的路由配置
 */
import React from "react";
import {Route} from "react-router-dom";

import {Login} from "PAGES/login";//登录页面
import {Home} from "PAGES/home";//trace搜索首页
import Detail from "PAGES/detail/detail";//详情页

const routes = (
    <div>
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/detail" component={Detail}/>
    </div>
);

export default routes;