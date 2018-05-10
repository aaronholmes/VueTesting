import { mount } from 'vue-test-utils';
import expect from 'expect';

import CouponCode from '../src/components/CouponCode.vue';

describe('Coupon Code', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(CouponCode);

        // Mock out data so not dependant on couponCode / data source
        wrapper.setData({
            coupons: [
                {
                    code: "moofasa",
                    message: "50% off",
                    discount: 50
                },
                {
                    code: "25off",
                    message: "25% off",
                    discount: 25
                },
            ]
        });
    })

    it ('accepts a coupon code', () => {
        expect(wrapper.contains('input.coupon-code')).toBe(true);
    });

    it ('validates correct user provided coupon', () => {
        enterCouponCode('moofasa');

        expect(wrapper.html()).toContain('50% off');
    });

    it ('invalidates incorrect user provided coupon', () => {
        enterCouponCode('nogood');

        expect(wrapper.html()).toContain('Invalid coupon code');
    });

    it ('broadcasts percentage discount when valid coupon supplied', () => {
        // 1. Drive test through UI
        enterCouponCode('moofasa');

        // 2. Or set data and call method directly

        //wrapper.setData({
        //    code:'moofasa'
        //});

        //wrapper.vm.validate();

        expect(wrapper.emitted().applied).toBeTruthy();
        expect(wrapper.emitted().applied[0]).toEqual([50]);
    });

    function enterCouponCode(code) {
        let couponCode = wrapper.find('input.coupon-code');

        couponCode.element.value = code;
        couponCode.trigger('input');
    }
});