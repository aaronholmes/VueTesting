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
        // 1. Drive test through UI
        //let couponCode = wrapper.find('input.coupon-code');

        //couponCode.element.value = 'moofasa';
        //couponCode.trigger('input');

        // 2. Or set data and call method directly

        wrapper.setData({
            code:'moofasa'
        });

        wrapper.vm.validate();

        expect(wrapper.emitted().applied).toBeTruthy();
        expect(wrapper.emitted().applied[0]).toEqual([50]);
    });
});