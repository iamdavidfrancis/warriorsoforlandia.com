export class Constants {
  public static Instance = new Constants();

  public cache = {
    useCache: true,
    defaultExpires: 86400, // 24 hours
    oneWeekExpires: 86400 * 7,
  };

  public http = {
    baseUrl: 'http://localhost:65367/api/',
    staticsBaseUrl: 'http://statics.warriorsoforlandia.com/',
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
