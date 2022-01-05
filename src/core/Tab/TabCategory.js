
import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import styles from './tab.styles'

function TabCategory({ handleCategory, isMobile, value }) {
  const classes = styles();
  
    return (
      <Paper square >
        <Tabs
          value={value}
          onChange={handleCategory}
          variant={!isMobile ? "standard" : "fullWidth"}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator,
          }}
        >
          <Tab
            variant="fixed"
            label="JavaScript"
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            variant="fixed"
            label={!isMobile ? "Algorithms & Data Structures" : "Algorithms"}
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            variant="fixed"
            label="Uncategorized"
            classes={{ root: classes.tabRoot }}
          />
        </Tabs>
      </Paper>
    );
}

export default TabCategory
