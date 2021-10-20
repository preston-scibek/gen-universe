function ImportStyle(path) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.media = 'screen';
    css.href = path;
    document.getElementsByTagName('head')[0].appendChild(css);
    return;
}

ImportStyle("https://raw.githubusercontent.com/EternalQuasar0206/gen-universe/main/src/styles/externals/region.css");