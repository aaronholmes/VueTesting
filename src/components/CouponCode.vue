<template>
    <div>
        <input type="text" class="coupon-code" v-model="code" @input="validate">
        <p v-if="valid">
            Coupon redeemed: {{ message }}
        </p>
        <p v-else>
            Invalid coupon code
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                code: '',
                coupons: [
                    {
                        code: "50off",
                        message: "50% off",
                        discount: 50
                    },
                    {
                        code: "25off",
                        message: "25% off",
                        discount: 25
                    },
                ],
                valid: false
            }
        },
        computed:{
            selectedCoupon()    {
                return this.coupons.find(coupon => coupon.code == this.code);
            },
            message() {
                return (this.selectedCoupon) ? this.selectedCoupon.message : '';
            }
        },
        methods: {
            validate() {
                // Get real coupon codes from server, hardcoded for sample
                this.valid = !! this.selectedCoupon;

                if (this.valid) {
                    this.$emit('applied', this.selectedCoupon.discount);
                }
            }
        }
    }
</script>