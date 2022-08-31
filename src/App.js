import "./App.css";
import styled from "styled-components";
import CityComponent from "./Components/CityComponent";
import WeatheInfoComponent from "./Components/WeatheInfoComponent";
import { useState } from "react";
import axios from "axios";
const API_KEY = "83b17e6c3aba62b6dcd65afb9f9104be";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;
const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(response.data);
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel> React Weather App</AppLabel>
      {weather ? (
        <WeatheInfoComponent weather={weather}/>
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      {/* <WeatheInfoComponent/> */}
    </Container>
  );
}

export default App;
