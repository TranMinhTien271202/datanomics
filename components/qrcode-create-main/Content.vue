<script setup>
const imageQR1 = "/images/qrcode-create/illustrate/Illu_Creation-1.png";
const imageQR2 = "/images/qrcode-create/illustrate/Illu_TrackPerform-1.png";
const imageQR3 = "/images/qrcode-create/illustrate/Illu_Mini_Dynamic-1.png";
const imageQR4 = "/images/qrcode-create/illustrate/Illu_HQPrint-1.png";
const imageQR5 = "/images/qrcode-create/illustrate/Illu_AccountSharing-1.png";
const imageQR6 = "/images/qrcode-create/illustrate/Illu_Support-1.png";

const features = [
  {
    name: "TẠO MÃ QR",
    descriptions: [
      "Chọn từ nhiều chức năng khác nhau: từ hiển thị nút Like Facebook tương tác đến việc mã hóa danh sách giá ở định dạng PDF. Những chức năng sáng tạo này sẽ làm người dùng ngạc nhiên và thúc đẩy họ quét Mã. Trong bước tiếp theo, hãy tùy chỉnh Mã QR được tạo bằng cách chọn màu sắc và hình dạng và chèn logo công ty của bạn. Hoặc đơn giản bằng cách sử dụng một trong các mẫu thiết kế sẵn của chúng tôi.",
    ],
    imageUrl: imageQR1,
  },
  {
    name: "THEO DÕI HIỆU SUẤT CHIẾN DỊCH",
    descriptions: [
      "Chọn từ nhiều chức năng khác nhau: từ hiển thị nút Like Facebook tương tác đến việc mã hóa danh sách giá ở định dạng PDF. Những chức năng sáng tạo này sẽ làm người dùng ngạc nhiên và thúc đẩy họ quét Mã. Trong bước tiếp theo, hãy tùy chỉnh Mã QR được tạo bằng cách chọn màu sắc và hình dạng và chèn logo công ty của bạn. Hoặc đơn giản bằng cách sử dụng một trong các mẫu thiết kế sẵn của chúng tôi.",
    ],
    imageUrl: imageQR2,
  },
  {
    name: "MÃ QR ĐỘNG",
    descriptions: [
      "Với Mã QR Động, bạn có sự linh hoạt hoàn toàn, bởi vì chỉ có một URL ngắn trỏ đến nội dung được mã hóa. Vì vậy, bạn có thể sửa đổi các liên kết hoặc tệp được lưu trữ mà không phải tạo và in lại các Mã. Điều này sẽ tiết kiệm tài nguyên và cho phép bạn phản hồi với mọi thay đổi trong chiến dịch nhanh nhất có thể.",
    ],
    imageUrl: imageQR3,
  },
  {
    name: "CÁC ĐỊNH DẠNG IN CHẤT LƯỢNG CAO",
    descriptions: [
      "Bạn có thể tải xuống các Mã theo nhiều định dạng tệp pixel và vectơ: JPEG, PNG, EPS và SVG. Tất cả các tệp đều có độ phân giải cao. Chọn tùy chọn tốt nhất để in mã QR ở bất kỳ kích thước, màu sắc và trên bất kỳ phương tiện nào, mà không có sự giảm chất lượng.",
    ],
    imageUrl: imageQR4,
  },
  {
    name: "CHIA SẺ TÀI KHOẢN",
    descriptions: [
      "Tổ chức làm việc nhóm hiệu quả xung quanh các chiến dịch Mã QR với các tùy chọn chia sẻ tài khoản linh hoạt của chúng tôi. Việc mời các nhân viên khác chia sẻ tài khoản của bạn chỉ mất vài giây. Bạn có thể thêm nhiều người dùng, với tư cách là quản trị viên hoặc chỉ có quyền xem số liệu thống kê. Bằng cách này, bạn đơn giản hóa việc lập kế hoạch chiến dịch của mình và giúp việc hợp tác giữa các phòng trở nên dễ dàng hơn.",
    ],
    imageUrl: imageQR5,
  },
  {
    name: "NHẬN ĐƯỢC TRỢ GIÚP BẤT CỨ KHI NÀO BẠN CẦN",
    descriptions: [
      "Bạn có câu hỏi nào không? Hãy liên lạc với bộ phận Hỗ trợ Khách hàng thân thiện của chúng tôi qua email hoặc điện thoại. Tận dụng Trung tâm Hỗ trợ trực tuyến của chúng tôi với Câu hỏi thường gặp, Hướng dẫn và sách điện tử hướng dẫn để nhận được tư vấn và ý tưởng sáng tạo. Chúng tôi giúp bạn nổi bật hơn về Tiếp thị bằng Mã QR.",
    ],
    imageUrl: imageQR6,
  },
];
</script>

<template>
  <div>
    <BlogStory class="mt-[80px]" />

    <section class="mt-[80px]">
      <h2 class="text-center">Đăng ký các tính năng này</h2>

      <FeaturesQR :features="features" />
    </section>

    <CustomerCarousel class="mt-[80px]" />

    <div class="mt-[80px] text-center">
      <h2>Những điều bạn cần biết về Mã QR</h2>
      <div class="subtitle-2 text-third mt-4">Nhận thêm tới 173% lượt quét với bốn thủ thuật đơn giản</div>
      <div class="mt-10">
        <nuxt-picture
          loading="lazy"
          src="/images/qrcode-create/illustrate/QR-1.png"
          :img-attrs="{ alt: 'logo' }"
          class="max-sm:hidden"
        />
        <div class="sm:hidden">
          <div>
            <div class="flex">
              <div>
                <h1 class="bg-[#ED7F22] text-white w-[50px] h-[50px] pt-[10px] rounded-[50%]">1</h1>
              </div>
              <div class="pl-3">
                <h3 class="text-[#ED7F22]">KHUYẾN KHÍCH KHÁCH HÀNG</h3>
                <p class="text-left pt-3">
                  Mời người dùng tương tác với Mã của bạn bằng cách thực hiện một lời kêu gọi hành động ngắn như "Hãy
                  quét tôi" bên cạnh mã.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <div class="flex">
              <div>
                <h1 class="bg-[#ED7F22] text-white w-[50px] h-[50px] pt-[10px] rounded-[50%]">2</h1>
              </div>
              <div class="pl-3">
                <h3 class="text-[#ED7F22] pl-2">CẦN PHẢI IN LỚN BAO NHIÊU</h3>
                <p class="text-left pt-3">
                  Không có gì tệ hơn là một Mã tìm kiếm thông minh có nội dung đầy hứa hẹn không hoạt động. Hãy in với
                  chiều rộng ít nhất 2 cm và đảm bảo rằng mọi người đều có thể quét bằng bất kỳ thiết bị và ứng dụng
                  nào.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <div class="flex">
              <div>
                <h1 class="bg-[#ED7F22] text-white w-[50px] h-[50px] pt-[10px] rounded-[50%]">3</h1>
              </div>
              <div class="pl-3">
                <h3 class="text-[#ED7F22] pl-2">THIẾT KẾ MÃ QR CỦA BẠN</h3>

                <p class="text-left pt-3">
                  Việc tải lên một biểu tượng ngay vào Mã của bạn sẽ tạo ra niềm tin, nhấn mạnh Thiết kế Doanh nghiệp
                  của bạn và thu hút nhóm mục tiêu của bạn nhiều hơn.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <div class="flex">
              <div>
                <h1 class="bg-[#ED7F22] text-white w-[50px] h-[50px] pt-[10px] rounded-[50%]">4</h1>
              </div>
              <div class="pl-3">
                <h3 class="text-[#ED7F22] pl-2">THIẾT KẾ MÃ QR CỦA BẠN</h3>
                <p class="text-left pt-3">
                  Việc tải lên một biểu tượng ngay vào Mã của bạn sẽ tạo ra niềm tin, nhấn mạnh Thiết kế Doanh nghiệp
                  của bạn và thu hút nhóm mục tiêu của bạn nhiều hơn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CommonQuestion class="mt-[80px]" />

    <Contact class="mt-[80px]" />
  </div>
</template>
