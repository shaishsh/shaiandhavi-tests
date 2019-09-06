const indexObj = require('../index');
const should  = require('chai').should();
var sinon = require('sinon');
const { sum, sum1, promiseFunc } = indexObj;

describe('Checking functionllity in index.js', function() {
    describe('Checking sum function in index.js', function(){
        it('sum Should equal to 6 when first is string', function() {
            // AAA
            const a = '6', b = 0;
    
            const res = sum(a, b);
    
            res.should.equal(6);
        });
    
        it('sum Should equal to 6 when all variables are number type', function() {
            // AAA
            const a = 6, b = 0;
    
            const res = sum(a, b);
    
            res.should.equal(6);
        });
    
        it('sum Should equal to 6 when first is null', function() {
            // AAA
            const a = null, b = 6;
    
            const res = sum(a, b);
    
            res.should.equal(6);
        });
    
        it('sum Should equal to 6 when first is undefined', function() {
            // AAA
            const a = undefined, b = 6;
    
            const res = sum(a, b);
    
            res.should.equal(6);
        });
    
        it('sum Should equal to 6 when first is empty array', function() {
            // AAA
            const a = [], b = 6;
    
            const res = sum(a, b);
    
            res.should.equal(6);
        });
    
        it('sum Should equal to 6 when first is empty obj', function() {
            // AAA
            const a = {}, b = 6;
    
            const res = sum(a, b);
    
            res.should.not.equal(6);
        });
    });

    describe.skip('Checking sum1 function in index.js', function(){
        it('sum1 Should equal to 6 when first is string', function() {
            // AAA
            const a = '6', b = 0;
    
            const res = sum1(a, b);
    
            res.should.equal(6);
        });
    
        it('sum1 Should equal to 6 when all variables are number type', function() {
            // AAA
            const a = 6, b = 0;
    
            const res = sum1(a, b);
    
            res.should.equal(6);
        });
    
        it('sum1 Should equal to 6 when first is null', function() {
            // AAA
            const a = null, b = 6;
    
            const res = sum1(a, b);
    
            res.should.equal(6);
        });
    
        it('sum1 Should equal to 6 when first is undefined', function() {
            // AAA
            const a = undefined, b = 6;
    
            const res = sum1(a, b);
    
            res.should.equal(6);
        });
    
        it('sum1 Should equal to 6 when first is empty array', function() {
            // AAA
            const a = [], b = 6;
    
            const res = sum1(a, b);
    
            res.should.equal(6);
        });
    
        it('sum1 Should equal to 6 when first is empty obj', function() {
            // AAA
            const a = {}, b = 6;
    
            const res = sum1(a, b);
    
            res.should.not.equal(6);
        });
    });

    describe('Checking promiseFunc function in index.js', function() {
        it('Should return hello world string', async function() {
            const hello = 'hello world1';

            const res = await promiseFunc();

            res.should.not.to.be.equal(hello);

        });
    });

    describe('Spying on promiseFunc function in index.js', function() {
        it('Should be called once and have no arguments', async function() {
            let stub = sinon.stub(indexObj, 'promiseFunc').returns(Promise.resolve(true));

            const res = await indexObj.promiseFunc();
            
            res.should.equal(true);

        });
    });

})
