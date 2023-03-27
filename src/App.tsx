import { FC, useEffect, useRef, useState } from "react";
import Tree from "react-d3-tree";
import "./styles.scss";

import items from "./items.json";

export const App: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const dimensions = containerRef.current!.getBoundingClientRect();
        setDimensions({ x: dimensions.width, y: dimensions.height });
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <Tree
                data={items}
                orientation="vertical"
                translate={{ x: dimensions.x / 2, y: dimensions.y / 2.5 }}
                // collapsible={false}
                onNodeClick={(node, evt) => {
                    console.log("onNodeClick", node, evt);
                }}
                onLinkClick={(...args) => {
                    console.log("onLinkClick");
                    console.log(args);
                }}
            />
        </div>
    );
};
