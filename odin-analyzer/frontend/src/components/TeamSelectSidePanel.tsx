import React, { useState, useEffect, Component, ReactElement } from "react";

interface TeamSelectSidePanelProps {
    teams_list: number[];
}

class TeamSelectSidePanel extends Component<TeamSelectSidePanelProps> {
    render() {
        
        let teams_components: ReactElement[] = [];

        this.props.teams_list.forEach((team_number) => {
            teams_components.push(<li>{team_number}</li>)
        })

        return (   
            <ul>
                {teams_components}
            </ul>
        )
    }
}

export default TeamSelectSidePanel;