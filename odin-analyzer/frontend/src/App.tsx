import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import TeamSelectSidePanel from './components/TeamSelectSidePanel';

import { Box, Button, Drawer, createTheme, CssBaseline, Typography, Stack } from "@mui/material";
import AnalasysTabs from './components/AnalasysTabs';
import TabAndView from './components/TabAndView';
import ComparasonBarChart from './components/ComparasonBarChart';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

function App() {
  const [selectedTeams, setSelectedTeams] = useState([5614,1799,254,1690])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TeamSelectSidePanel teams_list={selectedTeams} on_teams_selected={(selected_teams) => {console.log(selected_teams)}}></TeamSelectSidePanel>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AnalasysTabs>
            <TabAndView tabTitle='Overall'>
              <Stack direction={"row"}>
                <ComparasonBarChart
                  teamsDataMap={new Map<number, number>(
                    [[5614, 5],
                    [1690, 3]]
                )} />
                <ComparasonBarChart
                  teamsDataMap={new Map<number, number>(
                    [[5614, 5],
                    [1690, 3]]
                )} />
                <ComparasonBarChart
                  teamsDataMap={new Map<number, number>(
                    [[5614, 5],
                    [1690, 3]]
                )} />
              </Stack>
            </TabAndView>
            <TabAndView tabTitle='Q69'>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
            </TabAndView>
            <TabAndView tabTitle='F3'>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
            </TabAndView>
        </AnalasysTabs>

      </Box>
    </Box>
  );
}

export default App;
