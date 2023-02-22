export default class localStorageMock {
  constructor() {
    this.store = {
      ranking: [
        {
          name: 'heto',
          score: 40,
          picture: 'https://www.gravatar.com/avatar/a2b512c71c7be8132878b934a6dbc682',
        },
        {
          name: 'perero',
          score: 60,
          picture: 'https://www.gravatar.com/avatar/a2b512c71c7be8132878b934a6dbc682',
        },
        {
          name: 'xisde',
          score: 80,
          picture: 'https://www.gravatar.com/avatar/a2b512c71c7be8132878b934a6dbc682',
        },
      ],
			settings: {
				category: 9,
				difficulty: '',
				type: '',
			}
    };
  }
  clear = () => {
    this.store = {};
  }
  getItem (key) {
    return JSON.stringify(this.store[key]) || null;
  }
  setItem = (value, key) => {
    this.store[key] = value;
  }
  removeItem = (key) => {
    delete this.store[key];
  }
  disgrasa = () => {
    return 'disgrasa';
  }
}
