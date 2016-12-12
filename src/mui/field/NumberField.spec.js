import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import NumberField from './NumberField';

describe('<NumberField />', () => {
    it('should return null when the record is not set', () => assert.equal(
        shallow(<NumberField source="foo" />).html(),
        null,
    ));

    it('should render a number', () => assert.equal(
        shallow(<NumberField record={{ foo: 1 }} source="foo" />).html(),
        '<span>1</span>',
    ));

    it('should render as many decimals as set in the decimals prop', () => assert.equal(
        shallow(<NumberField record={{ foo: 1 }} source="foo" decimals={2} />).html(),
        '<span>1.00</span>',
    ));

    it('should prepend prefix prop', () => assert.equal(
        shallow(<NumberField record={{ foo: 1 }} source="foo" prefix="$" />).html(),
        '<span>$1</span>',
    ));

    it('should append sufffix prop', () => assert.equal(
        shallow(<NumberField record={{ foo: 1 }} source="foo" suffix="€" />).html(),
        '<span>1€</span>',
    ));

    it('should use custom styles passed as an elStyle prop', () => assert.equal(
        shallow(<NumberField record={{ foo: 1 }} source="foo" elStyle={{ margin: 1 }} />).html(),
        '<span style="margin:1px;">1</span>',
    ));

    it('should handle deep fields', () => assert.equal(
        shallow(<NumberField record={{ foo: { bar: 2 } }} source="foo.bar" />).html(),
        '<span>2</span>',
    ));
});
