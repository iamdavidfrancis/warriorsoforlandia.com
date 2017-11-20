export class Constants {
  public static Instance = new Constants();

  public siteTitle = 'Warriors of Orlandia';

  public cache = {
    useCache: false,
    defaultExpires: 86400, // 24 hours
    oneWeekExpires: 86400 * 7,
  };

  public cards = {
    performEmptySearch: true,
  };

  public http = {
    baseUrl: 'https://api.warriorsoforlandia.com/api/',
    staticsBaseUrl: 'https://statics.warriorsoforlandia.com/',
    cards: {
      search: 'cards/search',
      get: 'cards/{id}',
      types: 'cards/types',
      sets: 'cards/sets',
      image: 'warriors/cards/{{setYear}}/{{type}}/{{name}}.png',
      thumbnail: 'warriors/cards/{{setYear}}/{{type}}/{{name}}-thumb.png',
    }
  };
}
