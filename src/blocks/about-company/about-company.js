// import Glide from '@glidejs/glide';

// new Glide('.glide').mount();

modules.define('about-company', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

