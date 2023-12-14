import { Box, Button, FormControlLabel, Switch, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { isDrawerOpenAtom, isRandomAtom } from "../atoms/letters";


function Header() {
  const [isRandom, setIsRandom] = useAtom(isRandomAtom);
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);

  return (
    <Box display="flex" justifyContent="space-between" p="10px">
      <Button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <Typography>ABC</Typography>
      </Button>
      <FormControlLabel
        control={<Switch checked={isRandom} onChange={() => {
          setIsRandom(!isRandom);
        }} />}
        label="Random"
      />
    </Box>
    )
}


export default Header;