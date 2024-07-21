import { Box, Card, createStyles, makeStyles } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { useAnalysisStore } from '../../context.tsx'
import { StoreProps } from '../../stores/game'
import InputPgn from './input_pgn.tsx'
import React from 'react'

import Moves from './move_list.tsx'

const useStyles = makeStyles(theme =>
  createStyles({
    card: { 
      display: 'flex'
    },
    box: {
      padding: 16
    }
  })
)

const AnalysisContainer = () => {
  const classes = useStyles()
  const store: StoreProps = useAnalysisStore()
  const { history } = store

  return (
    <Card className={classes.card}>
      <Box className={classes.box}>
        {history.length ? <Moves /> : <InputPgn />}
      </Box>
    </Card>
  )
}

export default observer(AnalysisContainer)
