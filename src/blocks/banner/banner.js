import Glide from '@glidejs/glide';

var glideBanner = new Glide('.glide-banner', {
    autoplay: 3000

}),
    glideAboutCompany = new Glide('.glide-about-company', {
        autoplay: 3000
    })

glideBanner.mount();
glideAboutCompany.mount();
