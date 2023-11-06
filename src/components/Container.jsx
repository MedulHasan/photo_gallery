import React, { useState } from "react";
import Header from "./Header";
import { images } from "../data/imagesData";
import Gallery from "./Gallery";

function Container() {
    const [data, setData] = useState(images);
    const [selectedItem, setSelectedItem] = useState([]);

    return (
        <div className="bg-white min-h-screen rounded-md shadow">
            <Header
                data={data}
                setData={setData}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            <Gallery
                items={data}
                setItems={setData}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
        </div>
    );
}

export default Container;
