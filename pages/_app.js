import '../assets/js/app-head.js';
import '../assets/js/uikit-components.js';
import '../assets/js/data-attr-helper.js';
import '../assets/js/anime-helper.js';
import '../assets/js/swiper-helper.js';
import '../assets/js/typed-helper.js';

import '../assets/css/uikit.min.css';

import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../assets/css/theme/main.css';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(false);
  const [firstRender, setFirstRender] = React.useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const hrefValue = this.getAttribute('href');

        // "#" bağlantıları için özel bir kontrol ekleyin, 
        // böylece bunlar üzerinde querySelector çalıştırmayın
        if (hrefValue === '#') {
          e.preventDefault(); // Varsayılan tıklama işlemini engelle
          return; // Hedef yok, bu yüzden işleyiciden çık
        }

        const target = document.querySelector(hrefValue);

        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });


  })

  React.useEffect(() => {
    setFirstRender(true);
  })

  if (!firstRender) {
    return <></>;
  }
  return (
    <>

      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </>
  )
}
export default MyApp;