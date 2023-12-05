<script setup>
const fbCustomerChat = ref();

onMounted(() => {
  const chatbox = fbCustomerChat.value;
  chatbox.setAttribute("page_id", "289094798208556");
  chatbox.setAttribute("attribution", "biz_inbox");
  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v18.0",
    });
  };
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
});
</script>

<template>
  <!-- Messenger Plugin chat Code -->
  <div id="fb-root"></div>
  <!-- Your Plugin chat code -->
  <div ref="fbCustomerChat" id="fb-customer-chat" class="fb-customerchat"></div>
</template>
