import { Box, Tab, Tabs } from "@mui/material";
import { Component, useState } from "react";

interface AnalasysTabsProps {
    tabCount: number;
}

interface AnalasysTabsState {
    tabIndex: number;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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
        console.log("Changed")
    }
    
    generateTabProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
          };
    }

    render(){
        console.log(this.state)
        return(
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={this.state.tabIndex} onChange={this.changeTab} aria-label="basic tabs example">
                    <Tab label="Item One" {...this.generateTabProps(0)} />
                    <Tab label="Item Two" {...this.generateTabProps(1)} />
                    <Tab label="Item Three" {...this.generateTabProps(2)} />
                </Tabs>
                </Box>
                <CustomTabPanel value={this.state.tabIndex} index={0}>
                Item One
                </CustomTabPanel>
                <CustomTabPanel value={this.state.tabIndex} index={1}>
                Item Two
                </CustomTabPanel>
                <CustomTabPanel value={this.state.tabIndex} index={2}>
                Item Three
                </CustomTabPanel>
            </Box>
        )
    }
}

export default AnalasysTabs;