document.getElementById('fileInput').addEventListener('change', function() {
    const fileList = document.getElementById('fileInput').files;
    if (fileList.length > 0) {
        const file = fileList[0];
        const url = URL.createObjectURL(file);
        document.getElementById('downloadBtn').setAttribute('href', url);
        document.getElementById('downloadBtn').style.display = 'inline-block'; // Show the download button
    } else {
        document.getElementById('downloadBtn').style.display = 'none'; // Hide the download button if no file is selected
    }
});

// Detect device type for responsive design
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Styles for mobile devices
    document.body.style.fontSize = '14px';
} else {
    // Styles for desktop devices
    document.body.style.fontSize = '16px';
}
