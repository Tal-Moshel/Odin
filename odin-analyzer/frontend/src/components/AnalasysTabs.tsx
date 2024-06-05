import { Box, Tab, Tabs } from "@mui/material";
import { Component, ReactElement, ReactNode, useState } from "react";

interface AnalasysTabsProps {
    children: Array<ReactElement<TabAndViewProps>>;
}

interface AnalasysTabsState {
    tabIndex: number;
}

interface TabAndViewProps {
    tabTitle: string;
    children?: ReactElement | ReactElement[] | JSX.Element | JSX.Element[];
}

class TabAndView extends Component<TabAndViewProps>{
    constructor(props: TabAndViewProps){
        super(props)
    }

    render() {
        return (
            this.props.children
        )
    }
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanelWrapper(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
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
        let tabList: ReactNode [] = [];
        let viewList: ReactNode [] = [];
        if( this.props.children != null){
            for(let i = 0; i < this.props.children.length; i++){
                let child: ReactNode = this.props.children[i];
                
                tabList.push(
                    <Tab label={child.props.tabTitle} {...this.generateTabProps(i)} />
                )
                viewList.push(
                    <TabPanelWrapper index={i} value={this.state.tabIndex}>
                        {child.props.children}
                    </TabPanelWrapper>
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

export {AnalasysTabs, TabAndView}