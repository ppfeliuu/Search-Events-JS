class EventBrite {
    constructor() {
        this.token_auth = '';
    }

    async getEventsAPI(event, category) {
        const resEvent = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=date&categories=${category}&token=${this.token_auth}`)
        
        const events = await resEvent.json();

        return {
            events
        }
    }

    async getCategoriesAPI() {
        const resCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        const categories = await resCategories.json();


        return { categories }
    }
}