import { mount } from 'vue-test-utils';
import expect from 'expect';

import CouponCode from '../src/components/CouponCode.vue';

describe('Coupon Code', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(CouponCode);
    })

    it ('accepts a coupon code', () => {
        expect(wrapper.contains('input.coupon-code')).toBe(true);
    });

    it ('validates user provided coupon', () => {
        let couponCode = wrapper.find('input.coupon-code');

        couponCode.element.value = 'moofasa';
        couponCode.trigger('input');

        expect(wrapper.html()).toContain('50% off');
    });

    it ('broadcasts percentage discount when valid coupon supplied', () => {
        let couponCode = wrapper.find('input.coupon-code');

        couponCode.element.value = 'moofasa';
        couponCode.trigger('input');

        expect(wrapper.emitted().applied).toBeTruthy();
        expect(wrapper.emitted().applied[0]).toEqual([50]);
    });
});