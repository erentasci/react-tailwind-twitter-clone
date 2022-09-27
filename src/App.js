import React from "react";
import Container from "./layout/Container";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";
import TimelineWidget from "./layout/TimelineWidget";

function App() {
  return (

    <Container> 
      <Sidebar/>
      <Content/>
      <TimelineWidget/>
    </Container>

  );
}

export default App;