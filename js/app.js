const eventbrite = new EventBrite();
const ui = new Interface();


document.getElementById('searchBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const textSearch = document.getElementById('event').value;

    const categories = document.getElementById('list-categories');
    const categorySelected = categories.options[categories.selectedIndex].value;

    if (textSearch !== '') {
        eventbrite.getEventsAPI(textSearch, categorySelected)
            .then(events => {
                if (events.events.events.length > 0) {


                    ui.getEvents(events.events);
                } else {
                    ui.showMessage('No results', 'alert alert-danger mt-4')
                }
            })
    } else {
        ui.showMessage('All fields are required', 'alert alert-danger mt-4');
    }
    


})