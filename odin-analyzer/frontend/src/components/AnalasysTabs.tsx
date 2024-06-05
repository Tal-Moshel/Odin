import { Box, Tab, Tabs } from "@mui/material";
import { Component, ReactElement, ReactNode, useState } from "react";
import { TabAndViewProps } from "./TabAndView";


interface AnalasysTabsProps {
    children: ReactElement<TabAndViewProps> | Array<ReactElement<TabAndViewProps>>;
}

interface AnalasysTabsState {
    tabIndex: number;
}


class AnalasysTabs extends Component<AnalasysTabsProps, AnalasysTabsState> {
    constructor(props: AnalasysTabsProps){
        super(props);

        this.state = {
            tabIndex: 0
        }
    }

    changeTab = (event: React.SyntheticEvent, newIndex: number) => {
        this.setState({
            tabIndex: newIndex
        })
    }
    
    generateTabProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
          };
    }

    render(){
        let tabsAndViews:  Array<ReactElement<TabAndViewProps>> = [];

        if(!Array.isArray(this.props.children)){
            tabsAndViews.push(this.props.children);
        }else {
            tabsAndViews = this.props.children;
        }

        let tabList: ReactNode [] = [];
        let viewList: ReactNode [] = [];
        if( this.props.children != null){
            for(let i = 0; i < tabsAndViews.length; i++){
                let child: ReactNode = tabsAndViews[i];
                
                tabList.push(
                    <Tab label={child.props.tabTitle} {...this.generateTabProps(i)} />
                )
                viewList.push(
                    // <TabViewWrapper index={i} value={this.state.tabIndex}>
                    //     {child.props.children}
                    // </TabViewWrapper>
                    <div
                          role="tabpanel"
                          hidden={this.state.tabIndex !== i}
                          id={`simple-tabpanel-${this.state.tabIndex}`}
                          aria-labelledby={`simple-tab-${this.state.tabIndex}`}
                        >
                      {this.state.tabIndex === i && <Box sx={{ p: 3 }}>{child.props.children}</Box>}
                    </div>
                )
            }
        }  

        return(
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={this.state.tabIndex} onChange={this.changeTab} aria-label="basic tabs example">
                    {tabList}
                </Tabs>
                </Box>
                
                {viewList}
            </Box>
        )
    }
}

export default AnalasysTabs;