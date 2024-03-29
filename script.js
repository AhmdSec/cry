document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('editor');
    const saveBtn = document.getElementById('saveBtn');

    saveBtn.addEventListener('click', function() {
        const text = editor.innerText;
        downloadTextFile(text);
    });

    function downloadTextFile(text) {
        const fileName = 'saved_text_' + Date.now() + '.bat';
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    }
});