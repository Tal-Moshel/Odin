import React, { useState, useEffect, Component, ReactElement } from "react";
import Checkbox from "@mui/material/Checkbox"
import { FormGroup, FormControlLabel, Button} from "@mui/material";

interface TeamSelectSidePanelProps {
    teams_list: number[];
    on_teams_selected: (selected_teams: number[]) => void;
}

interface TeamSelectSidePanelState {
    teams_select_map: Map<number, boolean>
}

class TeamSelectSidePanel extends Component<TeamSelectSidePanelProps, TeamSelectSidePanelState> {
    constructor(props: TeamSelectSidePanelProps){
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
                <FormControlLabel
                    control={
                        <Checkbox/>}
                    label={team_number} key={team_number}/>
            )
        })
        
        return ( 
            <FormGroup>
                <Button variant="contained" onClick={this.on_select_button_press}>Select</Button>
                {teams_components}
            </FormGroup>
              
        )
    }
}

export default TeamSelectSidePanel;