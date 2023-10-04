const dateInput = document.getElementById('date');

flatpickr(dateInput, {
    enableTime: true, 
    dateFormat: "Y-m-d H:i", 
    time_24hr: true, 
    placeholder: "Choose date*", 
    onClose: function(selectedDates, dateStr, instance) {
        dateInput.value = dateStr;
    }
});