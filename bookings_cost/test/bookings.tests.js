describe('this is a bookingCost function' , function(){
    it('should return the cost booking for Wednesday ' , function(){
        assert.equal(101.25, bookingCost({
            check_in_day: 'Wednesday',
            duration: 3,
            cat_name : 'Snowy'
          }));
        })
    it('should return the cost booking for Friday', function(){
        assert.equal(114.75, bookingCost({
            check_in_day: 'Friday',
            duration: 3,
            cat_name : 'Snowy'
          }))
    });
    it('should return the cost booking for any day except for Friday and Wednesday', function(){
        assert.equal(135.00, bookingCost({
            check_in_day: 'Monday',
            duration: 3,
            cat_name : 'Snowy'
          }))
    })
    
});
