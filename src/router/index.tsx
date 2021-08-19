import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Content, Header } from 'antd/lib/layout/layout';

const IndexComponent = React.lazy(() => import("../pages/main/index"));

export default class MyRouter extends Component {
    render() {
        return (
            <div className="root-wrap">
                <Layout style={{ minHeight: '100vh' }} className="ant-layout-has-sider">
                    <Sider collapsible={true}>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>
                            <React.Suspense fallback={"loading"}>
                                <HashRouter>
                                    <Switch >
                                        <Route path="/" component={IndexComponent} />
                                    </Switch>
                                </HashRouter>
                            </React.Suspense>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}