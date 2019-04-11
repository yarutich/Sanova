import Glide from '@glidejs/glide';

var glideReviews = new Glide('.glide-reviews', {
    type: 'carousel',
    // autoplay: 3000
    perView: 2,
    breakpoints: {
        576: {
        }
    }

})
glideReviews.mount();
