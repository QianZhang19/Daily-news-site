import React, { useState, useEffect } from "react";

const Image = ({ title, src }) => {
    return (<img style={{ width: 400, }}
        alt={title}
        src={src}
    />)
};

export default Image;


