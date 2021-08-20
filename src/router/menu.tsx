import React from "react";
import { Menu } from "antd";

const LeftMenu = React.memo((props: any) => {

    const [collapsed, setCollapsed] = React.useState(false);  

    return (
        <div style={{width: "100%", height: "100%"}}>
            <Menu
                mode="inline"
                // theme="dark"
                inlineCollapsed={collapsed}
                onClick={props.onClick}
                selectedKeys={props.selectedKeys}
            >
                <Menu.Item key="1">
                    Formily
                </Menu.Item>
                <Menu.Item key="2">
                    svg
                </Menu.Item>
            </Menu>
        </div>
    )

});


export default LeftMenu;