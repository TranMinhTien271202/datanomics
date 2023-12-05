<script setup>
const Pantmentabs = [
    {
        label: "Credit Card",
        isActivated: true
    },
    {
        label: "Tiền mặt",
        isActivated: false
    },
    {
        label: "Chuyển khoản",
        isActivated: false
    }
];
const stepCurrent = ref(0);
function nextStep(index) {
    stepCurrent.value = index;
    Pantmentabs.forEach((tab, i) => {
        if (i === index) {
            tab.isActivated = true;
        } else {
            tab.isActivated = false;
        }
    });
};
const inputValue = ref("");
const email = ref("");
const name = ref("");
const phone = ref("");
const cardNumber = ref("");
const cardHolderName = ref("");
const cvc = ref("");
const errorMessage = ref("");

function handleInput(event) {
    let inputValue = event.target.value;

    // Remove all characters that are not numbers or '/'
    inputValue = inputValue.replace(/[^0-9/]/g, '');

    // Limit the total length to 5 characters (MM/YY)
    if (inputValue.length > 5) {
        inputValue = inputValue.slice(0, 5);
    }

    // Check for MM/YY format (2 characters / 2 characters)
    const match = inputValue.match(/^(\d{0,2})\/?(\d{0,2})$/);
    if (match) {
        const MM = match[1];
        const YY = match[2];

        // Check if MM and YY are valid
        if (MM && YY) {
            const MMNumber = parseInt(MM, 10);
            const YYNumber = parseInt(YY, 10);

            // MM must be between 01 and 12, YY between 00 and 99
            if (MMNumber >= 1 && MMNumber <= 12 && YYNumber >= 0 && YYNumber <= 99) {
                inputValue = MM + '/' + YY;

                // Reset the error message if the input is valid
                errorMessage.value = "";
            } else {
                // Set an error message if MM or YY is invalid
                errorMessage.value = "Tháng hoặc năm không hợp lệ.";
                inputValue = '';
            }
        } else {
            // Create a formatted string "MM/YY" if both MM and YY exist
            if (MM) {
                inputValue = MM;
            }
            if (YY) {
                inputValue += '/' + YY;
            }

            // Reset the error message if both MM and YY are missing
            errorMessage.value = "";
        }
    } else {
        // Set an error message if the format is invalid
        errorMessage.value = "Invalid format. Please use MM/YY.";
        inputValue = '';
    }

    // Update the input value
    event.target.value = inputValue;
}
const nameError = ref("");
function validateName() {
    nameError.value = '';
    if (!name.value.trim()) {
        nameError.value = 'Họ và tên không được để trống.';
    } else if (!/^[a-zA-Z\s]+$/.test(name.value)) {
        nameError.value = 'Họ và tên vui lòng viết hoa không dấu.';
    }
}
const emailError = ref("");
function validateEmail() {
    emailError.value = '';
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
        emailError.value = 'Địa chỉ email không hợp lệ.';
    }
}
const phoneError = ref("");
function validatePhone() {
    phoneError.value = '';
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        phoneError.value = 'Số điện thoại không hợp lệ (10 chữ số).';
    }
}
const cardNumberError = ref('');
function validateCardNumber() {
    cardNumberError.value = '';
    const cardNumberPattern = /^[0-9]{16}$/;
    if (!cardNumberPattern.test(cardNumber.value)) {
        cardNumberError.value = 'Số thẻ không hợp lệ (16 chữ số).';
    }
}
const cardHolderNameError = ref('');
function validateCardHolderName() {
    cardHolderNameError.value = '';
    if (!cardHolder.value.trim()) {
        cardHolderNameError.value = 'Tên chủ thẻ là bắt buộc.';
    }
}
const cvcError = ref('');
function validateCVC() {
    cvcError.value = '';
    const cvcPattern = /^[0-9]{3}$/;
    if (!cvcPattern.test(cvc.value)) {
        cvcError.value = 'CVC không hợp lệ (3 chữ số).';
    }
}
</script>
<template>
    <div class="flex flex-wrap">
        <div v-for="(item, index) in Pantmentabs" :key="index" @click="nextStep(index)">
            <button class="w-fit h-[60px] m-[12px] border-2 bg-[#ffffff] text-[16px] max-lg:text-[12px] max-lg:h-[45px] font-[600]"
                :class="{ 'border-[#ED7F22]': item.isActivated, 'border-[#F5F5F5]': !item.isActivated }">{{
                    item.label }}</button>
        </div>
    </div>
    <section v-show="stepCurrent === 0">
        <div class="mt-[30px]">
            <div class="mt-[10px]">
                <label class="block mb-2 ">Họ và tên<span class="text-[red]">*</span></label>
                <input
                    class="appearance-none border-2 w-full rounded-[12px] p-4 leading-tight focus:outline-none focus:border-[#ED7F22]"
                    type="text" v-model="name" @input="validateName" placeholder="Mời nhập họ và tên">
                <p class="error-message" v-if="nameError">{{ nameError }}</p>
            </div>
            <div class="mt-[10px]">
                <label class="block mb-2 ">Số điện thoại<span class="text-[red]">*</span></label>
                <input
                    class="appearance-none border-2 w-full rounded-[12px] p-4 leading-tight focus:outline-none focus:border-[#ED7F22]"
                    type="text" v-model="phone" @input="validatePhone" placeholder="Mời nhập số điện thoại">
                <p class="error-message" v-if="phoneError">{{ phoneError }}</p>
            </div>
            <div class="mt-[10px]">
                <label class="block mb-2 ">Email<span class="text-[red]">*</span></label>
                <input
                    class="appearance-none border-2 w-full rounded-[12px] p-4 leading-tight focus:outline-none focus:border-[#ED7F22]"
                    type="text" v-model="email" @input="validateEmail" placeholder="Mời nhập Email">
                <p class="error-message" v-if="emailError">{{ emailError }}</p>
            </div>
            <div class="mt-[10px] py-[15px] flex flex-wrap justify-between items-center">
                <div class="flex-1">
                    <p class="text-[16px] text-[#000000]">Credit Card</p>
                </div>
                <div class="flex-1 flex flex-wrap justify-end">
                    <div class="mx-[10px]"><img src="/images/Visa.png" alt=""></div>
                    <div class="mx-[10px]"><img src="/images/master.png" alt=""></div>
                </div>
            </div>
            <div class="mt-[10px]">
                <label class="block mb-2 ">Số thẻ<span class="text-[red]">*</span></label>
                <input
                    class="appearance-none border-2 w-full rounded-[12px] p-4 leading-tight focus:outline-none focus:border-[#ED7F22]"
                    type="text" id="cardNumber" v-model="cardNumber" @input="validateCardNumber"
                    placeholder="Mời nhập số thẻ">
                <p class="error-message" v-if="cardNumberError">{{ cardNumberError }}</p>
            </div>
            <div class="mt-[10px]">
                <label class="block mb-2 ">Họ và tên chủ thẻ<span class="text-[red]">*</span></label>
                <input
                    class="appearance-none border-2 w-full rounded-[12px] p-4 leading-tight focus:outline-none focus:border-[#ED7F22]"
                    type="text" id="cardHolderName" v-model="cardHolderName" @input="validateCardHolderName"
                    placeholder="Mời nhập họ và tên chủ thẻ">
                <p class="error-message" v-if="cardHolderNameError">{{ cardHolderNameError }}</p>
            </div>
            <div class="mt-[10px] flex flex-wrap">
                <div class="flex-1 mr-[10px]">
                    <label class="block mb-2 ">Ngày hêt hạn<span class="text-[red]">*</span></label>
                    <input type="text" id="custom-month-input" name="custom-month-input"
                        class="appearance-none border-2 w-full rounded-[12px] p-4 leading-tight focus:outline-none focus:border-[#ED7F22]"
                        v-model="inputValue" @input="handleInput" placeholder="MM/YY">
                    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
                </div>
                <div class="flex-1 ml-[10px]">
                    <label class="block mb-2 ">CVC<span class="text-[red]">*</span></label>
                    <input
                        class="appearance-none border-2 w-full rounded-[12px] p-4 leading-tight focus:outline-none focus:border-[#ED7F22]"
                        type="text" id="cvc" v-model="cvc" @input="validateCVC" placeholder="Mời nhập CVC">
                    <p class="error-message" v-if="cvcError">{{ cvcError }}</p>
                </div>
            </div>
        </div>
        <div class="text-right my-[25px]">
            <button class="border-none bg-[#ED7F22] text-[#ffffff]">Thanh toán</button>
        </div>
        <p class="my-[10px]">“Nhân viên của MIRAWAY sẽ gọi lại bạn trong vòng 24h để xác nhận thanh toán và giải đáp các
            thắc mắc của bạn”</p>
        <p class="my-[10px]">Hỗ trợ: Nếu bạn gặp bất kỳ các vấn đề gì vui lòng liên hệ với chúng tôi thông qua số Hotline
            sau: <span class="text-[#ED7F22]">0969 059
                786</span>
        </p>
    </section>
    <section v-show="stepCurrent === 1">
        <div class="py-[10px]">
            <p class="text-[16px] font-[600] my-[5px] text-[#000000]">Cơ sở Hà Nội</p>
            <span>Bạn có thể đến thanh toán tiền trực tiếp tại Văn phòng MIRAWAY, Tầng 4 - Tòa nhà GTC, Số 69, phố Tố Hữu,
                Vạn Phúc, Hà Đông, Hà Nội. Văn phòng làm việc từ 8h30 sáng đến 7h tối từ thứ 2 đến thứ 6 hàng tuần.</span>
        </div>
        <div class="py-[10px]">
            <p class="text-[16px] font-[600] my-[5px] text-[#000000]">Cơ sở Tp. Hồ Chí Minh</p>
            <span>Bạn có thể đến thanh toán tiền trực tiếp tại Văn phòng MIRAWAY, Tầng 4 - Tòa nhà GTC, Số 69, phố Tố Hữu,
                Vạn Phúc, Hà Đông, Hà Nội. Văn phòng làm việc từ 8h30 sáng đến 7h tối từ thứ 2 đến thứ 6 hàng tuần.</span>
        </div>
        <p class="py-[10px]">Hỗ trợ: Nếu bạn gặp bất kỳ các vấn đề gì vui lòng liên hệ với chúng tôi thông qua số Hotline
            sau: <span class="#ED7F22">0969 059 786</span></p>
    </section>
    <section v-show="stepCurrent === 2">
        <p>Sử dụng thiết bị của bạn thực hiện quét mã QR hoặc chuyển tiển nhanh đến số tài khoản ngân hàng bên dưới. Trong
            24h nhân viên của MIRAWAY sẽ liên hệ xác nhận với bạn</p>
        <div class="flex flex-wrap justify-center my-[20px]">
            <div class="flex-1"><img src="/images/qr-banking.png" alt=""></div>
            <div class="flex-1">
                <p>-Ngân hàng:<span>Mbbank</span></p>
                <p>-Người nhận:<span>...</span></p>
                <p>-Số tài khoản:<span>...</span></p>
                <p>-Nội dung:<span>...</span></p>
            </div>
        </div>
        <p class="py-[5px]">“Nhân viên của MIRAWAY sẽ gọi lại bạn trong vòng 24h để xác nhận thanh toán và giải đáp các thắc
            mắc của bạn”</p>
        <p class="py-[5px]">Hỗ trợ: Nếu bạn gặp bất kỳ các vấn đề gì vui lòng liên hệ với chúng tôi thông qua số Hotline
            sau: <span class="text-[#ED7F22]">0969 059 786</span>
        </p>
    </section>
</template>
