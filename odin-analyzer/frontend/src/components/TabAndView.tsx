import { Component, ReactElement } from "react";

export interface TabAndViewProps {
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

export default TabAndView;