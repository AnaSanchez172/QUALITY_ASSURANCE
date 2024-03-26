it('Registro de usuario nuevo', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup',
      body: {
        username: 'AnaSanchez5',
        password: '987654321',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

it('Registro de usuario existente', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup',
      body: {
        username: 'AnaSanchez5',
        password: '987654321',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.errorMessage).to.equal('This user already exist.');
    });
  });

  it('login contrasena incorrecta', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      body: {
        username: 'AnaSanchez5',
        password: '00000000',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.errorMessage).to.equal('Wrong password.');
    });
  });

  it('login contrasena correcta', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      body: {
        username: 'AnaSanchez5',
        password: '987654321',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });