<template>
  <div style="
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 0.8rem
      ">
    <img src="@/assets/images/general/logo_galenium_navbar.png" alt="navbar_logo" width="150">
  </div>
  <ul class="menu">
    <li>
      <details :open="menus.Home">
        <summary>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Beranda
        </summary>
        <ul>
          <router-link :to="{ name: 'CmsHomeSliderEdit' }">
            <li><a :class="{ active: menus.Slider }">Slider Gambar</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsHomeAboutUsEdit' }">
            <li><a :class="{ active: menus.About }">Tentang Kami</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsHomeProductEdit' }">
            <li><a :class="{ active: menus.Product }">Kategori Produk</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsHomeQualityEdit' }">
            <li><a :class="{ active: menus.Quality }">Kualitas & Sertifikat</a></li>
          </router-link>
        </ul>
      </details>
    </li>
    <li>
      <details :open="menus.Aboutus">
        <summary>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>Tentang Kami
        </summary>
        <ul>
          <router-link :to="{ name: 'CmsAboutAboutheadEdit' }">
            <li><a :class="{ active: menus.Abouthead }">Tentang Kami</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsAboutCompanyEdit' }">
            <li><a :class="{ active: menus.Company }">Profil Perusahaan</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsAboutPresidentEdit' }">
            <li><a :class="{ active: menus.President }">Sambutan Presiden</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsAboutVisionEdit' }">
            <li><a :class="{ active: menus.Vision }">Visi & Misi</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsAboutCompanyvalueEdit' }">
            <li><a :class="{ active: menus.Value }">Nilai Perusahaan</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsAboutCertificationEdit' }">
            <li><a :class="{ active: menus.Certification }">Sertifikat</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsAboutOfficeEdit' }">
            <li><a :class="{ active: menus.Office }">Kantor & Pabrik</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsAboutAwardsEdit' }">
            <li><a :class="{ active: menus.Award }">Penghargaan</a></li>
          </router-link>
        </ul>
      </details>
    </li>
    <li>
      <details :open="menus.HProduct">
        <summary>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M19.7786 4.22171C22.1217 6.56486 22.1217 10.3639 19.7786 12.707L12.7075 19.7781C10.3643 22.1212 6.56535 22.1212 4.2222 19.7781C1.87906 17.4349 1.87906 13.6359 4.2222 11.2928L11.2933 4.22171C13.6364 1.87857 17.4354 1.87857 19.7786 4.22171ZM14.1224 15.5347L8.46555 9.87786L5.63642 12.707C4.07432 14.2691 4.07432 16.8018 5.63642 18.3638C7.19851 19.9259 9.73117 19.9259 11.2933 18.3638L14.1224 15.5347ZM18.3643 5.63593C16.8022 4.07383 14.2696 4.07383 12.7075 5.63593L9.87976 8.46365L15.5366 14.1205L18.3643 11.2928C19.9264 9.73069 19.9264 7.19803 18.3643 5.63593Z" />
          </svg>Produk
        </summary>
        <ul>
          <router-link :to="{ name: 'CmsProductTypeEdit' }">
            <li><a :class="{ active: menus.Type }">Produk Kesehatan & Produk Resep</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsProductCategoryList' }">
            <li><a :class="{ active: menus.Category }">Kategori</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsProductGroupList' }">
            <li><a :class="{ active: menus.Group }">Grup</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsProductList' }">
            <li><a :class="{ active: menus.PProduct }">Produk</a></li>
          </router-link>
        </ul>
      </details>
    </li>
    <li>
      <details :open="menus.BS">
        <summary>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M11.8611 2.39057C12.8495 1.73163 14.1336 1.71797 15.1358 2.35573L19.291 4.99994H20.9998C21.5521 4.99994 21.9998 5.44766 21.9998 5.99994V14.9999C21.9998 15.5522 21.5521 15.9999 20.9998 15.9999H19.4801C19.5396 16.9472 19.0933 17.9102 18.1955 18.4489L13.1021 21.505C12.4591 21.8907 11.6609 21.8817 11.0314 21.4974C10.3311 22.1167 9.2531 22.1849 8.47104 21.5704L3.33028 17.5312C2.56387 16.9291 2.37006 15.9003 2.76579 15.0847C2.28248 14.7057 2 14.1254 2 13.5109V6C2 5.44772 2.44772 5 3 5H7.94693L11.8611 2.39057ZM4.17264 13.6452L4.86467 13.0397C6.09488 11.9632 7.96042 12.0698 9.06001 13.2794L11.7622 16.2518C12.6317 17.2083 12.7903 18.6135 12.1579 19.739L17.1665 16.7339C17.4479 16.5651 17.5497 16.2276 17.4448 15.9433L13.0177 9.74551C12.769 9.39736 12.3264 9.24598 11.9166 9.36892L9.43135 10.1145C8.37425 10.4316 7.22838 10.1427 6.44799 9.36235L6.15522 9.06958C5.58721 8.50157 5.44032 7.69318 5.67935 7H4V13.5109L4.17264 13.6452ZM14.0621 4.04306C13.728 3.83047 13.3 3.83502 12.9705 4.05467L7.56943 7.65537L7.8622 7.94814C8.12233 8.20827 8.50429 8.30456 8.85666 8.19885L11.3419 7.45327C12.5713 7.08445 13.8992 7.53859 14.6452 8.58303L18.5144 13.9999H19.9998V6.99994H19.291C18.9106 6.99994 18.5381 6.89148 18.2172 6.68727L14.0621 4.04306ZM6.18168 14.5448L4.56593 15.9586L9.70669 19.9978L10.4106 18.7659C10.6256 18.3897 10.5738 17.9178 10.2823 17.5971L7.58013 14.6247C7.2136 14.2215 6.59175 14.186 6.18168 14.5448Z" />
          </svg>Bisnis
        </summary>
        <ul>
          <router-link :to="{ name: 'CmsBusinessEdit' }">
            <li><a :class="{ active: menus.Business }">Bisnis</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsBusinessDistributorList' }">
            <li><a :class="{ active: menus.Distributor }">Distributor</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsBusinessMitraEdit' }">
            <li><a :class="{ active: menus.Mitra }">Mitra Bisnis</a></li>
          </router-link>
        </ul>
      </details>
    </li>
    <router-link :to="{ name: 'CmsNewsList' }">
      <li>
        <a :class="{ active: menus.News }"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM14 9H18V7H14V9ZM18 13H14V11H18V13ZM6 15V17L18 17V15L6 15Z" />
          </svg>Berita</a>
      </li>
    </router-link>
    <li>
      <details :open="menus.CR">
        <summary>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M15 3C15.5523 3 16 3.44772 16 4V6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7C2 6.44772 2.44772 6 3 6H8V4C8 3.44772 8.44772 3 9 3H15ZM16 8H8V19H16V8ZM4 8V19H6V8H4ZM14 5H10V6H14V5ZM18 8V19H20V8H18Z" />
          </svg>Karier
        </summary>
        <ul>
          <router-link :to="{ name: 'CmsCareerEdit' }">
            <li><a :class="{ active: menus.Career }">Karir</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsCareerList' }">
            <li><a :class="{ active: menus.CareerList }">List karir</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsCareerCategoryList' }">
            <li><a :class="{ active: menus.CareerCategory }">Posisi</a></li>
          </router-link>
        </ul>
      </details>
    </li>
    <li>
      <details :open="menus.General">
        <summary>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
          </svg>Footer
        </summary>
        <ul>
          <router-link :to="{ name: 'CmsGeneralEdit' }">
            <li><a :class="{ active: menus.Generalhead }">Kontak Kami</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsGeneralPrivacyEdit' }">
            <li><a :class="{ active: menus.Privacy }">Kebijakan Privasi</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsGeneralTermsEdit' }">
            <li><a :class="{ active: menus.Terms }">Syarat dan Ketentuan</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsGeneralFarmaEdit' }">
            <li><a :class="{ active: menus.Farma }">Farmakovigilans</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsGeneralFAQEdit' }">
            <li><a :class="{ active: menus.FAQ }">FAQ</a></li>
          </router-link>
          <router-link :to="{ name: 'CmsSMTPEdit' }">
            <li><a :class="{ active: menus.SMTP }">Setting Email Server</a></li>
          </router-link>
        </ul>
      </details>
    </li>
    <router-link :to="{ name: 'CmsUsersList' }">
      <li>
        <a :class="{ active: menus.Users }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>Users</a>
      </li>
    </router-link>
  </ul>
</template>
<script>
export default {
  props: {
    selectedMenu: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      menus: {
        Home: false,
        Slider: false,
        About: false,
        Product: false,
        Quality: false,
        Aboutus: false,
        Abouthead: false,
        Company: false,
        President: false,
        Vision: false,
        Value: false,
        Certification: false,
        Office: false,
        Award: false,
        Office: false,
        HProduct: false,
        Type: false,
        Category: false,
        Group: false,
        PProduct: false,
        BS: false,
        Business: false,
        Distributor: false,
        Mitra: false,
        CR: false,
        Career: false,
        CareerList: false,
        CareerCategory: false,
        News: false,
        General: false,
        Generalhead: false,
        Privacy: false,
        Terms: false,
        Farma: false,
        FAQ: false,
        SMTP: false,
        Users: false,
      }
    }
  },
  mounted() {
    const selectedMenu = this.selectedMenu.split("-")
    for (let index = 0; index < selectedMenu.length; index++) {
      if (this.menus.hasOwnProperty(selectedMenu[index])) {
        this.menus[selectedMenu[index]] = true;
      }
    }
  }
}
</script>