import React, { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// import { AppHeader, MainRecorder } from './@UI'
import  AppHeader  from './@UI/AppHeader/AppHeader.tsx'
import  MainRecorder  from './@UI/MainRecorder/MainRecorder.tsx'
import theme from './theme.ts'

const Camera: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppHeader />
      <MainRecorder />
    </ChakraProvider>
  )
}

export default Camera;
