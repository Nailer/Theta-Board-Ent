import { createStyles, Grid, makeStyles } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { useAnalysisStore } from '../../context.tsx'
import { StoreProps } from '../../stores/game.ts'
import Commands from './commands.tsx'
import Move from './move.tsx'
import Report from './report.tsx'

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      backgroundColor: theme.palette.common.white
    },
    bold: {
      fontWeight: 600
    }
  })
)

const Moves = () => {
  const store = useAnalysisStore() as StoreProps

  const moves = store.history

  const { currentMoveOnTheBoard, reportMoves, expectedPoints, mateIn } = store

  return store.history.length ? (
    <>
      <>
        <Grid container>
          {moves.map((i, index) => {
            const status =
              reportMoves.length > index ? reportMoves[index] : 'ok'
            const score =
              expectedPoints.length > index ? expectedPoints[index + 1] : NaN
            const mateInX = mateIn.length > index ? mateIn[index + 1] : NaN

            return (
              <Grid key={`${index}_${i}`} item xs={6}>
                <Move
                  status={status}
                  currentMove={index === currentMoveOnTheBoard - 1}
                  index={index}
                  move={i}
                  score={score}
                  mateIn={mateInX}
                />
              </Grid>
            )
          })}
        </Grid>
        <Grid item>
          <Report />
        </Grid>
        <Grid item>
          <Commands />
        </Grid>
      </>
    </>
  ) : null
}

export default observer(Moves)
