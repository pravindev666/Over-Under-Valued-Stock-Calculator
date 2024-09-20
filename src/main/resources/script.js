function calculatePEG() {
    const peRatio = parseFloat(document.getElementById('peRatio').value);
    const epsGrowth = parseFloat(document.getElementById('epsGrowth').value);

    if (isNaN(peRatio) || isNaN(epsGrowth) || epsGrowth === 0) {
        document.getElementById('pegRatio').innerText = 'Please enter valid numbers.';
        document.getElementById('valuation').innerText = '';
        return;
    }

    const pegRatio = peRatio / epsGrowth;
    document.getElementById('pegRatio').innerText = `Price/Earnings to Growth (PEG) Ratio: ${pegRatio.toFixed(2)}`;

    let valuationText = '';
    if (pegRatio === 1) {
        valuationText = 'Fair Value Stock';
    } else if (pegRatio < 1) {
        valuationText = 'Under Valued Stock';
    } else {
        valuationText = 'Over Valued Stock';
    }
    document.getElementById('valuation').innerText = valuationText;
}
