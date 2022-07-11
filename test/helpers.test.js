const assert = require('assert');
const { format_date, format_plural, format_url } = require('../utils/helpers');

describe('Helpers', function () {
    it('format_url() returns a simplified url string', function() {
        let result = format_url('https://www.coolstuff.com/abcdefg/');
        assert.equal(result, 'coolstuff.com');
    });

    it('format_plural() returns a pluralized word', function() {
        let word1 =  format_plural('tiger', 1);
        let word2 = format_plural('lion', 2);

        assert.equal(word1, 'tiger');
        assert.equal(word2, 'lions');
    });

    it('format_date() returns a date string', function() {
        let date = format_date('2020-03-20 16:12:03');
        assert.equal(date, '3/20/2020');
    })
})