import React from "react";
import Smurf from "./Smurf"

export default (props) => {
    const SmurfList = props.smurfs.map((smurfs, i) => <Smurfs smurfs={smurfs} key={i} index={i} />);
        return (
            <ul>
                {smurfs}
            </ul>
        );
    };


