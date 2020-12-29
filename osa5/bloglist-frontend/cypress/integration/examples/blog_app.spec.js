const user = {
  name: 'Testi testaaja',
  username: 'tester',
  password: 'salainen'
}

const blog = {
  title: 'testiblogi',
  author: 'testeri',
  url: 'testiUrl'
}

describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })
  it('Login form is shown', function() {
    cy.get('button').contains('login')
    cy.get('#username')
    cy.get('#password')
    cy.get('#login-button')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type(user.username)
      cy.get('#password').type(user.password)
      cy.get('#login-button').click()
      cy.contains('Testi testaaja logged in')
    })

    it('fails with wrong credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('wrong')
      cy.get('#password').type('wrong')
      cy.get('#login-button').click()
      cy.contains('Wrong username or password')
      cy.get('html').should('not.contain', 'logged in')
    })
  })
  describe.only('When logged in', function() {
    beforeEach(function() {
      cy.contains('login').click()
      cy.get('input:first').type(user.username)
      cy.get('input:last').type(user.password)
      cy.get('#login-button').click()
    })

    it('A blog can be created', function() {
      cy.contains('add new').click()
      cy.get('#title').type(blog.title)
      cy.get('#author').type(blog.author)
      cy.get('#URL').type(blog.url)
      cy.get('#save').click()

      cy.contains(blog.title)
      cy.contains(blog.author)
    })

    it('blog can be deleted', function() {
      cy.contains('add new').click()
      cy.get('#title').type(blog.title)
      cy.get('#author').type(blog.author)
      cy.get('#URL').type(blog.url)
      cy.get('#save').click()

      cy.contains(blog.title).contains('remove').click()
      cy.get('html').should('not.contain', blog.title)
    })
  })
})