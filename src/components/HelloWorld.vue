<script setup>
import { ref } from "vue";
import "../theme/style.css";
import "../Font/fontawesome-free-6.1.1-web/css/all.min.css";
import Step from "./step.vue";
import step from "./step.vue";
defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <header class="header">
    <div
      class="flex justify-between items-center h-[100px] max-w-[1280px] mx-auto"
    >
      <img
        class="w-[100px]"
        src="src/assets/123train_landing_logo.2a28825c.png"
        alt=""
      />
      <ul class="navbar">
        <li
          class="inline-block leading-[100px] hover:opacity-70 hover:cursor-pointer"
        >
          <a class="text-[#fff] mr-[24px] text-[20px]" href="">Trang chủ</a>
        </li>
        <li class="inline-block leading-[100px] hover:opacity-70">
          <a class="text-[#fff] mr-[24px] text-[20px]" href="">Sản phẩm</a>
        </li>
        <li class="inline-block leading-[100px] hover:opacity-70">
          <a class="text-[#fff] mr-[24px] text-[20px]" href="">Ngành hàng</a>
        </li>
        <li class="inline-block leading-[100px] hover:opacity-70">
          <a class="text-[#fff] mr-[24px] text-[20px]" href="">Bảng giá</a>
        </li>
        <li class="inline-block leading-[100px] hover:opacity-70">
          <a class="text-[#fff] mr-[24px] text-[20px]" href="">Kiến thức</a>
        </li>
        <li class="inline-block leading-[100px] hover:opacity-70">
          <a class="text-[#fff] mr-[24px] text-[20px]" href="">Khách hàng</a>
        </li>
      </ul>
      <div class="justify-center">
        <button
          class="p-[12px] text-[#fff] rounded-[5px] border-solid border-white border-[3px] mr-[20px] w-[120px] hover:opacity-80"
        >
          Đăng nhập
        </button>
        <button
          class="bg-[#fff] rounded-[5px] p-[15px] font-[600] hover:opacity-80"
        >
          Đăng ký dùng thử
        </button>
      </div>
    </div>
  </header>
  <div class="main">
    <div class="home-container">
      <div class="home-item-container banner pt-[70px] h-auto">
        <div class="home-item banner max-w-[1280px] mx-auto relative">
          <div class="grid grid-cols-2 pt-[70px]">
            <div class="col-span-1">
              <h1 class="text-[#fff] text-[60px] mt-[20px] font-[600]">
                Giải pháp đào tạo nhân sự trực tuyến dành cho doanh nghiệp
              </h1>
              <p class="text-[#fff] my-[40px] text-[20px]">
                Đào tạo cho hàng ngàn nhân viên nhanh chóng và hiệu quả được hơn
                100 doanh nghiệp thuộc mọi lĩnh vực ngành nghề tin dùng. >
              </p>
              <div class="flex flex-wrap justify-between mb-[120px] mt-[30px]">
                <button
                  class="bg-[#fff] rounded-[5px] p-[15px] font-[600] hover:opacity-80"
                >
                  Đăng ký dùng thử
                </button>
                <a class="" href="">
                  <img
                    class="h-[55px] w-auto"
                    src="src/assets/google_play.973e45db.png"
                    alt=""
                  />
                </a>
                <a class="" href="">
                  <img
                    class="h-[55px] w-auto"
                    src="src/assets/app_store.e4b06a24.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="col-span-1 grid-row-1">
              <img
                class="absolute top-0"
                src="src/assets/1_pc.e93925e1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="home-item-container pt-[20px] bg-[#efebeb] h-[730px]">
        <div class="max-w-[1280px] mx-auto">
          <div class="home-item title mt-[30px]">
            <h2
              class="tilte text-orange-500 font-[700] text-center text-[38px]"
            >
              ÁP DỤNG NGAY 123Train.vn
            </h2>
            <h4 class="text-center text-[24px] opacity-70 mt-[8px]">
              Giúp truyền tải kiến thức hiệu quả gấp 3 lần so với truyền thống
            </h4>
          </div>
          <div class="main-content shadow">
            <div class="mt-[40px]">
              <div class="grid grid-cols-3">
                <div
                  class="col-span-1 text-heading h-[50px] border-2 border-[#ccc] border-r-0 relative hover:opacity-60 hover:cursor-pointer"
                >
                  <p class="text-[#000] text-center leading-[50px]">LÃNH ĐẠO</p>
                  <i
                    class="top-[8px] opacity-50 right-1 translate-y-1/2 absolute fa-solid fa-chevron-right"
                  ></i>
                </div>
                <div
                  class="col-span-1 text-heading h-[50px] border-2 border-[#ccc] border-r-0 relative hover:opacity-60 hover:cursor-pointer"
                >
                  <p class="text-[#000] text-center leading-[50px]">NHÂN SỰ</p>
                  <i
                    class="top-[8px] translate-y-1/2 opacity-50 right-1 absolute fa-solid fa-chevron-right"
                  ></i>
                </div>
                <div
                  class="col-span-1 text-heading h-[50px] border-2 border-[#ccc] relative hover:opacity-60 hover:cursor-pointer"
                >
                  <p class="text-[#000] text-center leading-[50px]">
                    NGƯỜI ĐÀO TẠO
                  </p>
                  <i
                    class="top-[8px] opacity-50 right-1 translate-y-1/2 absolute fa-solid fa-chevron-right"
                  ></i>
                </div>
              </div>
            </div>
            <div>
              <div class="grid grid-cols-2">
                <div class="content col-span-1 h-[450px]">
                  <div class="pt-[236px] pl-[28px] relative">
                    <h2
                      class="text-heading row-span-2 text-[#000] text-[30px] font-[400]"
                    >
                      TRƯỚC ĐÂY
                    </h2>
                    <div class="benifit-list">
                      <div class="benifit-item flex mt-[20px]">
                        <i
                          class="top-0 translate-y-[20%] mr-[16px] text-[23px] fa-solid fa-circle-xmark"
                        ></i>
                        <p class="text-[20px]">
                          <span class="font-[500]">Tốn kém</span>
                          chi phí nhân sự đào tạo, tổ chức khóa học
                        </p>
                      </div>
                      <div class="benifit-item flex mt-[20px]">
                        <i
                          class="top-0 translate-y-[20%] mr-[16px] text-[23px] fa-solid fa-circle-xmark"
                        ></i>
                        <p class="text-[20px]">
                          <span class="font-[500]">Khó kiểm soát</span>
                          được chất lượng dạy và học
                        </p>
                      </div>
                      <div class="benifit-item flex mt-[20px]">
                        <i
                          class="top-0 translate-y-[20%] mr-[16px] text-[23px] fa-solid fa-circle-xmark"
                        ></i>
                        <p class="text-[20px]">
                          Loay hoay trong việc tạo lập
                          <span class="font-[500]">văn hóa doanh nghiệp</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="content second">
                    <img
                      class="p-[16px]"
                      src="src/assets/benefit_after_img.f870f553.png"
                      alt=""
                    />
                    <div class="text-now pl-[36px]">
                      <h2
                        class="text-heading text-[30px] font-[400] text-orange-600"
                      >
                        GIỜ ĐÂY
                      </h2>
                      <div class="benifit-list-second">
                        <div class="benifit-item-second flex mt-[23px]">
                          <i
                            class="top-0 translate-y-[20%] mr-[16px] text-[23px] fa-solid fa-solid fa-check"
                          ></i>
                          <p class="text-[20px]">
                            <span class="font-[500]"
                              >Tiết kiệm 80% chi phí</span
                            >
                            cho nhân sự và tổ chức đào tạo
                          </p>
                        </div>
                        <div class="benifit-item-second flex mt-[23px]">
                          <i
                            class="top-0 translate-y-[20%] mr-[16px] text-[23px] fa-solid fa-solid fa-check"
                          ></i>
                          <p class="text-[20px]">
                            <span class="font-[500]"
                              >Báo cáo cập nhật liên tục</span
                            >
                            cho nhân sự và tổ chức đào tạo
                          </p>
                        </div>
                        <div class="benifit-item-second flex mt-[23px]">
                          <i
                            class="top-0 translate-y-[20%] mr-[16px] text-[23px] fa-solid fa-solid fa-check"
                          ></i>
                          <p class="text-[20px]">
                            <span class="font-[500]">Xây dựng văn hóa</span>
                            cho nhân sự và tổ chức đào tạo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ok />
    <kk />
    <bbb />
    <rrr />
  </div>
  <div class="footer"></div>
</template>

<script>
import ok from "./step.vue";
import kk from "./product.vue";
import bbb from "./Share.vue";
import rrr from "./RelateTo.vue";
export default {
  name: "string",
  components: {
    ok,
  },
  components: {
    kk,
  },
  components: {
    bbb,
  },
  components: {
    rrr,
  },
};
Step;
</script>
