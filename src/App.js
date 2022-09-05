
import './App.css';
import {CssBaseline,Grid} from '@material-ui/core'
import {Header,List,Map,PlaceDetails} from './components/index'
function App() {
  return (
    <div>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map/>
        </Grid>
    </Grid>
    </div>
  );
}

export default App;
