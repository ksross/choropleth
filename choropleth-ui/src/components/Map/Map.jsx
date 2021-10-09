import React, { useEffect, useState } from "react"
import './Map.css';
import * as d3 from 'd3'
import * as d3GeoProjection from "d3-geo-projection"
import countryShapes from "./countries.json"
import Path from "./Path"

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () =>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return width
}

const Map = () => {
    const [projectionName] = useState("geoWinkel3")
    const width = useWindowWidth({})
    const sphere = { type: "Sphere" }
    const projectionFunction = d3[projectionName] || d3GeoProjection[projectionName]
    const projection = projectionFunction().fitWidth(width, sphere)
    const pathGenerator = d3.geoPath(projection)
    const bounds = pathGenerator.bounds(sphere)

    return (
        <div className="map-outer">
            <div className="map-inner">
                <div className="map">
                    <svg width={width} height={bounds[1][1]}>
                        <path d={pathGenerator(sphere)} fill="none" />
                        <g>
                            {countryShapes.features.map((shape) => {
                                return (
                                    <Path key={shape.properties.subunit} pathGenerator={pathGenerator} shape={shape} stroke="#5c6576"></Path>
                                )
                            })}
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Map;