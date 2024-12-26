import { Grommet } from 'grommet';

import Home from './pages/Home';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Home />
    </Grommet>
  );
}

export default App;
