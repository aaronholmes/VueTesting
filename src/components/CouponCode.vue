<template>
    <div>
        <input type="text" class="coupon-code" v-model="code" @input="validate">
        <p v-if="valid">
            Coupon redeemed: {{ message }}
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
                        code: "moofasa",
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
          message() {
            return this.coupons.find(coupon => coupon.code == this.code).message;
          }
        },
        methods: {
            validate() {
                // Get real coupon codes from server, hardcoded for sample
                this.valid = this.coupons.map(coupon => coupon.code).includes(this.code);

                if (this.valid) {
                    let code = this.coupons.find(coupon => coupon.code === this.code);
                    this.$emit('applied', code.discount);
                }
            }
        }
    }
</script>