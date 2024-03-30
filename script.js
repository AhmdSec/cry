document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('editor');
    const downloadBtn = document.getElementById('downloadBtn');
    const fileTypeSelect = document.getElementById('fileType');

    downloadBtn.addEventListener('click', function() {
        const text = editor.innerText;
        const selectedFileType = fileTypeSelect.value;
        downloadTextFile(text, selectedFileType);
    });

    function downloadTextFile(text, fileType) {
        const fileName = generateRandomFileName() + '.' + fileType;
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(link.href);
    }

    function generateRandomFileName() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
});
