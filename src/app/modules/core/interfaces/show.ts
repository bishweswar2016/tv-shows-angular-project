export interface ShowList {
  [index: number]: Show;
}
export interface Show {
    	id: number;
      	url: string;
        name: string;
      	type: string;
        language: string;
        genres:{};
        status: string;
        runtime: number;
        averageRuntime: number;
        premiered: string;
        ended: string;
        officialSite: {};
        schedule: {};
        weight: number;
        rating: {};
        network: {};
        webChannel: string;
        dvdCountry: string;
        externals: {};
        image: {};
        summary: string;
        updated: number;
        _links: {};
}