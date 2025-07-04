// Placeholder for Google Apps Script form submission
// To use:
// 1. Create a new Google Apps Script project linked to a Google Sheet.
// 2. Implement a doPost(e) function to capture form data and store it in the sheet.
// 3. Deploy the script as a web app and copy the URL.
// 4. Replace FORM_SCRIPT_URL below with your web app URL.
// Example Apps Script code:
// function doPost(e) {
//     var sheet = SpreadsheetApp.getActiveSheet();
//     sheet.appendRow([e.parameter.name, e.parameter.email, e.parameter.message, new Date()]);
//     MailApp.sendEmail('your@email.com', 'New Portfolio Message', e.parameter.message);
//     return ContentService.createTextOutput('success');
// }

const FORM_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
        await fetch(FORM_SCRIPT_URL, { method: 'POST', body: formData });
        alert('Message sent!');
        e.target.reset();
    } catch (err) {
        alert('Failed to send message');
    }
});
