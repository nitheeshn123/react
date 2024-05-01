
    const heading=React.createElement(
        "h1",
        {id:"head"},
        "hello React")

    const parent=React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
            "div",
            {id:"child"},[
            React.createElement("h1",{},"hello React c1"),
            React.createElement("h1",{},"hello React c1")]
            )
        );

        console.log(parent);

    

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);


