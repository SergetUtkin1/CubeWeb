function generateShapes() {
    const formData = {
        count: document.getElementById("count").value,
        innerShape: document.getElementById("innerShape").value,
        maxInnerShapeDimension: {
            length: document.getElementById("maxInnerShapeLength").value,
            width: document.getElementById("maxInnerShapeWidth").value,
            height: document.getElementById("maxInnerShapeHeight").value
        },
        minInnerShapeDimension: {
            length: document.getElementById("minInnerShapeLength").value,
            width: document.getElementById("minInnerShapeWidth").value,
            height: document.getElementById("minInnerShapeHeight").value
        },
        isSortingEnable: document.getElementById("isSortingEnable").checked,
        boundingShape: document.getElementById("boundingShape").value,
        boundingShapeDimension: {
            length: document.getElementById("boundingShapeLength").value,
            width: document.getElementById("boundingShapeWidth").value,
            height: document.getElementById("boundingShapeHeight").value
        },
        distributionOfPosition: document.getElementById("distributionOfPosition").value,
        distributionOfLength: document.getElementById("distributionOfLength").value
    };
    // Assuming you have an API endpoint for shape generation
    const apiEndpoint = "https://localhost:7271/api/Case";
    location.replace("/shapes.html");
}

//# sourceMappingURL=index.f0ecd0b4.js.map
