class Interface {
    constructor() {
        this.init();
        this.listEvents = document.getElementById('result-events');
    }

    init() {
        this.getCategories();
    }

    getCategories() {
        const listaCategorias = eventbrite.getCategoriesAPI()
            .then(categories => {
                const cats = categories.categories.categories;

                const selectCategory = document.getElementById('list-categories');

                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategory.appendChild(option);

                    
                });
            })
    }

    getEvents(eventos){

        this.clearResults();

        const listEvents = eventos.events;
        
        listEvents.forEach(event => {
            let description = '';
            if (event.description.text != null) {
                description = event.description.text;
            }  else {
                description = '';
            }

            this.listEvents.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">                        
                        <img class="img-fluid mb-2" src="${event.logo !=null ? event.logo.url : ''}">                        
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${event.name.text}</h2>
                                <p class="lead text-info">Info event</p>                          
                                <p>${description.substring(0,200)}...</p>
                                <span class="badge badge-primary">Capacity: ${event.capacity}</span>
                                <span class="badge badge-secondary">Date / Hour: ${event.start.local}</span>
                                <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Buy tickect</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
    }

    clearResults() {
        this.listEvents.innerHTML = '';
    }

    showMessage(msg, cls) {
        const div = document.createElement('div');
        div.classList = cls;

        div.appendChild(document.createTextNode(msg));

        const searchDiv = document.querySelector('#search');
        searchDiv.appendChild(div);

        setTimeout(() =>{
            this.clearMessage();
        }, 3000);

    }

    clearMessage() {
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}