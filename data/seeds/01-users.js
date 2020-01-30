
exports.seed = function(knex, Promise) {
   return knex('users').insert([
        {id: 1, username: 'John Doe', department: 'finance'},
        {id: 2, username: 'Caleb Allard', department: 'Accounting'},
        {id: 3, username: 'Jane Cook', department: 'HR'},
        {id: 4, username: 'Mike lee', department: 'finance'},
        {id: 5, username: 'Yung Bing', department: 'Accounting'},
        {id: 6, username: 'Jo Star', department: 'finance'},
        {id: 7, username: 'Bart Simposon', department: 'HR'},
        {id: 8, username: 'Harry Potter', department: 'finance'}
        
      ]);
    
};
