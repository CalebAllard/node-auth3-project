const User = require('./users-model.js');
const db = require('../data/db-config.js');

describe('users model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    
    
   
    
})
