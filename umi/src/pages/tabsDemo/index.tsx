import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
export default class TabsDemo extends React.Component {
    constructor(props:any) {
        super(props)
        this.state = {
            activeKey: '1',
        }
    }
    onTabChange = (activeKey:any) => {
        console.log(activeKey);
        
        this.setState({ activeKey });
    }
    render() {
        return (
            <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        )
    }
}