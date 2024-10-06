// Calculate Revolutions
document.getElementById('calculateRevBtn').addEventListener('click', function() {
    // Get values from inputs for revolution calculation
    let kg = parseFloat(document.getElementById('kg').value);
    let count = parseFloat(document.getElementById('count').value);
    let needle = parseFloat(document.getElementById('needle').value);
    let stitch = parseFloat(document.getElementById('stitch').value);
    let feeder = parseFloat(document.getElementById('feeder').value);

    // Formula to calculate revolutions
    let revolutions = (kg * count * 169368) / (needle * stitch * feeder);

    // Display the result for revolutions
    document.getElementById('revolutionResult').innerText = revolutions.toFixed(2);
});

// Calculate Stitch Length
document.getElementById('calculateStitchBtn').addEventListener('click', function() {
    // Get values from inputs for stitch length calculation
    let wesco = parseFloat(document.getElementById('wesco').value);
    let needleStitch = parseFloat(document.getElementById('needleStitch').value);

    // Formula to calculate stitch length
    let stitchLength = wesco / needleStitch;

    // Display the result for stitch length
    document.getElementById('stitchLengthResult').innerText = stitchLength.toFixed(4);
});
