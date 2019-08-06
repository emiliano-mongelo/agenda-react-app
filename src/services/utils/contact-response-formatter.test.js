import contactResponseFormatter from './contact-response-formatter';

describe('contactResponseFormatter', () => {
  test('should return a formatted contact', () => {
    const payload = {
      id: 1,
      title: 'Create App',
      description: 'Create app with Vue.js',
      status: 'open',
      author: 'Emiliano Mongelo',
      assignee: 'Emiliano Mongelo',
      createdDate: 1563560545000,
      updatedDate: 1563560545000,
      labels: [{ id: 1, title: 'story', color: '#FF00FF' }]
    };

    expect(contactResponseFormatter(payload)).toEqual(
      expect.objectContaining({
        id: 1,
        title: 'Create App',
        description: 'Create app with Vue.js',
        status: 'open',
        author: 'Emiliano Mongelo',
        assignee: 'Emiliano Mongelo'
      })
    );
  });
});
