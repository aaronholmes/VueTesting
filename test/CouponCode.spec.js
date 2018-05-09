import { mount } from 'vue-test-utils';
import expect from 'expect';

import CouponCode from '../src/components/CouponCode.vue';

describe('Coupon Code', () => {
   it ('accepts a coupon code', () => {
        let wrapper = mount(CouponCode);

        expect(wrapper.contains('input.coupon-code')).toBe(true);
   });

    it ('validates user provided coupon', () => {
        let wrapper = mount(CouponCode);

        let couponCode = wrapper.find('input.coupon-code');

        couponCode.element.value = 'moofasa';
        couponCode.trigger('input');

        expect(wrapper.html()).toContain('50% off');
    });
});