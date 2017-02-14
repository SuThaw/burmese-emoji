import test from 'ava';
import {transform} from '../index';

test('transform test unicode - should return apple emoji', async t => {
    try{
        const emoji = await transform('ပန်းသီး');
        t.is('🍎',emoji, 'should return apple');
    }catch(err){
        t.fail();
    }
});

test('transform test unicode - should return orange emoji', async t => {
    try{
        const emoji = await transform('လိမ္မော်သီး');
        t.is('🍊',emoji, 'should return orange')
    }catch(err){
        t.fail();
    }
});

test('transform test zawgyi - should return orange emoji', async t => {
    try{
        const emoji = await transform('ပန္းသီး');
        t.is('🍎',emoji, 'should return orange')
    }catch(err){
        t.fail();
    }
});
