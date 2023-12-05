<script setup>
const activeKey = ref(0);

const questions = [
  {
    q: "1, MÃ QR LÀ GÌ?",
    a: `Mã QR là mã vạch hai chiều bao gồm một mô hình điểm ảnh có màu sắc tương phản cho phép mã hóa lên đến vài trăm ký tự: chữ, số, 
        ký tự đặc biệt, đường link URL… Các điện thoại thông minh và máy tính bảng có camera cũng như các thiết bị quét mã có thể nhận ra và giải mã chúng cực nhanh - không có gì đáng ngạc nhiên khi QR là viết tắt của Quick Response.`,
    image: "../public/images/qrcode-create/illustrate/Illu_Mini_Dynamic-1.png",
  },
  {
    q: "2, MÃ QR HOẠT ĐỘNG THẾ NÀO?",
    a: "Trong mã vạch 1D (hoặc mã vạch UPC), thông tin chỉ có thể được lưu trữ theo một hướng, tức là theo chiều ngang. Tuy nhiên, trong Mã QR, thông tin có thể được lưu trữ cả theo chiều ngang lẫn chiều dọc. Điều này cho phép QR Codes lưu trữ nhiều thông tin hơn; cụ thể, một mã vạch UPC điển hình có thể lưu trữ từ 20 đến 25 ký tự trong khi mã QR có dung lượng tối đa 7,089 ký tự. <b>Modules</b> Mã QR được tạo thành từ các module và có 40 phiên bản mã QR. Phiên bản 1 có 21 mô-đun và số lượng mô-đun tăng khi phiên bản tăng. Phiên bản 40 có 177 mô-đun.",
    image: "../public/images/qrcode-create/illustrate/QR-2.png",
  },
  {
    q: "3, QUÉT MÃ QR NHƯ THẾ NÀO?",
    a: `Giải mã QR không cần gì hơn điện thoại di động hoặc máy tính bảng, các hệ điều hành điện thoại thông minh đời mới đều đã hỗ trợ đọc mã QR thông qua camera của máy. Nếu điện thoại của chưa hỗ trợ thì có thể tải về trình đọc mã QR có sẵn và có thể tải xuống từ tất cả các Cửa hàng ứng dụng. Bạn có thể Tìm trên kho ứng dụng AppStore hay Android Market từ khóa "QR scanner" “QRX” để tải ứng dụng quét QR Code cho iPhone hay smartphone dùng Android. 
        <br/>
        <br/>
        Để quét Mã, chỉ cần khởi chạy camera chụp ảnh hoặc ứng dụng vừa tải về và chờ cho đến khi máy ảnh tự động phát hiện nó. Trong vài giây, nội dung được mã hoá được hiển thị trên màn hình. Để đánh giá cho chất lượng của ứng dụng, bạn có thể tham khảo xếp hạng đánh giá trung bình trong Cửa hàng ứng dụng`,
    image: "",
  },
  {
    q: "4, TÔI CÓ THỂ LÀM GÌ VỚI MÃ QR?",
    a: "Một mã QR có thể chứa đựng thông tin một địa chỉ web (URL), thời gian diễn ra một sự kiện, thông tin liên hệ (như vCard), địa chỉ email, tin nhắn SMS, nội dung ký tự văn bản hay thậm chí là thông tin định vị vị trí địa lý. Tùy thuộc thiết bị đọc mã QR mà bạn dùng khi quét, nó sẽ dẫn bạn tới một trang web, gọi đến một số điện thoại, xem một tin nhắn... Cách ứng dụng QR code là vô cùng rộng. Đặc biệt khi mã hoá các URL có nhiều nội dung khác nhau. Chúng bao gồm trang chủ, trang web sản phẩm, video, phòng trưng bày ảnh, mã phiếu giảm giá, cuộc thi, hình thức ",
    image: "../public/images/qrcode-create/illustrate/Illu_TrackPerform-1.png",
  },
  {
    q: "5, TẠO MÃ QR NHƯ THẾ NÀO?",
    a: "Với QRX mã QR Code có thể được tạo ra chỉ với ba bước đơn giản. Lúc đầu, hãy chọn chức năng cho Mã QR của bạn. Thứ hai, nhập nội dung mà bạn muốn cung cấp cho khách hàng của mình và thiết kế lại nó một cách độc đáo bằng cách điều chỉnh màu sắc và tải lên một biểu tượng logo vào nó. Nếu bạn đã hoàn thành các bước trên, mã QR của bản đã hoạt động và tải nó xuống.",
    image: "../public/images/qrcode-create/illustrate/QR-3.png",
  },
  {
    q: "6, CÓ TỚI 21 LOẠI NỘI DUNG CHO MÃ QR TRÊN QRX.COM.VN, TÔI NÊN DÙNG LOẠI NÀO ?",
    a: "Tùy thuộc vào thông tin nội dung mà bạn muốn QR Code chứa đựng mà có thể chọn nội dung phù hợp nhất. Bạn có thể tìm hiểu tổng quan và cách sử dụng phù hợp nhất của từng loại 21 nội dung tại…",
    image: "",
  },
  {
    q: "7, TÔI CÓ THỂ THAY ĐỔI ĐƯỢC NÔI DUNG HOẶC LOẠI NỘI DUNG ĐÃ GẮN VÀO 1 MÃ QR CODE KHÔNG?",
    a: `Đối với việc muốn chỉnh sửa, thay đổi được nội dung đã gắn với QR Code thì bạn cần sử dụng QR Code động để có thể thực hiện được điều này. <br/>
        Bạn có thể chỉnh sửa mã QR động theo các bước sau: <br/>
        Bước 1:  Nhấp vào Quản lý ở trên cùng để xem mã QR của bạn. <br/>
        Bước 2:  Nhấp vào mũi tên gắn với nút Tải xuống ngay bên cạnh Mã QR của bạn. <br/>
        Bước 3:  Chọn Chỉnh sửa.
        Bước 4:  Thực hiện các thay đổi mong muốn và nhấp vào nút Cập nhật để lưu chúng. <br/>
        Người dùng sẽ nhìn thấy nội dung cập nhật khi họ quét mã QR của bạn.`,
    image: "../public/images/qrcode-create/illustrate/QR-4.png",
  },
  {
    q: "8, MÃ QR TĨNH VÀ ĐỘNG KHÁC NHAU NHƯ THẾ NÀO ?",
    a: "QR mã động có thể được chỉnh sửa ngay cả sau khi chúng đã được in. Điều này có nghĩa là bạn có thể thay đổi cả chức năng và nội dung của một QR QR động bất cứ lúc nào và thường xuyên như bạn muốn. Mã động sử dụng URL ngắn để chuyển hướng người dùng đến trang đích mong muốn của bạn. Điều này cho phép thu thập số liệu thống kê về các số quét, địa điểm và ngày / thời gian, và hệ điều hành được sử dụng. Không thể chỉnh sửa mã QR tĩnh như Email hoặc Mã văn bản sau khi in và không thu thập bất kỳ thống kê quét nào. Họ cũng không mã hóa một URL ngắn và liên kết trực tiếp đến địa chỉ đích của bạn hoặc chứa toàn bộ thông tin được mã hóa",
    image: "",
  },
  {
    q: "9, TẠO MÃ QR TĨNH NHƯ THẾ NÀO?",
    a: `Qrx.com.vn là một công cụ Quản lý mã QR sẽ giúp bạn tạo, thiết kế, quản lý và theo dõi tất cả mã QR của bạn cho các chiến dịch quảng cáo của bạn. <br/>
        Để tạo Mã QR, hãy làm theo các bước sau: <br/>
        -	Bước 1:  Đăng nhập vào tài khoản Qrx.com.vn của bạn. Nếu bạn không phải là người dùng trả tiền, bạn có thể đăng ký dùng thử miễn phí 14 ngày <br/>
        -	Bước 2:  Chọn một danh mục có liên quan từ danh mục và nhấp vào loại Mã QR mà bạn muốn tạo. Nếu bạn không thể tìm thấy QR Code có liên quan, bạn có thể tìm kiếm bằng cách sử dụng thanh QR QR tìm kiếm <br/>
        -	Bước 3: Thêm nội dung và nhấp vào Tạo mã QR <br/>
        -	Bước 4:  Thêm Tên Mã QR <br/>
        -	Bước 5:  Nhấp vào Lưu và mã QR của bạn sẽ được tạo <br/>
        -	Bước 6:  Tùy chỉnh mã QR của bạn và cập nhật <br/>
        -	Bước 7:  Tải xuống QR Code này và đặt nó vào tài liệu quảng cáo của bạn <br/>
        -	Bước 8:  Kiểm tra mã QR của bạn bằng cách quét nó`,
    image: "",
  },
  {
    q: "10, TẠO MÃ QR ĐỘNG NHƯ THẾ NÀO ?",
    a: `Trước tiên lưu ý rằng QR Code chỉ có thể chứa URL. Do đó, không phải tất cả QR Codes nào cũng là Dynamic. Mã QR có nội dung như văn bản đơn giản, thông tin về Wifi, Vcard đơn giản, địa chỉ email, số điện thoại, tin nhắn SMS và địa chỉ bitcoin chỉ có thể là Static QR code.
        Xem <a href="https://qrx.com.vn/blog/su-khac-biet-giua-dynamic-and-static-qr-codes-qr-dong-va-qr-tinh/" target="_blank" class="text-[#ed7f22]">sự khác biệt giữa dynamic and static QR Codes</a><br/>
        Để tạo một Dynamic QR code, hãy làm theo các bước sau: <br/>
        -	Bước 1: Đăng nhập vào tài khoản QRX của bạn. Tài khoản này chỉ dành cho những khách hàng có sử dụng dịch vụ của QRX <br/>
        -	Bước 2: Chọn một danh mục có liên quan nhấp vào loại Mã QR mà bạn muốn tạo. <br/>
        -	Bước 3: Thêm nội dung và nhấp vào Tạo lô mã QR <br/>
        -	Bước 4: Thêm các số liệu liên quan tạo lô mã QR <br/>
        -	Bước 5: Nhấp vào Lưu và Xuất lô QR của bạn sẽ được tạo <br/>
        -	Bước 6: Tải xuống QR Code này và đặt nó vào tài liệu quảng cáo của bạn <br/>
        -	Bước 7: Kiểm tra mã QR của bạn bằng cách quét nó`,

    image: "",
  },
  {
    q: "11, TÔI ĐÃ TẠO 1 MÃ QR TRÊN QRX VÀ GIỜ NÓ KHÔNG HOẠT ĐỘNG, TẠI SAO ?",
    a: `Nếu bạn tạo một QR Code được thiết kế riêng nhưng ứng dụng QR Code scanning trên điện thoại thông minh của bạn không quét ra thì có thể là vì những lý do sau: <br/>
        - Kích thước lớn của logo: Giảm kích thước của logo để tăng kích thước loại bỏ mô-đun dữ liệu <br/>
        - Mức độ sai lệch thấp: Nếu bạn thêm một Logo, hãy đưa mức độ sai lệch lên High or Very High để bù lại sự mất mát của các mô-đun <br/>
        - Tương phản màu thấp: Độ tương phản giữa màu của QR Code (Eye và Data) và nền của nó có thể thấp. Làm sáng màu nền và làm tối các màu QR Code để tăng độ tương phản`,
    image: "",
  },
  {
    q: "12, MÃ QR CÓ GIỚI HẠN VỀ SỐ LẦN QUÉT KHÔNG?",
    a: `Không. Không có giới hạn về số lần quét trên cả Dynamic và Static QR code trong bất kỳ gói tài khoản nào–Free Trial, Lite, Standard và Pro.`,
    image: "",
  },
  {
    q: "13, MÃ QR MIỄN PHÍ CÓ BỊ HẾT HẠN KHÔNG?",
    a: `QR code Tĩnh sẽ vẫn hoạt động kể cả khi bạn đăng ký hoặc không đăng ký dịch vụ với Qrx.com.vn. Tuy nhiên, bạn sẽ không thể chỉnh sửa nội dung hoặc theo dõi hoạt động quét của QR code của bạn. <br/>  
        Các dữ liệu đích chỉ cần sử dụng Static QR code: <br/> 
        •	Sự kiện Lịch <br/> 
        •	Thông tin Vcard đơn giản <br/> 
        •	Số điện thoại <br/> 
        •	Địa chỉ Email <br/> 
        •	Đoạn text ngắn <br/> 
        •	Địa chỉ Bitcoin <br/> 
        •	Wifi <br/> 
        •	Tin nhắn văn bản`,
    image: "",
  },
  {
    q: "14, TÔI ĐÃ TẠO 1 MÃ QR TRÊN qrocde-marketing.vn. NÓ SẼ HOẠT ĐỘNG TRONG BAO LÂU?",
    a: `Sử dụng qrx.com.vn bạn có thể tạo 2 loại QR code: Static QR code và Dynamic QR code <br/>  
        -	QR code Tĩnh sẽ vẫn hoạt động kể cả khi bạn đăng ký hoặc không đăng ký dịch vụ với Qrx.com.vn. Tuy nhiên, bạn sẽ không thể chỉnh sửa nội dung hoặc theo dõi hoạt động quét của QR code của bạn. <br/> 
        -	QR code động sẽ hết hạn và không hoạt động khi được quét sau khi thời gian dùng thử miễn phí 14 ngày kết thúc. Để giữ cho chúng luôn hoạt động, bạn sẽ phải đăng ký một trong những gói tính năng của Qrx.com.vn. Xem <a href="https://qrx.com.vn/bang-gia" target="_blank" class="text-[#ed7f22]">bảng giá</a> để biết thêm chi tiết.`,
    image: "",
  },
  {
    q: "15, LÀM THẾ NÀO ĐỂ TẠO MỘT SỐ LƯỢNG LỚN QRCODE?",
    a: `Để tạo ra QR với số lượng nhiều hơn bạn có thể đăng ký Tài Khoản Cao cấp của chúng tôi.`,
    image: "",
  },
  {
    q: "16, TÔI MUỐN BIẾT BẢNG GIÁ DỊCH VỤ THÌ XEM Ở ĐÂU?",
    a: `Bạn có thể xem và tham khảo bảng báo giá của Qrx.com.vn ở đây <a href="https://qrx.com.vn/bang-gia" target="_blank" class="text-[#ed7f22]">here</a>`,
    image: "",
  },
  {
    q: "17, TÔI CÓ THỂ NÂNG CẤP HOẶC HẠ CẤP GÓI DỊCH VỤ ĐÃ MUA KHÔNG? ",
    a: `Bạn luôn có thể nâng cấp lên một gói cước cao cấp. Nếu bạn quyết định nâng cấp lên một kế hoạch xếp hạng thấp, những thay đổi sẽ có hiệu lực với thời hạn của hợp đồng tiếp theo.
        Để nâng cấp hoặc hạ cấp tài khoản của bạn, hãy đi tới phần Tổng quan về Gói cước& Giá cả trong tài khoản của bạn.`,
    image: "",
  },
  {
    q: "18, TÔI CÓ ĐƯỢC HOÀN LẠI TIỀN NẾU TÔI NÂNG CẤP TÀI KHOẢN SỬ DỤNG CỦA MÌNH KHÔNG? ",
    a: `Vâng. Ngay sau khi nâng cấp tài khoản của bạn, bạn sẽ nhận được một email bao gồm một hoá đơn mới. Số tiền này sẽ tự động giảm theo thời gian còn lại của gói tài khoản trước đó của bạn.`,
    image: "",
  },
  {
    q: "19, CÓ NHỮNG TÍNH NĂNG GÌ TRONG TÀI KHOẢN DÙNG THỬ?",
    a: `Phiên bản dùng thử miễn phí cho phép bạn truy cập vào tất cả các tính năng của Qrx.com.vn ngoại trừ một số tính năng của doanh nghiệp như tạo ra hàng loạt, ghi nhãn trắng và API. Trong thời gian dùng thử miễn phí, bạn có thể: <br/> 
        • Tạo QR mã QR không giới hạn <br/> 
        • Sử dụng tất cả các khả năng thiết kế <br/> 
        • Truy cập tất cả các tính năng phân tích và báo cáo <br/> 
        Truy cập các tính năng tiên tiến như truy cập nhiều người dùng, bảo vệ mật khẩu, băm tùy chỉnh, URL ngắn tùy chỉnh.`,
    image: "",
  },
  {
    q: "20, TÔI CÓ THỂ GIA HẠN TRONG THỜI GIAN DÙNG THỬ MIỄN PHÍ KHÔNG?",
    a: `Vâng. Chúng tôi có thể kéo dài thời gian dùng thử miễn phí 7 ngày. Để yêu cầu gia hạn thời gian dùng thử miễn phí, vui lòng viết cho chúng tôi một email bao gồm địa chỉ email đăng nhập hoặc ID khách hàng của bạn.`,
    image: "",
  },
  {
    q: "21, TÔI CÓ THỂ THANH TOÁN THEO THÁNG/QUÝ KHÔNG?",
    a: `Vâng. Qrx.com.vn là công cụ duy nhất cung cấp cho bạn tính linh hoạt trong việc đăng ký hàng tháng, hàng quý, nửa năm và hàng năm. Khoảng thời gian thuê bao càng dài, cao hơn sẽ là khoản tiết kiệm.
        Lựa chọn thời gian sẽ có sẵn tại thời điểm thanh toán. Xem tại <a href="https://qrx.com.vn/bang-gia" target="_blank" class="text-[#ed7f22]">Bảng giá</a>`,
    image: "",
  },
];
</script>

<template>
  <section>
    <div class="bg-white p-14 max-lg:px-4 max-lg:py-6 rounded-[24px]">
      <h2 class="text-center">Các câu hỏi thường gặp FAQs</h2>

      <div class="border-2 border-solid border-[#999] max-lg:border-none rounded-3xl mt-14 max-lg:mt-6">
        <a-collapse
          v-model:activeKey="activeKey"
          :bordered="false"
          expandIconPosition="right"
          accordion
          class="bg-white ant-collapse-borderless--custom"
        >
          <a-collapse-panel v-for="(question, index) in questions" :key="index" :header="question.q">
            <div v-html="question.a"></div>
            <div class="flex justify-center mt-[40px]" v-if='question.image !== ""'>
              <nuxt-picture
                loading="lazy"
                :src="question.image"
                :img-attrs="{ alt: question.q, width: 450, height: auto }"
              />
            </div>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </section>
</template>
