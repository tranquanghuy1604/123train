<template>
  <div class="share relative">
    <div class="pt-[90px]">
      <div class="grid grid-cols-2 max-w-[1280px] mx-auto text-white">
        <div class="col-span-1">
          <div class="share-items-heading">
            <h2 class="text-[40px] font-[500]">100+ doanh nghiệp</h2>
            <h3 class="text-[20px] font-[500] mt-[8px]">
              Đang phát triển nhân sự trên ứng dụng 123Train
            </h3>
          </div>
          <div
            class="share-content border-b-[1px] border-solid border-white mt-[30px]"
          >
            <p class="mb-[15px]">
              "Tôi thấy anh em startup, SMB có quân số từ 20 người trở lên đều
              cần 123Train để số hoá quy trình đào tạo của mình. Tôi nói nghiêm
              túc là bao nhiêu tinh hoa, knowledge, kiến thức và cả năng lực của
              một doanh nghiệp... cuối cùng nằm cả trong quy trình đào tạo đấy!"
            </p>
          </div>
          <div class="name-starup text-right mt-[20px] font-[00] text-[18px]">
            <p class="text-right">anh Nguyễn Khánh Trình</p>
            <p>Chairman tại công ty Clever Group</p>
          </div>
          <div class="share-click flex justify-end mt-[30px]">
            <button
              class="rounded-[50%] border-[4px] border-solid border-white hover:opacity-70"
            ></button>
            <button
              class="rounded-[50%] border-[4px] border-solid border-white hover:opacity-70 ml-[10px]"
            ></button>
          </div>
          <div class="share-link flex h-[44px] mt-[30px]">
            <button
              class="bg-[#fff] rounded-[5px] font-[600] px-[40px] hover:opacity-80 text-black text-[18px]"
            >
              Bắt đầu với 123Train ngay hôm nay
            </button>
            <img
              class="ml-[40px] cursor-pointer"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAzCAMAAADb2hp9AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAYZQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////l9NhuQAAAIJ0Uk5TADaa38gtwP/TcPu7iJBnTCP25QSobB/+znbvJ7PtN7ggBRMVBs39t0oSGHfJ/NaUQgIpDXG98PJrDhH36ZhDC2XLIVvsUibz1AG/owdPxMYseK1R2evXaq7SglkaD8HMHGL6njumPqqD9NgKaLZ+Fuew5uEZLtXaNXLF+eSgQEGxRV8ybPkAAAG8SURBVHicldVnV8IwFAbggCPgxFkcKLgXoig4cA8U90Jxb8W9tzj+uWmSyjgeeH0/pclz0pzb25aQONHpk5LjrUckJZVSasCsMY1Zmg7ZDMqTidgsYWk2YE05wubmAThfblwA2EJFWDOycZGwxSWAJaXcWsoQS8yqLbfGI7aKyioxqqY1tXV8VG+t+EM2NDaxR2ZvdrS0EuLUtbEpa7vLze7Q4ersiqLdDg/V0tPb188KMuBSfqfcRbaw7euh0XHnxEwMDml2uIYmzIgszShgWSF50b1jiKXjKcz6JiA7OaVuPA1ZvY+feAaxs6KjTIi1z4lSzCN4QdZ4AcGLEi8hWGumDsD6tUeNbLz8H7z0H+zWsB/RVokNCF6ROIDgVdEZZA3BdF3gOgj7NzjehF4Tat7kegvCdHtHxUYMU8su6+nKPVDz/wvUpGr2GT4AreJVT52K4UNejyPIemSDHCM4KPuj8CSxPT3T+vQ8obWHfxm+i0T4koRzdR3f3vgiMCmL/XpHZbWNRKVlLGJRub3zRFwa7klMHh7l0lPwmX1eW50v43Ii0B1rCanKen2j76GP8PE+Q9eK5ev79/oH+TlTi4moECkAAAAASUVORK5CYII="
              alt=""
            />
            <img
              class="ml-[40px] cursor-pointer"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAtCAYAAADcMyneAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAABNBJREFUeJzN2Vts02UYx/FqyBIvTEy8MFFG1xKDRkxU0IUEiaJBiJkIKIwx57ojiByEQWTC1nU9rDvW/1bGet7aOTJrdEh0KodwhiHtDgzZkLnJJitzg6wsxa7dz2cGZjN6brfuTT5Xvfne/N++7/OyFqRWXY83Mqb047LaTSfK2KyZtl7NUOC1TAU2GJlmCrRtPVUq3nG69PFId02s2E0KPJBYz5goEBRo2X22JDP7fMmsSPexFm1WwFXSQcZEgaBAUGBbTlPx8ogGLt6qwGTJdYzpfiAoEIKLRY2SS0XzIxK45DMl3Ek2lJtdAkGBjiJzYVVZs/SpaQ18I0sJT3gU6RIICgQFDpe3SrMrLxc8Ni2BS3cr4U2yrrx1UiAoEBTYo2wvSND9JnlkSgPf3qOCLzxdRRsFOicFggJBgU2GDvHiKQt8Z68K/kjRytsp0OkmEBSIg9fERuPvIm7YA1fkqOCvFJW8gwLtHgJBgfbvuoTFh7uFT4Qt8N08FQKRqpZ3UuA9D4GgQFDg4E89+VuO3hCEvtHHCdUIVIqysosCbV4CQYGgwI4TfYL3QgpcKVYjGKmqym7F5QKrj0BQIM78lXfsQn/ey0EFrpKqEaxU5YFe7RWJ1Y9AUODYpVt8bctA7tMBBa4p0iAUqYqqfv1V8ZAfgaBAUODIlcFcvt+Ba0s1CFW6qspS1yke8CvwVi6skkyzfQuvj/DIo14D47/UIBzSVIqh+msii7dA002Kk6Y323clw4WZvOkxMKFcg3DJUCtuf3NN1OsusKmPj7ulaa2j+z6GB4fIvIcCE/drEU4ZGpW14bqo1zXw3J9854gspX1UlAQfRkk5eXIiMOmAFuGWoVHbDl8Xdo0Hnu7m20cqee2jJR8hAHfIThLFSlZqMRU2VqttP/+R32JTJnU65BsQpBZWilqHqbCNkduGudwWB/Nhp0OVgCCZWGk6HcJtu1xu+5v7XJf1GS7uzn3W7qhY0+7Ur0cA7pAsEsXK0OsQTrsqGGs/54Xewdnz8MAQ93nnqIIi6+Phg4OUk/8/ko21OoRLNiO7fYPzUu/N2fMxWX/Mi7ArVrU6GyjEvUPk4W3mk7pqhMNeRjbUFbPQ0h39Cjzp4SzAPfWqZmfjOrgwE88b9af11QhVXlmJ5Sp70UBndCx8YsfCpn7fPHZsbR/hEe9/dVuN1QiFQFZiaWMvGboc/Tr8NEL4XqNc1/ZvqxEsSXFh7yX2W1bTnKXwwxjRksCOWzsaahCMwgJp9zn2Cuv5Ocvhh2MkuANr1vc1CFSRRNp1kh1nOzknDj50kNCO/Lt/qEEgyviiziMxq+8dYa+GF4NkCwn90vR5Yw38VcYXd/zIXmcn8GD8t2ISvmtn9i96+IPZI2pviEl0EnhgJOG/uH9xVA9fmJ3Ctq9jeE4CN5rI1I0+9h3Xwxtmm7D1q5gMuNFDEsjUDo9yT+jhCZOeb9ZxNmOSYZJNpmf8lnfKAHdkKSKzkrMdLhykikzvAFNwxoDJytYLTfs5WXDRSCIzAhaeM2DCWQOKPxCbZNw9uK+NRHaILr5gwH/OG1C4ssBUxM0BsZBMEvlnCMlFAyTjgcukzWKuwEbEZOY85Eh/rf0nf1mxWTBXXEtm3lOYxKCZlTO3MCrSHZ7Wv01oDQKDCb9mAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
        </div>
        <div class="col-span-1 pl-[100px]">
          <img
            class="absolute h-full top-0 z-10"
            src="https://www.123train.vn/assets/5_nkt.10324b3d.png"
            alt=""
          />
          <img
            class="absolute right-[200px] top-[170px] z-[3]"
            src="https://www.123train.vn/assets/5_card.879f1b63.png"
            alt=""
          />
          <img
            class="absolute top-0 translate-x-[75%] translate-y-[-14%]"
            src="https://www.123train.vn/assets/5_iphone.ad986418.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shre",
};
</script>
