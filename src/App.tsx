import { Box } from '@mui/material';
import LettersFlashCards from './components/LettersFlashCards';
import SwipeableEdgeDrawer from './components/SwipeableEdgeDrawer';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Box display="flex" alignItems="center" flexDirection="column" sx={{ width: '100vw', px: 2 }}>
        <LettersFlashCards />
        <SwipeableEdgeDrawer />
      </Box>
    </>
  )
}

export default App
