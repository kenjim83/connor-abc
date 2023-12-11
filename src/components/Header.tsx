import { Box, FormControlLabel, Switch } from "@mui/material";
import { useAtom } from "jotai";
import { isRandomAtom } from "../atoms/letters";


function Header() {
  const [isRandom, setIsRandom] = useAtom(isRandomAtom);

  return (
    <Box display="flex" justifyContent="right" p="10px">
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