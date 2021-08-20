import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Content, Header } from 'antd/lib/layout/layout';
import LeftMenu from './menu';
import { withRouter } from 'react-router-dom';

const IndexComponent = React.lazy(() => import("../pages/main/index"));
const SvgComponent = React.lazy(() => import("../pages/svg/index"));

class MyRouter extends Component<any, any> {
    hashRouterRef: any;


    // selectedKeys


    constructor(props: any) {
        super(props);

        this.hashRouterRef = React.createRef();
        this.state = {
            selectedKeys: ["1"],

        }


    }

    componentDidMount() {
        console.log("hashRef ", this.hashRouterRef)
    }

    onClickMenuItem = (event: any) => {
        console.log("onClickMenuItem ", event);
        if (this.state.selectedKeys[0] !== event.key) {
            this.setState({
                selectedKeys: [event.key],
            }, () => {
                if (event.key === '1') {
                    this.hashRouterRef.current.history.push('/');
                } else {
                    this.hashRouterRef.current.history.push('/svg');
                }
            })
        }

    }


    render() {
        return (
            <div className="root-wrap">
                <Layout style={{ minHeight: '100vh' }} className="ant-layout-has-sider">
                    <Sider
                        // collapsible={true}
                        // collapsedWidth={50}
                    >
                        <LeftMenu onClick={this.onClickMenuItem} />
                    </Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>
                            <React.Suspense fallback={"loading"}>
                                <HashRouter ref={this.hashRouterRef}>
                                    <Switch >
                                        <Route exact={true} path="/" component={IndexComponent} />
                                        <Route exact={true} path="/svg" component={SvgComponent} />
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

// export default withRouter(MyRouter)
export default MyRouter;