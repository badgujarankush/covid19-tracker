import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Card, CardContent } from "@material-ui/core";
import "./App.css";
import "./components/Switch/Switch.js";
import InfoBox from "./components/InfoBox";
import Switch from "./components/Switch/Switch";
import Table from "./components/Table";
import { sortData,prettyPrintStat } from "./components/util";
import Graph from "./components/Graph";
import Vcard from "./components/Vcard";
import Help from "./components/Help"

function App() {
  const [InfoData, setInfoData] = useState({}); //active recovered death only stats for 3 cards
  const [isToggled, setIsToggle] = useState(false); // for switching apis from india to world
  const [tableData, setTableData] = useState([]); //getting data for table
  const [filter,setFilter] = useState('');    //for search function
  const changeFilter= (e)=>{
    setFilter(e.target.value)
  }

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/gov/India")
      .then((response) => response.json())
      .then((data) => {
        const tData = data.states.map((region) => ({
          today: region.todayCases,
          reg: region.state,
          active: region.active,
          recovered: region.recovered,
          totalcases: region.cases,
          deaths: region.deaths,
        }));
        const sortedData = sortData(tData);
        setTableData(sortedData);
        // setTableData(tData);
        setInfoData(data.total); //total cases for india
      });
  }, []);

  const onToggle = async () => {
    if (isToggled === false) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }

    const regionCode = isToggled ? "india" : "worldwide";
    console.log(regionCode);
    const url =
      regionCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : "https://disease.sh/v3/covid-19/gov/India";
    const wurl = "https://disease.sh/v3/covid-19/countries";
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (regionCode === "worldwide") {
          setInfoData(data);
        } else {
          setInfoData(data.total);
          const tData = data.states.map((region) => ({
            today: region.todayCases,
            reg: region.state,
            active: region.active,
            recovered: region.recovered,
            totalcases: region.cases,
            deaths: region.deaths,
          }));
          const sortedData = sortData(tData);
          setTableData(sortedData);
          // setTableData(tData);
        }
      });

    await fetch(wurl)
      .then((response) => response.json())
      .then((data) => {
        const tData = data.map((region) => ({
          today: region.todayCases,
          reg: region.country,
          active: region.active,
          recovered: region.recovered,
          totalcases: region.cases,
          deaths: region.deaths,
        }));
        if (regionCode === "worldwide") {
          const sortedData = sortData(tData);
          setTableData(sortedData);
          // setTableData(tData);
        }
      });
  };
 
  return (
    <div className="App">
      {/* header */}
      <div className="app_header">
        <Navbar className="navbar-custom" bg="dark" variant="dark" expand="sm" fixed="top">
          <Container>
            <Navbar.Brand href="#home">COVID-19 Tracker</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Switch isOn={isToggled} handleToggle={onToggle} />

                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#vaccine">VACCINATION</Nav.Link>
                <Nav.Link href="#help">HELP</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <section id="home">
        <div className="content">
          <div class="app_left">
            <div className="app_stats">
              <InfoBox
                title="Coronavirus Cases"
                cases={prettyPrintStat(InfoData.todayCases)}
                total={prettyPrintStat(InfoData.cases)}
              />
              <InfoBox
                title="Recovered"
                cases={prettyPrintStat(InfoData.todayRecovered)}
                total={prettyPrintStat(InfoData.recovered)}
              />
              <InfoBox
                title="Deceased"
                cases={prettyPrintStat(InfoData.todayDeaths)}
                total={prettyPrintStat(InfoData.deaths)}
              />
            </div>
            <div className="graph">
              <Graph statistics={InfoData} />
            </div>
          </div>

          <div className="app_right">
            <div className="appTable">
              <Card style={{ backgroundColor: "#011c29" }}>
                <CardContent>
                  {/* Title Corona cases */}
                  <div className="table-top">
                  <h4 style={{ color: "white" }}>Live cases by Region</h4>
                  <input value={filter}  onChange={changeFilter}  type="text" placeholder="Search" aria-label="Search" />
                  </div>
                  
                  {/* <div className="appTable"> */}
                  <Table regions={tableData} filtered={filter} />
                  {/* </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="vaccine">
        <div >
          <div className="vac-head">
            <h1>How to get your vaccination (INDIA)</h1>
          </div>
          <div className="vaccine-card">
            <Vcard useravatar={"book"} content={"Book An Appointment On CoWIN or Walk Into Any Vaccination Center"} linkTitle={"BOOK YOUR SLOT"} link={"https://selfregistration.cowin.gov.in/"} />
            <Vcard useravatar={"take"} content={"Get Your Vaccination Safely at the Time of Your Appointment"} linkTitle={"DOS AND DONT'S FOR GETTING VACCINATED"} link ={"https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf"}/>
            <Vcard useravatar={"down"} content={"Download Your Vaccination Certificate from CoWIN and Wait for Dose #2"} linkTitle={"DOWNLOAD YOUR VACCINE CERTIFICATE"} link ={"https://selfregistration.cowin.gov.in/"}/>
          </div>
        </div>
      </section>
      <section id="help">
      <div>
      <div className="help-head">
        <h1>Need Help?</h1>
      </div>
        <div className="help-card">
        <Help/>
        </div>
          </div>
      </section>
      <footer>
        <p>Created by <a href="https://github.com/badgujarankush">@badgujarankush</a></p>
      </footer>
    </div>

    
  );
}

export default App;
