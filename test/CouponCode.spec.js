import { mount } from 'vue-test-utils';
import expect from 'expect';

import { CouponCode } from '../src/components/CouponCode.vue';

describe('Coupon Code', () => {
   it ('accepts a coupon code', () => {
        let wrapper = mount(CouponCode);

        expect(wrapper.contains('input.coupon-code')).toBe(true);
   });
});