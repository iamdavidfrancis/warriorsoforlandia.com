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

  public restrictedLists = {
    namedWarriors: [
      { name: 'Aconite', id: 'c9a76938-2cac-434a-aff7-4cc242002c35'},
      { name: 'Cyrus', id: '656c16b7-db84-4422-a46c-95d87f7e7d1b'},
      { name: 'Hemlock', id: 'aba9ee45-eec8-4532-8ca7-00535a446749'},
      { name: 'Kuma', id: '0a43af88-e5d5-4551-a45f-294c148bccfa'},
      { name: 'Pothos', id: '877ce745-3077-44f2-a1b3-8b36b6b44677'},
      { name: 'Quothe', id: '95c323b5-ade9-4276-b453-dd0d1ad32594'},
      { name: 'Shiro, the White Raven', id: 'a5eb30ef-2a31-43ba-af9a-ebf8959b94ba'},
      { name: 'Ussuri', id: '34a66206-de3e-479a-8788-4b6f2c23c54b'},
      { name: 'Wisteria', id: 'ac271165-7b7a-4f2c-99f3-99d4c939c073'}
    ],
    singletonCards: [
      { name: 'Amidamaru\'s Sacrifice', id: 'c35c4fc4-322d-4e4f-af2d-2cf41abad857'},
      { name: 'Blade of the Last Wolf', id: 'b46eada6-c2a1-4974-b124-002f57c36fb1'},
      { name: 'Blink Stone', id: 'dc37574a-e929-4cbc-b771-d68676eae345'},
      { name: 'Consuming Quest: Adventure', id: '0459d6f1-f29a-49a4-a4e7-d6f270047902'},
      { name: 'Consuming Quest: Greed', id: 'feab1053-0a1b-4a90-bed6-b9008d70c5c5'},
      { name: 'Flesh Puppet', id: '4e89c6ee-1d88-4b45-a807-8b0702385cbb'},
      { name: 'Guardian Gauntlet', id: '305a955a-c39c-4261-945a-239017cb1776'},
      { name: 'Haste', id: '607d9fdb-3ac4-4b85-a251-8a07df5cd80c'},
      { name: 'Phase Boots', id: '29ad0a4a-8e1f-462c-9916-7d2f04b5b27f'},
      { name: 'Roboticist', id: 'da492430-b6f7-4f76-8c56-677043b678d3'},
      { name: 'Spellbook', id: '44d4c4d0-3a27-4c76-a48f-235a08ec4e52'},
      { name: 'Talon of the Cursed King', id: '2d04c4df-68ac-442e-8d64-bf48f0d6e6d0' },
      { name: 'Time Egg', id: '77375d92-5a2e-40f9-9c44-683441842158'},
      { name: 'Turning Point: Tragic Loss', id: 'fcc394f4-7f1f-49f3-ad8c-14af65a9219a'},
      { name: 'Turning Point: Triumphant Victory ', id: 'f8f18f3c-a24a-4bd8-836a-06b1d8d22cac'}
    ]
  };
}
