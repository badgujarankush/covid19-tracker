import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/Switch/Switch.js"
import axios from "axios";
import { Navbar, Container, Nav, select,BootstrapSwitchButton } from "react-bootstrap";
import { Card, CardContent, Typography} from "@material-ui/core";
import InfoBox from "./components/InfoBox";
import Switch from "./components/Switch/Switch";



function App() {
  const [data, setData] = useState([]);
  const [InfoData,setInfoData] = useState({});
  const [isToggled, setIsToggle] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://disease.sh/v3/covid-19/gov/India");
      const states = res.data.states.map((state) => ({
        name: state.state,
      }));
      setData(states);
      // console.log(states);
    }
    getData();
  }, []);

  // const onRegionChange = (event) => {
  //   const regionCode = event.target.value;
  //   console.log("regionCode: "+ regionCode);
  //   setData(regionCode);
  // };
  const onToggle = async ()=>{
    setIsToggle(!isToggled);
    const url = isToggled ? "https://disease.sh/v3/covid-19/all" : "https://disease.sh/v3/covid-19/gov/India";
    
    const res = await axios.get(url);
    if(isToggled){
      setInfoData(res.data);
    }
    else{
      setInfoData(res.data.total);
    }
  }
  console.log("Infodata: " + InfoData);


  return (
    <div className="App">
      {/* header */}
      <div className="app_header">
        <Navbar className="navbar-custom" bg="dark" variant="dark" expand="sm">
          <Container>
            <Navbar.Brand href="#home">COVID-19 Tracker</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <form class="form-inline well"> */}
                  {/* <select
                    class="form-control form-select"
                    searchable="Search here.."
                  >
                    <option value="Worldwide">Worldwide</option>
                    {data.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                  </select> */}
                  
                {/* </form> */}
                <Switch  isOn={isToggled} handleToggle={onToggle}/>
                {/*  */}

                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#vaccine">VACCINATION</Nav.Link>
                <Nav.Link href="#news">NEWS</Nav.Link>
                <Nav.Link href="#help">HELP</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="content">
        <div class="app_left">
          <div className="app_stats">
            <InfoBox title="Coronavirus Cases" cases={420} total={20000} />
            <InfoBox title="Recovered" cases={300} total={15000} />
            <InfoBox title="Deceased" cases={20} total={3000} />
          </div>
        </div>

        <div class="app_right">
          <div className="table">
            <Card style={{ backgroundColor: "#011c29" }}>
              <CardContent>
                {/* Title Corona cases */}
                <h3 style={{ color: "white" }}>Live cases by states</h3>
                <h3 style={{ color: "white" }}>Total number of cases</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
