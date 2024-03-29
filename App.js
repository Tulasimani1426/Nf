import React, { Component } from "react"

import Navbar from "./components/Navbar"
import Box from "./components/Footer"
import Last from "./components/last"
import C1 from "./components/C1"
import C2 from "./components/C2"
import C3 from "./components/C3"
import C4 from "./components/C4"
import C5 from "./components/C5"
import C6 from "./components/C6"


const App=()=>{
 
    return (
        <div>
        <C1 />
        <Navbar />
        <C2 />
        <C3 />
        <C4 />
        <C5 />
        <C6 />
        <Last />
        <Box />

        </div>
    );
}


export default App;