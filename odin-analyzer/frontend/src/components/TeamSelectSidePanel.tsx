import React, { useState, useEffect, Component, ReactElement } from "react";

interface TeamSelectSidePanelProps {
    teams_list: number[];
    on_teams_selected: (selected_teams: number[]) => void;
}

interface TeamSelectSidePanelState {
    teams_select_map: Map<number, boolean>
}

class TeamSelectSidePanel extends Component<TeamSelectSidePanelProps, TeamSelectSidePanelState> {
    constructor(props){
        super(props);
        
        this.state = {
            teams_select_map: new Map<number,boolean>(
                this.props.teams_list.map((team_number) => [team_number, true])
            )
        }
    }

    on_select_button_press = () => {
        this.props.on_teams_selected(
            Array.from(this.state.teams_select_map.keys()).filter((value: number) => this.state.teams_select_map.get(value) === true)
        )
    }

    render() {
        let teams_components: ReactElement[] = [];
        this.props.teams_list.forEach((team_number) => {
            teams_components.push(
                <div>
                    <li>{team_number}</li>
                    
                </div>
            )
        })
        
        return ( 
            <div>
                <button onClick={(obj) => {this.on_select_button_press()}} value={"Select"}/>
                <ul>
                    {teams_components}
                </ul>
            </div>     
        )
    }
}

export default TeamSelectSidePanel;